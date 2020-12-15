import {ref } from 'vue'
import { isFunction, uniqBy } from 'lodash'
import useReactiveRef from './useReactiveRef'
export default function(requestRowsFn, rowKey = 'id') {
  const setPageValue = function(key, val) {
    pagination.value[key] = val
  }
  let [pageLoading, setLoading] = useReactiveRef(false)
  let [tableData, setTableData] = useReactiveRef([])
  let [pageSearchParams, setPageSearchParams] = useReactiveRef({})
  let [pageParams] = useReactiveRef({})
  let [selectedRowKeys, setSelectedRowKeys] = useReactiveRef([])
  let [selectedRows, setSelectedRows] = useReactiveRef([])

  const onSelectChange = function(keys, rows) {
    setSelectedRowKeys(keys)
    setSelectedRows(concatSelectedRow(rows))
  }

  const concatSelectedRow = function(rows) {
    let arr = uniqBy([...selectedRows.value, ...rows], rowKey)
    let temp = []
    selectedRowKeys.value.forEach(item => {
      let obj = arr.find(v => item === v[rowKey])
      if(obj) {
        temp.push(obj)
      }
    })
    return temp
  }

  const clearSelection = function() {
    setSelectedRowKeys([])
    setSelectedRows([])
  }

  let pagination = ref({
    total: 0,
    pageSize: 10,
    current: 1,
    onChange: (page) => {
      setPageValue('current', page)
      loadPage()
    },
    onShowSizeChange: (current, size) => {
      setPageValue('current', current)
      setPageValue('pageSize', size)
      loadPage()
    }
  })

  const loadPage = function() {
    let pageQuery = {
      page: pagination.value.current,
      pageSize: pagination.value.pageSize,
      ...pageSearchParams.value,
      ...pageParams.value
    }
    setLoading(true)
    if(!isFunction(requestRowsFn)) return
    requestRowsFn({
      ...pageQuery
    }).then(({data, total}) => {
      setTableData(data)
      setPageValue('total', total)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
    })
  }

  const onPageSearch = function(data) {
    clearSelection()
    setPageSearchParams({
      ...data
    })
    loadPage()
  }

  const resetPageLoad = function() {
    resetPageParams()
    loadPage()
  }
  const resetPageParams = function() {
    setTableData([])
    setPageValue('total', 0)
    setPageValue('pageSize', 10)
    setPageValue('current', 1)
  }

  return {
    pagination,
    pageLoading,
    loadPage,
    tableData,
    resetPageLoad,
    resetPageParams,
    pageSearchParams,
    onPageSearch,
    pageParams,
    onSelectChange,
    selectedRowKeys,
    selectedRows,
    clearSelection
  }
}
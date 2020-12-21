import {ref } from 'vue'
import { isFunction, uniqBy } from 'lodash'
import useReactiveRef from './useReactiveRef'
/**
 * @param requestRowsFn 请求函数
 * @param opts.rowKey 行唯一id
 */
export default function(requestRowsFn, opts = {}) {

  let [pageLoading, setLoading] = useReactiveRef(false)
  let [tableData, setTableData] = useReactiveRef([])
  let [pageSearchParams, setPageSearchParams] = useReactiveRef({})
  let [pageParams] = useReactiveRef({})
  let [selectedRowKeys, setSelectedRowKeys] = useReactiveRef([])
  let [selectedRows, setSelectedRows] = useReactiveRef([])
  opts = {
    rowKey: 'id', 
    ...opts
  }

  const { rowKey, isMerge} = opts

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

  let [pagination, setPageValue] = useReactiveRef({
    total: 0,
    pageSize: 10,
    current: 1,
    onChange: (page) => {
      setPageValue(page, 'current')
      loadPage()
    },
    onShowSizeChange: (current, size) => {
      setPageValue(current, 'current')
      setPageValue(size, 'pageSize')
      loadPage()
    }
  })

  const concatTableData = (data) => {
    setTableData(data)
  }
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
      concatTableData(data)
      setPageValue(total, 'total')
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
    setPageValue(0, 'total')
    setPageValue(10, 'pageSize')
    setPageValue(1, 'current')
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
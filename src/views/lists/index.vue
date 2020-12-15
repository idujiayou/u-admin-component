<template>
  <u-search-btn 
    :data="searchlist"
    :btns="btns"
    style="margin-bottom: 10px;"
    @search="onPageSearch">
  </u-search-btn>
  <u-table 
    :loading="pageLoading"
    rowKey='id'
    :row-selection="{ 
      selectedRowKeys: selectedRowKeys, 
      onChange: onSelectChange,
      type: 'checkbox'
    }" 
    :columns="columns" 
    :data-source="tableData" 
    @refresh="loadPage"
    :pagination="pagination">
  </u-table>

</template>
<script>
import requestUse from '@/use/request'
import tableUse from '@/use/table'
import {
  SearchOutlined
} from '@ant-design/icons-vue'

const request = function(query){
  console.log(query)
  let rows = []

  for(let i = 0; i < query.pageSize; i++) {
    let id = (i + 1) + ((query.page - 1) * query.pageSize)
    rows.push({
      id,
      name: 'name' + id,
      age: id + 10,
      address: 'New York No. 1',
      "asyncSelect": [
        1,
        2
      ],
      "asyncSelectArr": [
        {
          "id": 1,
          "name": "name1",
          "age": 11,
          "address": "New York No. 1"
        },
        {
          "id": 2,
          "name": "name2",
          "age": 12,
          "address": "New York No. 1"
        }
      ]
    })
  }
  return Promise.resolve({
    data: {
      rows: rows,
      total: 50
    }
  })
}

export default {
  components: {
    SearchOutlined
  },
  setup() {
    const {requestRows: requestRowsFn} = requestUse(request)
    return {
      ...tableUse(requestRowsFn)
    }
  },
  mounted() {
    this.pageParams.xxx = 5555
    this.loadPage()
  },
  computed: {
    columns() {
      return [
        {
          title: '名称',
          dataIndex: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age'
        },
        {
          title: '地址',
          dataIndex: 'address'
        }
      ]
    },
    btns() {
      return [
        {
          text: '打印',
          props: {
            onClick: (evt) => {
              console.log(evt)
            },
            icon() {
              return (<SearchOutlined/>)
            }
          }
        },
        {
          type: 'export',
          text: '导出快递单',
          props: {
            request() {
              return Promise.resolve({
                data: {
                  url: 'https://inv.jss.com.cn/fp/cFOIWtsd2ZPVVkBtNqY7mUsbTRexhuA8S_nq6wkyH87xxjH1E4sfKjlMpmSKYdy0j-b-mlHcPuSsm-ks9LbhDQ.pdf'
                }
              })
            }
          }
        },
        {
          type: 'form',
          text: '导入',
          props: {
            dialogProps: {
              width: 1000
            },
            formProps: {
              col: 2,
              data: [
                ...this.searchlist,
                {
                  label: '上传文件',
                  key: 'file',
                  type: 'upload',
                  props: {
                    listType: 'text'
                  },
                  col: 1
                }
              ]
            }
          }
        },
        {
          type: 'form',
          text: '详情',
          props: {
            dialogProps: {
              width: 1200,
              style: 'top: 20px;'
            },
            formProps: {
              col: 3,
              request: this.requestFn,
              hideBtns: true,
              data: [
                {
                  label: '基本详情',
                  type: 'title',
                  children: [
                    {
                      label: '密码2',
                      key: 'user.password2',
                      type: 'show'
                    },
                    {
                      label: 'rangePicker',
                      key: '_rangePicker',
                      type: 'show',
                      renderFormItem(h, {data}) {
                        return data.user.rangePicker1 + ' - ' + data.rangePicker2
                      }
                    },
                    {
                      label: 'uploadImg (多)',
                      key: 'uploadImg',
                      type: 'upload',
                      col: 1,
                      props: {
                        mode: 'show'
                      }
                    }
                  ]
                },
                {
                  label: '基本详情2',
                  type: 'title',
                  children: [
                    {
                      label: '密码2',
                      key: 'user.password2',
                      type: 'show'
                    },
                    {
                      label: 'rangePicker',
                      key: '_rangePicker',
                      type: 'show',
                      renderFormItem(h, {data}) {
                        return data.user.rangePicker1 + ' - ' + data.rangePicker2
                      }
                    },
                    {
                      label: 'uploadImg (多)',
                      key: 'uploadImg',
                      type: 'upload',
                      col: 1,
                      props: {
                        mode: 'show'
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    searchlist() {
      return [
        {
          label: '名称',
          key: 'name',
          relation: {
            type: 'required',
            key: ['name2']
          }
        },
        {
          label: '名称2',
          key: 'name2'
        },
        {
          label: 'rangePicker',
          key: '_rangePicker',
          keys: ['rangePicker.start', 'rangePicker.end'],
          type: 'rangePicker'
        },
        {
          label: 'select 单选',
          key: 'select',
          type: 'select',
          props: {
            options: [
              {
                label: 'Apple',
                value: '1'
              },
              {
                label: 'Pear',
                value: '2'
              },
              {
                label: 'Orange',
                value: '3'
              }
            ]
          }
        },
        {
          label: 'cascader',
          key: '_cascader',
          keys: ['province', 'city', 'district'],
          type: 'cascader',
          props: {
            options:  [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ]
              }
            ]
          }
        },
        {
          label: 'async-select(单)',
          key: 'asyncSelect1',
          type: 'asyncSelect',
          props: {
            params: {},
            multiple: false,
            mode: 'demo'
          }
        },
        {
          label: 'async-select',
          key: 'asyncSelect',
          selectedKey: 'asyncSelectArr',
          type: 'asyncSelect',
          props: {
            params: {},
            multiple: true,
            mode: 'demo'
          }
        }
      ]
    }
  },
  methods: {
    requestFn() {
      return Promise.resolve({
        data: {
          relation: '',
          "user": {
            "password2": "222",
            "dddd": {
              "password2": ""
            },
            "rangePicker1": "2020-11-12"
          },
          "show": "扫毒看来时代峻峰时代峻峰",
          "password3": "2",
          "number": "-1",
          "checkbox": "1",
          "datePicker": "2020-11-06",
          "monthPicker": "2020-08",
          "weekPicker": "2020-11-21",
          "rangePicker2": "2020-12-16",
          "province": "jiangsu",
          "city": "nanjing",
          "district": "zhonghuamen",
          asyncSelect: [1, 2, 3, 5],
          asyncSelectArr: [
            {
              id: 1,
              name: 'name1'
            },
            {
              id: 2,
              name: 'name2'
            },
            {
              id: 3,
              name: 'name3'
            },
            {
              id: 5,
              name: 'name5'
            }
          ],
          asyncSelect1: 1,
          asyncSelect1Age: 32,
          asyncSelect1Name: 'name1',
          uploadImg: [
            'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584979051&di=f6306064ea907879a0e5fa8a6523e27c&src=http://c3.haibao.cn/img/600_0_100_0/1474603002.7212/4436c26958f3b21476deb1dd9fdab812.jpg',
            'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584979051&di=f6306064ea907879a0e5fa8a6523e27c&src=http://c3.haibao.cn/img/600_0_100_0/1474603002.7212/4436c26958f3b21476deb1dd9fdab812.jpg'
          ],
          table: []
        }
      })
    }
  }
}
</script>

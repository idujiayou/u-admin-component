<template>
  <u-search-btn  
    :data="searchlist"
    :btns="btns"/>
  
  <u-form
    :col="2"
    :request="requestFn"
    :data="lists"
    :dddd="555"/>
</template>
<script>
import {
  SearchOutlined
} from '@ant-design/icons-vue'
export default {
  components: {
    SearchOutlined
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
  },
  computed: {
    btns() {
      return [
        {
          text: '打印',
          props: {
            onClick: (evt) => {
              console.log(evt)
            },
            icon: <SearchOutlined/>
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
                      renderFormItem({data = {user:{}}}) {
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
                      renderFormItem({data = {user:{}}}) {
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
    },
    lists() {
      return [
        {
          label: 'tab位置: top',
          type: 'title',
          toggleKey: ['_tabDefault']
        },
        {
          label: '输入框',
          type: 'tabs',
          tips: ['的杰弗里斯大嫁风尚的杰弗里斯大嫁风尚的杰弗里斯大嫁风尚', '刚进公司第六届开发'],
          children: [
            {
              label: 'relation',
              key: 'user.relation',
              rules: [ 'required'],
              relation: {
                type: 'required',
                key: ['user.password2', 'checkbox']
              }
            },
            {
              label: '密码2',
              key: 'user.password2',
              type: 'textarea',
              col: 1,
              rules: (data) => {
                return data.password3 ? [ 'required', 'isPassword'] : []
              },
              tips: [
                ({data}) => {
                  console.log(data)
                  const columns = [
                    {
                      title: 'Name',
                      dataIndex: 'name',
                      key: 'name',
                      slots: { customRender: 'name' },
                    },
                    {
                      title: 'Age',
                      dataIndex: 'age',
                      key: 'age',
                      width: 80,
                    },
                    {
                      title: 'Address',
                      dataIndex: 'address',
                      key: 'address 1',
                      ellipsis: true,
                    },
                    {
                      title: 'Long Column Long Column Long Column',
                      dataIndex: 'address',
                      key: 'address 2',
                      ellipsis: true,
                    },
                    {
                      title: 'Long Column Long Column',
                      dataIndex: 'address',
                      key: 'address 3',
                      ellipsis: true,
                    },
                    {
                      title: 'Long Column',
                      dataIndex: 'address',
                      key: 'address 4',
                      ellipsis: true,
                    },
                  ];
                  const tableData = [
                    {
                      key: '1',
                      name: 'John Brown',
                      age: 32,
                      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
                      tags: ['nice', 'developer'],
                    },
                    {
                      key: '2',
                      name: 'Jim Green',
                      age: 42,
                      address: 'London No. 2 Lake Park, London No. 2 Lake Park',
                      tags: ['loser'],
                    },
                    {
                      key: '3',
                      name: 'Joe Black',
                      age: 32,
                      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
                      tags: ['cool', 'teacher'],
                    },
                  ]
                  return (
                    <a-table 
                      columns={columns} 
                      rowKey='key'
                      data-source={tableData} 
                      scroll={ {x: 500} } 
                      size='small'/>
                  )
                }
              ],
              props: {
                autofocus: true
              },
              onChange(modelRef) {
                if(!modelRef.user.password2) {
                  console.log(modelRef)
                  modelRef.show = '密码2 uploadImg 被清空'
                  modelRef.uploadImg = []
                }
              }
            },
            {
              label: '密码3',
              key: 'user.dddd.password2',
              rules: [ 'required', 'isPassword'],
              hide: (data) => {
                return !!data.password3
              },
              tips: '的杰弗里斯大嫁风尚'
            },
            {
              label: 'disabled',
              key: 'disabled',
              props: {
                disabled(modelRef) {
                  return !modelRef.user.password2
                }
              }
            },
            {
              label: 'show',
              key: 'show',
              type: 'show'
            },
            {
              label: ({data={}}) => {
                return !data.password3 ? '修改label' : '修改label2'
              },
              key: 'password3',
              rules: [ 'required', 'isPassword'],
              renderFormItem: ({data={}}) => {
                return (
                  <a-input value={data['password3']} onInput={(e) => { data['password3'] = e.target.value;}}/>
                )
              }
            },
            {
              label: '数字输入框',
              key: 'number',
              type: 'inputNumber',
              rules: [ 'required']
            },
          ]
        },
        {
          label: '日历',
          tips: ['555', '刚555进公司第六届开发'],
          tipsTile: '自定义提示标题',
          subTitle: ({data}) => {
            return '（我是个子标题）'
          },
          type: 'title',
          children: [
            {
              label: 'datePicker',
              key: 'datePicker',
              type: 'datePicker',
              rules: [ 'required']
            },
            {
              label: 'monthPicker',
              key: 'monthPicker',
              type: 'monthPicker',
              rules: [ 'required']
            },
            {
              label: 'rangePicker',
              key: '_rangePicker',
              keys: ['user.rangePicker1', 'rangePicker2'],
              type: 'rangePicker',
              rules: [ 'required']
            },
            {
              label: 'weekPicker',
              key: 'weekPicker',
              type: 'weekPicker',
              rules: [ 'required']
            }
          ]
        },
        {
          label: '联动',
          type: 'tabs',
          children: [
            {
              label: 'cascader',
              key: '_cascader',
              keys: ['province', 'city', 'district'],
              type: 'cascader',
              rules: [ 'required'],
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
            }
          ]
        },
        {
          label: 'tab位置: left',
          type: 'title',
          toggleKey: ['tab2']
        },
        {
          label: 'Checkbox多选框',
          type: 'tabs',
          tabKey: 'tab2',
          props: {
            tabPosition: 'left'
          },
          children:[
            {
              label: 'checkbox',
              key: 'checkbox',
              type: 'checkbox',
              text: 'checkbox'
            },
            {
              label: 'checkbox-group',
              key: 'checkboxGroup',
              type: 'checkboxGroup',
              props: {
                options: [
                  { label: 'Apple', value: 'Apple' },
                  { label: 'Pear', value: 'Pear' },
                  { label: 'Orange', value: 'Orange' }
                ]
              }
            },
            {
              label: 'checkbox-group2',
              key: 'checkboxGroup2',
              type: 'checkboxGroup',
              format: 'string',
              props: {
                options: [
                  'Apple',
                  'Pear',
                  'Orange'
                ]
              }
            },
          ]
        },
        {
          label: 'radio-group单选框',
          type: 'tabs',
          tabKey: 'tab2',
          children:[
            {
              label: 'radio-group',
              key: 'radioGroup',
              type: 'radioGroup',
              props: {
                options: [
                  { label: 'Apple', value: 'Apple' },
                  { label: 'Pear', value: 'Pear' },
                  { label: 'Orange', value: 'Orange' }
                ]
              }
            },
            {
              label: 'radio-group2',
              key: 'radioGroup2',
              type: 'radioGroup',
              props: {
                options: [
                  'Apple',
                  'Pear',
                  'Orange'
                ]
              }
            }
          ]
        },
        {
          label: 'select',
          type: 'tabs',
          tabKey: 'tab2',
          children:[
            {
              label: 'select 单选',
              key: 'select',
              type: 'select',
              props: {
                options: [
                  {
                    label: 'Apple',
                    value: 'Apple'
                  },
                  {
                    label: 'Pear',
                    value: 'Pear'
                  },
                  {
                    label: 'Orange',
                    value: 'Orange'
                  }
                ]
              }
            },
            {
              label: 'select mode(tags)',
              key: 'selectTags',
              type: 'select',
              props: {
                mode: 'tags',
                options: [
                  {
                    label: 'Apple',
                    value: 'Apple'
                  },
                  {
                    label: 'Pear',
                    value: 'Pear'
                  },
                  {
                    label: 'Orange',
                    value: 'Orange'
                  }
                ]
              }
            },
            {
              label: 'select mode(multiple)',
              key: 'selectMultiple',
              type: 'select',
              format: 'string',
              props: {
                mode: 'multiple',
                options: [
                  {
                    label: 'Apple',
                    value: 'Apple'
                  },
                  {
                    label: 'Pear',
                    value: 'Pear'
                  },
                  {
                    label: 'Orange',
                    value: 'Orange'
                  }
                ]
              }
            }
          ]
        },
        {
          label: 'switch',
          type: 'tabs',
          tabKey: 'tab2',
          children:[
            {
              label: 'switch',
              key: 'switch',
              type: 'switch',
              props: {
              }
            }
          ]
        },
        {
          label: 'tab位置: right',
          type: 'title',
          toggleKey: ['tab3']
        },
        {
          label: '上传',
          type: 'tabs',
          tabKey: 'tab3',
          props: {
            tabPosition: 'right'
          },
          children: [
            {
              label: 'uploadImg (多)',
              key: 'uploadImg',
              type: 'upload',
              col: 1
            },
            {
              label: 'uploadImg (单)',
              key: 'uploadImg1',
              type: 'upload',
              props: {
                limit: 1
              },
              col: 1
            }
          ]
        },
        {
          label: '富文本',
          type: 'tabs',
          tabKey: 'tab3',
          children: [
            {
              label: 'editor',
              key: 'editor',
              type: 'editor',
              col: 1
            }
          ]
        },
        {
          label: 'async-select',
          type: 'title',
          tabKey: 'tab3',
          children: [
            {
              label: 'async-select',
              key: 'asyncSelect',
              selectedKey: 'asyncSelectArr',
              type: 'asyncSelect',
              col: 1,
              props: {
                params: {},
                multiple: true,
                mode: 'demo'
              }
            },
            {
              label: 'async-select(单)',
              key: 'asyncSelect1',
              selectedKey: { id: 'asyncSelect1', name: 'asyncSelect1Name', age: 'asyncSelect1Age'},
              type: 'asyncSelect',
              col: 1,
              props: {
                params: {},
                multiple: false,
                mode: 'demo'
              }
            }
          ]
        },
        {
          label: 'table',
          type: 'title',
          children: [
            {
              label: 'table',
              key: 'table',
              type: 'table',
              props: {
                scroll: { 
                  y: 500 
                },
                request(query){
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
                },
                columns: [
                  {
                    title: '名称',
                    dataIndex: 'name',
                    form: {
                      key: 'name',
                      relation: {
                        type: 'required',
                        key: ['asyncSelect', 'address']
                      },
                      rules: [ 'required']
                    }
                  },
                  {
                    title: '年龄',
                    dataIndex: 'age',
                    form: {
                      key: 'asyncSelect',
                      selectedKey: 'asyncSelectArr',
                      type: 'asyncSelect',
                      rules: [ 'required'],
                      props: {
                        params: {},
                        multiple: true,
                        mode: 'demo'
                      }
                    }
                  },
                  {
                    title: '地址',
                    dataIndex: 'address',
                    form: {
                      key: 'address',
                      rules: [ 'required']
                    }
                  },
                  {
                    type: 'action',
                    actions: [
                      {
                        label: '删除',
                        onClick() {
                          console.log(1111)
                        }
                      },
                      {
                        label: '编辑',
                        onClick() {
                          console.log(1111)
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
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

<template>
  <u-form
    :col="2"
    :data="lists"/>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  mounted() {

  },
  computed: {
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
              label: '密码2',
              key: 'user.password2',
              type: 'textarea',
              col: 1,
              rules: (data) => {
                return data.password3 ? [ 'required', 'isPassword'] : []
              },
              tips: ['的杰弗里斯大嫁风尚的杰弗里斯大嫁风尚的杰弗里斯大嫁风尚', '刚进公司第六届开发']
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
              label: 'show',
              key: 'show',
              type: 'show'
            },
            {
              label: (h, {data}) => {
                return !data.password3 ? '密码的发斯蒂芬斯蒂芬' : 'xcc'
              },
              key: 'password3',
              rules: [ 'required', 'isPassword'],
              renderFormItem: (h, {data}) => {
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
          subTitle: (h, {data}) => {
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
          label: '上传',
          type: 'title',
          children: [
            {
              label: 'uploadImg (多)',
              key: 'uploadImg',
              type: 'uploadImg',
              col: 1
            },
            {
              label: 'uploadImg (单)',
              key: 'uploadImg1',
              type: 'uploadImg',
              props: {
                limit: 1
              },
              col: 1
            }
          ]
        },
        {
          label: '富文本',
          type: 'title',
          children: [
            {
              label: 'editor',
              key: 'editor',
              type: 'editor',
              col: 1
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

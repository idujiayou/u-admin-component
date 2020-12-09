<template>
  <div>
    <a-table 
      v-bind="opts"/>
  </div>
</template>
<script>
import localeUse from '@/use/locale'
import { SyncOutlined } from '@ant-design/icons-vue'

export default {
  name: 'uTable',
  comments: {
    SyncOutlined
  },
  setup() {
    const { translate } = localeUse()

    return {
      translate
    }
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
        showSizeChanger: true,
        itemRender: ({page, type, originalElement}) => {
          return type === 'next' ?  (
            <div style="display: flex;align-items: center;"> 
              { originalElement } 
              <div style="padding: 0 5px;" onClick={(evt) => this.refresh(evt)} title={this.translate('uTable.refresh')}>
                <SyncOutlined />
              </div> 
            </div>
            ) : originalElement
        }
      }
    }
  },
  computed: {
    opts() {
      let {$attrs, pagination2} = this

      return {
        ...$attrs,
        pagination: pagination2
      }
    },
    pagination2() {
      let {pagination, $attrs} = this
      return {
        ...pagination,
        ...$attrs.pagination
      }
    }
  },
  methods: {
    refresh(evt) {
      evt.stopPropagation()
      this.$emit('refresh')
    }
  }
}
</script>

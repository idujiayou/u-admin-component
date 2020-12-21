<template>
  <div class="u-search-btn">
    
    <a-button-group>
      <a-popover :title="translate('uSearchBtn.selectedTitle')">
        <template #content>
          <div style="max-width: 500px;">
            <a-tag v-for="(item, index) in params" :key="index" class="ant-tag-primary" style="margin-top: 4px; margin-bottom: 4px;">
              {{item.label}}: {{item.value + ''}}
            </a-tag>
            <div v-if="!params.length" style="color: #999;">
              <SearchOutlined /> {{translate('uSearchBtn.empty')}}
            </div>
          </div>
        </template>
        <a-button @click="toggle('visible')">
          <template #icon><SearchOutlined /></template>
        </a-button>
      </a-popover>
      <template 
        v-for="(btn, index) in btns" 
        :key="index">
        <u-export-btn
          v-if="isType('export', btn)"
          :text="btn.text"
          v-bind="btn.props"/>
        <u-form-btn
          v-else-if="isType('form', btn)"
          :text="btn.text"
          v-bind="btn.props"/>
        <a-button 
          v-else
          v-bind="btn.props">
          {{ btn.text }}  
        </a-button>
      </template>
    </a-button-group>
    <u-dialog 
      v-model:visible="visible" 
      :title="translate('uSearchBtn.title')"
      @ok="toggle('visible')" 
      :width="1000" 
      :footer="null">
      <uSearchBar @search="searchFn" :data="data"/>
    </u-dialog>
  </div>
</template>
<script>
import localeUse from 'u-admin-component/src/use/locale'
import dialogUse from 'u-admin-component/src/use/dialog'
import {
  SearchOutlined
} from '@ant-design/icons-vue'
import { isRequired } from 'u-admin-component/src/utils'
import { isArray } from 'lodash'

export default {
  name: 'uSearchBtn',
  components: {
    SearchOutlined
  },
  props: {
    data: Array,
    btns: Array
  },
  setup() {
    const { translate } = localeUse()
    const dialogObj = dialogUse('visible')
    return {
      ...dialogObj,
      translate
    }
  },
  data() {
    return {
      params: []
    }
  },
  methods: {
    isType(type, item) {
      let arr = isArray(type) ? type : [type]
      return arr.includes(item.type)
    },
    filterParams(params) {
      let arr = []
      params.forEach(item => {
        let value = item.value
        if(!isRequired(value)) {
          arr.push(item)
        }
      });
      return arr
    },
    searchFn({params, labelParams}) {
      this.params = this.filterParams(labelParams)
      this.toggle('visible')
      this.$emit('search', params)
    }
  }
}
</script>

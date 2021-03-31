<template>
  <div class="u-search-btn">
    
    <a-button-group>
      <a-popover :title="translate('uSearchBtn.selectedTitle')" >
        <template #content>
          <div class="u-search-popover">
            <!-- <a-descriptions size="small" bordered layout="vertical" v-show="params.length" >
              <a-descriptions-item
                v-for="(item, index) in params"
                :key="index"
                :label="item.label">
                {{item.value + ''}}
              </a-descriptions-item>
  
            </a-descriptions> -->
            <template 
              v-for="(item, index) in params" 
              :key="index" >
              <div v-if="isArray(item.value) && item.value.length > 1" style="margin-bottom: 10px;">
                <div :style="item.value.length < 4 ? 'display: inline-block' : ''">
                  {{item.label}}：
                </div>
                <a-tag 
                  v-for="(val, index2) in item.value" 
                  :key="index2"
                  class="ant-tag-primary" 
                  style="margin-top: 4px; margin-bottom: 4px;">
                  {{ val }}
                </a-tag>

              </div>
              <div v-else style="margin-right: 20px; display: inline-block; margin-bottom: 10px;">
                {{item.label}}：
                <a-tag 
                  class="ant-tag-primary" 
                  style="margin-top: 4px; margin-bottom: 4px;">
                  {{item.value + ''}}
                </a-tag>
              </div>
            </template>
            
            <a-empty 
              v-show="!params.length" 
              :image-style="{
                height: '60px'
              }"
              :description="translate('uSearchBtn.empty')" />
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
    isArray,
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

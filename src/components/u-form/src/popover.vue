<template>
  <a-popover v-if="(rules && rules.length) || (tips2 && tips2.length)">
      <template v-slot:content>
        <div class="u-form-tips-content">
          <template v-if="rules && rules.length">
            <div class="tips-title">
              {{translate('uForm.rule')}}
            </div>
            <div v-for="(r, i) in rules" :key="i">
              {{i + 1}}. {{r.message}}
            </div>
          </template>
          <template v-if="tips2 && tips2.length">
            <div class="tips-title">
              {{tipsTile || translate('uForm.tips')}}
            </div>
            <div v-for="(r, i) in tips2" :key="i">
              {{i + 1}}. {{r}}
            </div>
          </template>
        </div>
      </template>
      <InfoCircleOutlined class="icon-info" />
    </a-popover>
</template>
<script>
import localeUse from '@/use/locale'
import { isArray } from 'lodash'
import {
  InfoCircleOutlined
} from '@ant-design/icons-vue'
export default {
  components: {
    InfoCircleOutlined
  },
  props: {
    tips: [String, Array],
    rules: Array,
    tipsTile: String
  },
  setup() {
    const { translate } = localeUse()
    
    return {
      translate
    }
  },
  computed: {
    tips2() {
      let { tips } = this

      if(isArray(tips)) {
        return tips
      } else {
        return tips ? [tips] : []
      }
    },
  }
}
</script>

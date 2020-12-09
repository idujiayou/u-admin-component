
import { computed } from 'vue'
export default function(data) {
  const formItemsArr = computed(() => {
    let formItems = data
    let arr = []
    formItems.forEach(item => {
      if(item.type === 'tabs') {
        let tabKey = item.tabKey || '_tabDefault'
        let index = arr.findIndex( v => v.type === 'tabs' && (tabKey === (v.tabKey || '_tabDefault')))

        if(index == -1) {
          arr.push({
            type: 'tabs',
            key: tabKey,
            props: item.props,
            tabKey,
            panes: [
              item
            ]
          })
        } else {
          arr[index].panes.push(item)
        }
      } else {
        arr.push(item)
      }
    })

    return arr
  })

  return {
    formItemsArr: formItemsArr
  }
}
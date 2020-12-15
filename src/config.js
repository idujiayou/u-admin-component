import * as validator from '@/utils/validator'
export default {
  validator,
  upload: {
    action: 'http://rap2api.taobao.org/app/mock/266394/upload',
    requestFormat(file) {
      return file.response && file.response.code + '' === '200'
    },
    getUrl(file) {
      return file.response && file.response.data && file.response.data.url || file.url
    }
  },
  asyncSelect: {
    defaultColumns: [
      {
        title: 'Name',
        dataIndex: 'name'
      }
    ],
    mode: {
      demo: {
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
      }
    }
  },
  Api: {
    response: {
      getMessage(response) {
        return response.message
      },
      getData(response) {
        return response.data
      },
      getCode(response) {
        return response.code
      },
      isSuccess(response) {
        return response.code + '' === '200'
      },
      getPageTotal(response) {
        return response.data.total
      },
      // 列表
      getRowsData(response) {
        return response.data.rows
      }
    }
  }
}
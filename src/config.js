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
            let id = (i + 1) * query.page
            rows.push({
              id,
              name: 'name' + id,
              age: 32,
              address: 'New York No. 1 Lake Park',
            })
          }
          return Promise.resolve({
            data: {
              rows: [
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park',
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                  address: 'London No. 1 Lake Park',
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                  address: 'Sidney No. 1 Lake Park',
                }
              ],
              total: 50
            }
          })
        },
        columns: [
          {
            title: 'Name',
            dataIndex: 'name'
          }
        ]
      }
    }
  },
  Api: {
    response: {
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
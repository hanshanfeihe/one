import axios from "axios"
const url = "http://v3.wufazhuce.com:8000/api"
const instance = axios.create(
  {
    baseURL: url,
    timeout: 5000
  }
)
/**
 * 获取数据
 */
function getData (api) {
  return axios.get(url + api).then((res) => {
    console.log(res)
    if (res.data) {
      return res.data.data
    }
  }).catch(error => {
    console.log(error)
  });
}
export {
  instance,
  getData
}
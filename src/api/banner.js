import { instance as axios, getData } from "./baseUrl";
import '../api/time'
import { getYearAndMonth } from "../api/time";
/**
 * 获取轮播图
 */
const bannerApi = '/hp/bymonth/' + getYearAndMonth()
async function getBanner () {
  return await getData(bannerApi)
}
export {
  getBanner
}
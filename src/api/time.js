
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
/**
 * 获取当前年-月
 */
function getYearAndMonth () {
  console.log(`${year}-${month + 1}`);
  return `${year}-${month + 1}`
}
/**
 * 获取对应英文月份
 */
function getEnMonth (dateTime) {
  let date = new Date(dateTime)
  let monthIndex = date.getMonth()
  let year = date.getFullYear()
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months[monthIndex] + ' ' + year
}
function getDay (dateTime) {
  let date = new Date(dateTime)
  return date.getDate()
}
export {
  getYearAndMonth,
  getEnMonth,
  getDay
}
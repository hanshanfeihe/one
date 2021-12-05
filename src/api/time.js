/**
 * 获取当前年-月
 */
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
function getYearAndMonth () {
  console.log(`${year}-${month + 1}`);
  return `${year}-${month + 1}`
}
export {
  getYearAndMonth
}
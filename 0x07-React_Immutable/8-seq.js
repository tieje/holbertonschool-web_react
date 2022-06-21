const { Seq } = require('immutable')
function printBestStudents(obj) {
  console.log(Seq(obj).filter((grade) => grade.score > 70).toJS())
}
module.exports = { printBestStudents }

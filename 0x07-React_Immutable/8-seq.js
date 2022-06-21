const { Seq } = require('immutable')
function printBestStudents(obj) {
    return (Seq(obj).filter((grade) => grade.score > 70).toJS())
}
module.exports = { printBestStudents }

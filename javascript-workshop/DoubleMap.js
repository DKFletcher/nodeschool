/*
function double(numbers){
  function doubleEach(number){
    return number * 2;
  }
  return numbers.map(doubleEach)
}
module.exports = double;
*/

module.exports = function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
}

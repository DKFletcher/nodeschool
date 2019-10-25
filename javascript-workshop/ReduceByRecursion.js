
function reduceByRecursion(arr, fn, initial){
  var cur = 0;
  var i = 0;
  var p = initial;
  var a = arr;
  var currentValue = 0;
  function reduce(arr, prev, cur, index){
    if (index === arr.length){
      currentValue = cur;
      return
    }else{
      cur = prev = fn(prev, arr[index++]);
      reduce(arr, prev, cur, index);
    }
  }
  reduce(a, p, cur, i)
  return currentValue;
}
module.exports = reduceByRecursion;



/*
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
*/

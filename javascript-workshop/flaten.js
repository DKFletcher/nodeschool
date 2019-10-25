function flaten(){
  var flatArray = [];
  Array.prototype.forEach.call(arguments, (function(arg){Array.prototype.forEach.call(arg, (function(atomic){flatArray.push(atomic)}))}))
  return flatArray;
}
module.exports = flaten;

/*
let test1 = [4,3,6,4,5];
let test2 = [3,5,2,6];
let test3 = [8,3235,4,3];
let test4 = [3,547];
const test = flaten(
  test1,
  test2,
  test3,
  test4
)
console.log(test);
//Expected result [4,3,6,3,4,3,5,2,6,8,3235,4,3,3,547]
*/





// arg.forEach(function(element){
  //   element++;
  // })

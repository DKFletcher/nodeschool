let duckCount = require('./DuckCount');



var notDuck = Object.create({quack: true})
var duck = {quack: true}
// countDucks(duck, notDuck) // 1



const countDucks = duckCount(duck, duck,notDuck, duck);

console.log('duck count: '+countDucks);

// let reduceArray = require('./ReduceByRecursion');
// let inputArray = [1,2,3,4,5,6];
// var initial = 0;
// const fn = (accumulator, currentValue) => accumulator + currentValue;
// const reduceByRecursion = reduceArray(inputArray, fn, initial);
// console.log('reduceByRecursion: '+reduceByRecursion);
//


// let inputArray = [1,2,3,4,5,6];
// var initial = 0;
// const fn = (accumulator, currentValue) => accumulator + currentValue;

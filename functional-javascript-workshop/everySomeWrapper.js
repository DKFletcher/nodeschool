let checkUsers = require("./everySome")

var goodUsers = [{ id: 1 },{ id: 2 },{ id: 3 }];

let test1 = [{ id: 2 },{ id: 1 }];
let test2 = [{ id: 3 },{ id: 1 }];
let test3 = [{ id: 2 },{ id: 0 }];

var testAllValid = checkUsers(goodUsers)

console.log(testAllValid(test3));


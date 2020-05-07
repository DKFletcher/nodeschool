function reduce(inputArray){
    return inputArray.reduce((allNames, name) => {
        (name in allNames) ? 
        allNames[name]++ : 
        allNames[name] = 1
        return allNames
    },{})
}
module.exports = reduce
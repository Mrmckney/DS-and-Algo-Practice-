// Functions to get first element
const array = [2, 4, 1, 3, 7]

function getFirstElement(num){
    return num = array[0]
}

console.log(getFirstElement(array))

// function getShift(num){
//     return num.shift()
// }

// console.log(getShift(array))

// Functions to get last element
function getLastElement(num){
    return num = array[4]
}

console.log(getLastElement(array))

// function getPop(num){
//     return num.pop()
// }

// console.log(getPop(array))

function getLast(){
    return array[array.length - 1]
}

console.log(getLast())

// Function to get a given element of an array passed as a parameter

function getElementByIndex(item){
    return array[item]
}

const value = 7

console.log(getElementByIndex(value))

// Function to get the index of an a array by value

function getIndexByValue(element){
    for(let i=0; i < array.length; i++){
         if(array[i] === element){
             return i
         }
    }
}
console.log(getIndexByValue(7))

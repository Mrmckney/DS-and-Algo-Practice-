// implement enqueue()
// Make an array 
const ages = [7, 5, 1, 3, 4]
// Write a function that inserts a number to the tail with two arguments
function getEnqueue(array, num){
    return array[array.length] = num
}
const num1 = 9

getEnqueue(ages, num1)

console.log(ages)

// implement dequeue()
// Write a function to delete the first num of the array
function deQueue(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i + 1]
        
    } 
    array.length = array.length - 1
    return array
}
console.log(deQueue(ages))







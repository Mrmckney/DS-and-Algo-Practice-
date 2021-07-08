// Function to get the first element of the first subarray
const fName = ['Christian', 'Matt', 'Zach']

function getFirstSubArray(item){
    return item[0][0]
}

console.log(getFirstSubArray(fName))

const num = [[12, 18], [9, 3, 6], [8, 1, 2]]

function getFirst(item){
    return item[0][0]
}

console.log(getFirst(num))

// Function to get the last element of the last subarray

function getLastSubArray(item){
    const first = item[item.length -1]
    return first[first.length -1]
}

console.log(getLastSubArray(fName))

// Function to get a given element of a subarray with the indexes passed as a parameter
function getElement(item, item2){
    return fName[item][item2]
}

console.log(getElement(0, 2))




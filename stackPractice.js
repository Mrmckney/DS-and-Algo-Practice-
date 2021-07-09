const array = [3, 20, 10, 19, 7]


// implement push()
function jsPush(array, num){
   array[array.length] = num
}

jsPush(array, 50)
console.log(array)

// implement top()
function jsTop(array){
   return array[array.length - 1]
}

const top = jsTop(array)
console.log(top)

//implement pop()
function jsPop(array){
    return array.length = array.length - 1
}

jsPop(array)
console.log(array)
const smallestOfTwo = (one,two) => {
    if(one > two){
        return two
    }else{
        return one
    }
}

const largestOfThree = (one,two,three) => {
    let array = [one,two,three]
    array.sort()
    return array[2]
}

//console.log(largestOfThree(1,2,3))

const smallestOfFour = (one,two,three,four) => {
    let array = [one,two,three,four]
    array.sort()
    return array[0]
}

//console.log(smallestOfFour(1,2,3,4))

const ticketPrice = (age) => {
    switch (age) {
        case age < 18:
            return 10;
            break;
        case age > 64:
            return 15;
            break;
        default:
            return 20;
            break;
    }
    
}

//console.log(ticketPrice(46))

const nextNumber = (heltal) => {
    return heltal += 1;
}

//console.log(nextNumber(1))

const isEmpty = (array) => {
    if (Array.isArray(array) && array[0] === undefined){
        return true
    }else{
        return false
    }
}

//console.log(isEmpty(""))


const firstOf = (array) => {
    if(Array.isArray(array)) {
        return array[0]
    }
}

//console.log(firstOf([1,2,3]))

const lastOf = (array) => {
    if(Array.isArray(array)){
        return array[array.length -1]
    }
}

//console.log(lastOf([1,2,3,4]))

const prepend = (array,input) => {
    if(Array.isArray(array) && Number.isInteger(input)) {
        return [input].concat(array)
    }
}

//console.log(prepend([1,2,3],-1))

const append = (array,input) => {
    if(Array.isArray(array) && Number.isInteger(input)){
        return array.concat([input])
    }
}

//console.log(append([1,2,3],4))

const length = (array) => {
    if(Array.isArray(array)){
        let acc = 0;
        array.forEach(element => {
            acc ++
        })
        return acc;
    }
}

//console.log(length([1,1]))

const sum = (array) => {
    if(Array.isArray(array)){
        let acc = 0;
        array.forEach(element => {
            acc += element
        });

        return acc;
    }
}

//console.log(sum([1,1,1,1]))

const average = (array) => {
    return sum(array)/length(array);
}

//console.log(average([1,2,3]))

const concat = (array1,array2) => {
    array2.forEach(element => {
        array1.push(element)
    })
    return array1
}

//console.log(concat([1,1,1],[2,2,2])) 

const startsWith = (string,tecken) => {
    return string[0] == tecken;
}

//console.log(startsWith("alex","b"))

const endsWith = (string, tecken) => {
    return string[string.length -1] == tecken;
}

//console.log(endsWith("alex","f"))

const chomp = (string) => {
    let newstring = [];

    for (let i = 0; i < string.length -1; i++) {
        const element = string[i];
        newstring.push(element);
    }
    return newstring.join("");
}

//console.log(chomp("alex\n"))

const indexOf = (string, input) => {
    let index = null;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == input) {
            index = i
        } 
    }
    return index;
}

//console.log(indexOf("horus","h"));

const contains = (string, char) => {
    let n = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char){
            n++
        }
    }
    return n;
}

//console.log(contains("aaaa","a"))

const containsArr = (arr,int) => {
    return contains(arr,int) > 0;
}

//console.log(containsArr([1,2,3,4,5],6))

const removeSubArr = (arr1,arr2) => {
    let part = [];
    for (let i = 0; i < arr1.length; i++) {
        if(part.length < arr2.length){
            part.push(arr1[i])
        }else{
            part.push(arr1[i])
            part.shift()

            if(arr2 == part){
                console.log("go")
            }
        }
    } 

    return arr1
}

console.log(removeSubArr([1,2,3,4],[1,2]))
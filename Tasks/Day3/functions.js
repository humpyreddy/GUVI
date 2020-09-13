//1. Program that returns only odd numbers from the array

//Anonymous Function
var oddnos = function(a){
    var odd = []
    for(let i=0;i<a.length;i++){
        if(parseInt(a[i])%2!=0)
        {
            odd.push(parseInt(a[i]))
        }
    }
    return odd;
}

var z = oddnos([3,4,5,6,8,7,9])
console.log(z)

//IIFE
var oddnos = function oddnumbers(a){
    var odd = []
    for(let i=0;i<a.length;i++){
        if(parseInt(a[i])%2!=0)
        {
            odd.push(parseInt(a[i]))
        }
    }
    console.log('invoked IIFE')
    console.log(odd)
    return odd;
}([3,4,5,6,8,7,9]);



//2.Program that converts all the letters in the string to caps
//Anonymous function
var caps = function(a){
    
    return a.toUpperCase()
}

var retuppcase = caps('hampi')
console.log(retuppcase)

//IIFE

var caps=function(a){
    console.log(a.toUpperCase())
    
}('hampi')

//Arrow Function
const cap = (a)=>a.toUpperCase();
console.log(cap('hampi'))

//3.Sum of all the numbers in an array

//Anonymous function
var sum_arr = function(arr){
    var sum = 0
    for(let i=0;i<arr.length;i++){
        sum +=parseInt(arr[i])
    }

    return(sum)
}

var sum = sum_arr([1,2,3,4,5])
console.log(sum)

//IIFE
var sum_arr = function(arr){
    var sum = 0
    for(let i=0;i<arr.length;i++){
        sum +=parseInt(arr[i])
    }
    console.log('invoked')
    console.log(sum)
    return(sum)
}([1,2,3,4,5])


//using the reduce array method

var numbers = [1,2,3,4,5,6]

const total = numbers.reduce((currenTotal,num) =>{
    return num+currenTotal
},0)
console.log(total)

//4. Program that returns all the prime numbers from the input array

function isPrime(element){
    if(element==0||element==1){
        return false
    }
    else if(element>1){
        for(let i=2;i<parseInt(element);i++){
            if(element%i==0){
                return false
            }
        }

        return true
    }
    
}

//anonymous function
var primes = function(elements){
    var primenos = []
    for(let i=0;i<elements.length;i++){
        if(isPrime(parseInt(elements[i])))
        {
            primenos.push(elements[i])
        }
    }

    return primenos
}

var nos = [1,2,3,4,5,6,7,8,9,10]
var pnos = primes(nos)
console.log("The prime nos are: "+pnos)

//filter array method
 const primesfilter = nos.filter((num)=>{
    return isPrime(num)
 })
console.log(primesfilter)



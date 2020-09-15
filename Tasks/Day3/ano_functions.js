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


//5. Return all the palindromes of an array


function isPalindrome(str){
    reversed = ''
    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i]
    }

    reversed = reversed.trim()

    if(reversed==str)
        return true
    return false
}

var allpal = function(arr){
       
    var subpals = subarrays(arr,0,0)

    const pals = subpals.filter((sub)=>{
        return isPalindrome(sub)
     })

    return pals
}



var subs = []
var subarrays = function(arr,start,end){
    
    if(end==arr.length)
        return subs
    else if(start>end){
        return subarrays(arr,0,end+1)
    }
    else{
        temp = ''
        for(let i=start;i<end+1;i++){
            temp +=arr[i]
        }
        subs.push(temp)

        return subarrays(arr,start+1,end)
        for (let i = start; i < end; i++){ 
            
        } 
          
    }
}


var ps = allpal(['l','o','l','h','a','l','o','l'])
console.log(ps)


//6. Rotate an array by k times

function RotateByOne(array){
    temp = array[array.length-1]
    new_arr = []
    new_arr[0] = temp
    for(let i=0;i<array.length-1;i++){
        new_arr.push(array[i])
    }

    return new_arr
}



var ktimes = function(arr,k){
    for(let i=0;i<k;i++){
        arr = RotateByOne(arr)
    }

    return arr
}

var kshifts = ktimes([1,2,3,4],2)
console.log('Rotating the array by k times')
console.log(kshifts)


//7. return the median of 2 arrays of the same size

var medians = function(arr1,arr2){
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    var med = []
    if(arr1.length%2==0){
        med.push((arr1[parseInt(arr1.length/2)]+arr1[parseInt(arr1.length/2)-1])/2)
        med.push((arr2[parseInt(arr1.length/2)]+arr1[parseInt(arr1.length/2)-1])/2)
    }
    else{
        med.push(arr1[parseInt(arr1.length/2)])
        med.push(arr2[parseInt(arr1.length/2)])

    }

    return med
}
numbers = [1,2,3,4,5]
var median = medians(numbers,numbers)
console.log('Medians of the given arrays')
console.log(numbers)
console.log(median)

//8. Remove duplicates from an array

var removing_duplicates = function(arr){

    if(arr.length==0||arr.length==1){
        return
    }
    arr.sort((a,b)=>a-b)
    let j=0; //for the next element
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!=arr[i+1]){
            arr[j++]=arr[i]
        }
    }

    arr[j++] = arr[arr.length-1]
    distinct_array = []
    
    return arr.slice(0,j)

}

array_with_dups = [1,2,2,3,3,4,5]

console.log(removing_duplicates(array_with_dups))
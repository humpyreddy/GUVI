//Program to print all the odd numbers in array
var numbers = [1,2,3,4,5]

var odd = numbers.filter((num)=>{
    return num%2!=0
}
)

console.log(odd)

//Program to convert all the characters of the strings to caps of a string array
var str_array = ['hampi','keerthi','srihitha']

var caps = str_array.map((item)=>{
    return item.toUpperCase()
})

console.log(caps)


//Sum of all the numbers in the array

var total = numbers.reduce((num,sum)=>{
    return num+sum
},0)

console.log(total)

//Return all the primes

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

const primesfilter = nos.filter((num)=>{
    return isPrime(num)
 })
console.log(primesfilter)

//Return all the palindromes in an array
//Distance between two points

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    return Math.sqrt( Math.pow(x2-x1,2) - Math.pow((y2-y1),2) )
 
}

//Get the nth element of the array

function getNthElement(array,n){
    // your code here
     return array[n]
   }

console.log(getNthElement([1, 3, 5], 1))

//Write a function called “getLastElement”.

function getLastElement(array){
    // your code here
    return array[array.length-1]
   }

console.log(getLastElement([1, 2, 3, 4]))

//Write a function called “getProperty”.


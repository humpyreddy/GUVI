// Write a function called “printAllValues” which returns an newArray of all the input object’s values.
// Input (Object):
// var object = {name: “RajiniKanth”, age: 33, hasPets : false};
// Output:
// [“RajiniKanth”, 33, false]



var obj = {name : "RajiniKanth", age : 33, hasPets : false};

function printAllValues(obj) {
 var val = []
 for(item in obj){
     val.push(obj[item])
 }
 return val
}

//console.log(printAllValues(obj))

// Parsing an JSON object’s Keys:
// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]

obj = {name : "RajiniKanth", age : 25, hasPets : true}
function printAllKeys(obj) {
    
    var allkeys = []

    for(item in obj){
        allkeys.push(item)
    }
    return allkeys 
}

//console.log(printAllKeys(obj))

// Parsing an JSON object and convert it to a list:
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]

 obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 
    var thelist = []

    for(item in obj){
        thelist.push([item,obj[item]])
    }
    
    return thelist
}

//console.log(convertListToObject(obj))

// Parsing a list and transform the first and last elements of it:
// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.
// Input (Array):
// var array = [“GUVI”, “I”, “am”, “Geek”];
// Output:
// var object = {
// GUVI : “Geek”
// }

var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {

    var newObject = {}
    const k = arr[0]
    var val = arr[arr.length-1]
        newObject[k] = val   
     return newObject;
}

//console.log(transformFirstAndLast(arr))

// Parsing a list of lists and convert into a JSON object:
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
// Output:
// var object = {
// make : “Ford”
// model : “Mustang”,
// year : 1964
// }

 arr = [["make", "Ford"], ["model", "Mustang"], ["year", "1964"]];
    
 function fromListToObject(arr) {
    
    var newObject = {};

    for(let i=0;i<arr.length;i++){
        
        newObject[arr[i][0]] = arr[i][1]
    }



    return newObject;

}

//console.log(fromListToObject(arr))

// Parsing a list of lists and convert into a JSON object:
// Write a function called “transformGeekData” that transforms some set of data from one format to another.
// Input (Array):
// var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
// Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]



 arr= [
    [["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role","JSWizard"]],

    [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];

    for(let i=0;i<arr.length;i++){

        items = arr[i]
        newobj = {}
        for(let j=0;j<items.length;j++){
           
            newobj[items[j][0]] = items[j][1]
            

        }
        tranformEmployeeList.push(newobj)
    }
    return tranformEmployeeList
    //return tranformEmployeeList;
}



console.log(transformEmployeeData(arr))



//Comparing json objects

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected){
 // your code here
 if(JSON.stringify(actual)==JSON.stringify(expected)){
     return true
 }
 return false
}

console.log(assertObjectsEqual(actual,expected))


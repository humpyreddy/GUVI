//1.chunk

let chunk = (arr,num)=>
{
    const chunked = []
    for( let elem of arr){
        let last = chunked[chunked.length-1]
        if(!last || last.length == num){
            chunked.push([elem])
        }
        else{
            last.push(elem)
        }
    }

    return chunked;
}

console.log(chunk([1,2,3,4,5,6,7,8,9,10,11],4))

// 2. Reduce function

let sum = (arr,initial_value) =>
{
    let t = initial_value;
    for(let item in arr){
        t += arr[item]
    }

    return t;
}

let reduction = (arr,init)=>{
    return sum(arr,init);
}

console.log(reduction([1,2,3],0))

// 3. Filter 

// for filtering values that are positive
let filtered = (arr) =>{
    let filtered_values  = [];

    for(let item of arr){
        //the condition for filtering
        if(item>0){
            filtered_values.push(item)
        }
    }

    return filtered_values;

}

console.log(filtered([-1,2,-4,4,5,6]))


//4. Find function

const people =[
    { name : 'hampi',occupation : 'developer'},
    { name : 'gautham',occupation : 'analyst'},
    { name : 'keerthi',occupation : 'manager'}
]

let isDeveloper = (person) => person.occupation==='developer';

let finding = (people) =>{
    for(let person of people){
        if(isDeveloper(person)){
            return person.name;
        }
    }

    return 'not found'
}

console.log(finding(people));

//5. Sum function

// sum with input args
let total = (...args) => {
    let total = 0
    for(let arg of args){
        total +=arg
    }

    return total;
}
console.log(total(1,2,3))








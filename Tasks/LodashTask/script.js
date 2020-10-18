//1.chunk
var chunk = function (arr, num) {
    var chunked = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        var last = chunked[chunked.length - 1];
        if (!last || last.length == num) {
            chunked.push([elem]);
        }
        else {
            last.push(elem);
        }
    }
    return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4));
// 2. Reduce function
var sum = function (arr, initial_value) {
    var t = initial_value;
    for (var item in arr) {
        t += arr[item];
    }
    return t;
};
var reduction = function (arr, init) {
    return sum(arr, init);
};
console.log(reduction([1, 2, 3], 0));
// 3. Filter 
// for filtering values that are positive
var filtered = function (arr) {
    var filtered_values = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        //the condition for filtering
        if (item > 0) {
            filtered_values.push(item);
        }
    }
    return filtered_values;
};
console.log(filtered([-1, 2, -4, 4, 5, 6]));
//4. Find function
var people = [
    { name: 'hampi', occupation: 'developer' },
    { name: 'gautham', occupation: 'analyst' },
    { name: 'keerthi', occupation: 'manager' }
];
var isDeveloper = function (person) { return person.occupation === 'developer'; };
var finding = function (people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (isDeveloper(person)) {
            return person.name;
        }
    }
    return 'not found';
};
console.log(finding(people));
//5. Sum function
// sum with input args
var total = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        total += arg;
    }
    return total;
};
console.log(total(1, 2, 3));

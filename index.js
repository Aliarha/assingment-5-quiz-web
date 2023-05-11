/*Write a function that takes a string as input and returns the reverse of the string.*/
let string = "papa"
function stringreversal(string) {
    return string.split("").reverse().join("")
}
console.log(stringreversal(string))


/*Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.*/
let arraystring = ["a", "bacha", "jamhoor"]
function filteredarray(string) {
    return string.filter(function (element) {
        if (element.length > 3) {
            return element
        }
    })
}
console.log(filteredarray(arraystring))

/*Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.*/
function str(array) {
    let array = [];
    for (let i = 0; i < array.length; i++) {
        const l = array[i].length
        newarray.push(l)
    }
}
return newarrayconsole.log(str(array["hi", "hello", "howdy"]));

/*Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.*/
let array = [1, 2, 3, 4, 5, 6]
let result = array.filter(x => x % 2 == 0)
console.log(result);

/*Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.*/
let Array = [
    {
        name: "Ali", age: 36
    },
    {
        name: "Ahmad", age: 14
    },
    {
        name: "Khan", age: 60
    }
];
function Values(array, key) {
    let values = [];
    for (let i = 0; i < array.length; i++) {

        values.push(array[i][key]);
    }

    return values;
}
console.log('Values Of Keys');
let result6 = Values(Array4, "name");
console.log(result6);








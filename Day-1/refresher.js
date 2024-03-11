//Day 1 of 100
//JS Basics
/*
Javascript Outputs
1. innerHTML
document.getElementById("elementID").innerHTML = assign a value
*/
document.getElementById('demo').innerHTML = "Hello JS World!" 
        document.write(2 + 2)


//document.write()
//window.alert()
console.log("Hello Welcome to the Console")
/*
Key note;
Semiclons to separate statements
whitespace is ignored so use it to make your code 
    readable
For Readability avoid long lines of code <80 characters
use curly braces to make a script code block {}


JS Syntax
Fixed values  - Literals
Variable values - Variables

JS Variables are assigned a value

Arithmetic Operators ( + - * /)
assignment operator =

x = 5;
y = 6;

/*
Expression
combination of values, variables and operators that compute to a value
5 * 10

Values can be of various types 

"John" + " " + "Doe"

Key words

let 
var both create variables

//Single Line Comments */
/* */ //Multiline Comments

/*
A Javascript NAme must begin with:
    A letter (A-Z, a-z)
    A dollar sign ($)
    An underscore (_)

JS isCase Sensitive

Hyphens are not allowed in JS reserved for subtractions

Underscore: first_name
UpperCamelCase: FirstName
lowerCamelCase: firstName

Variables are containers for storing data
var 
let 
const

When to use var, let, or const???
1. Always declare variables
2. Always const if the value shoudl not be changed
always use const if the type should not be changed

*/
var x = 20, y = 10;
let z = x + y; 

/*
JS Data Types
start with numbers and strings(text)
string is always quoted 
Numbers in quotes are treated as string


Declare Variables
let person = "John Doe", carName="Axela", price = 200;
A varaible declared without assigning a value is undefined

Re-declare Javascript Variables with var only 

Javascript Arithmetic
*/

let x1 = 5 + 2 + 3;
let y1 = "John" + " Doe";
let z1 = "5" + 2 + 3;

// console.log(x)
// console.log(y)
// console.log(z)

/*Variables Declared inside a Block scope cannot be accessed from outside
let and const introduced by ES6 javascript in 2015

Global Scope 
variables declared with var always have global scope
*/
{
    var fname = "abdi omari"
    // var fname = "new name"
    let firstName = "Abdi Omari"
    // let firstName = "New Name"
}

console.log(fname)
// console.log(firstName)

/* Const
const variable must be assigned a value when they are declared 
the value never changes:
UseCAses
A new Array, A new Object, A new Function, A new RegExp

const defines a constant reference to a value
You CANT: 
        Reassign a constant Value
        Reassign a constant array
        Reassign a constant object

You CAN: 
        change the elements of constant array
        change the properties of constant object
*/

//CONSTANT ARRAYS

const pi = 3.142;
const cars = ["Axela", "Mercedes", "Toyota"]

//change an element
// cars[0] = "Mazda";
// cars.push("Audi");
console.log(cars);

//CONSTANT OBJECT
const car = {
    type: "Mazda",
    model: "Axela",
    color: "Wine-red"
}

// car.color = "black";
// car.owner = "Abdi";

console.log(car)

//Block Scope is similar as in let. 
//Redeclaring is only possible on different scope

const a = 12;
// console.log(a)
{
    const a = 30;
    console.log(a)
}

//JS Operators 
/*
Arithmetic Operators + - * / ** % ++ -- Take note of operator precedence
Assignment Operators = += -= *= /= %= **=
Comparison Operators == === != !== > < >= <= ?
String Operators 
Logical Operators && || !
Bitwise Operators & | ~ ^ << >> >>>
Ternary Operators 
Type Operators
*/

console.log(typeof("2"))

let c = 5, d = 11;
let sum = c + d;
let product = c * d;
let division = d/c;
let rem = d%c

console.log(rem)


//JS datatypes
/*
String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object
*/

let length = 16;
let color = "blue";
let isNight = true;
const person = {firstName: "Abdi", lastName:'Omar'};
const vehicle = ["Axela", "Toyota"];
const date = new Date();
console.log(date)

// let math = 16 + "Volvo";
// console.log(math)

//JS has dynamic types - same variable can be used to hold different data types

/*
let x;
x = 5;
x = "5";

what datatype will x be? 
*/

//Boolean
let f = 5;
let g = 5;
let h = 10;

console.log(f == h)


//Arrays - basically a list 
//Syntax  const arrayName = ["item1", "item2"]

//Objects 
// Syntax const objecName = {key: "value", name: "John" }


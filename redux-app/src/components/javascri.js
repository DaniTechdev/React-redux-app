const { random } = require("lodash");
const { compose, pipe } = require("lodash/fp");
const { Map } = require("immutable");
const { produce } = require("immer");

// function sayHello() {
//   // console.log("Hello world");

//   return "Hello world";
// }

// let fn = sayHello;

// // fn();

// function greet(fnMessage) {
//   console.log(fnMessage);
// }

// greet(fn);

//higher order function

// let numbers = ["1", "2", "3"];

// const convertoNumberArry = numbers.map((number) => {
//   return Number(number);
// });

// const conv = numbers.map(Number);

// const [firstNumber, secondNumber, thirdNumber] = numbers.map(Number);

// console.log(firstNumber, secondNumber, thirdNumber);

// console.log(conv, convertoNumberArry);

// let num1 = "1";

// console.log(Number(num1));

// console.log("number array", convertoNumberArry);

// setTimeout(() => console.log("Hello world"), 5000);

let input = "  Javascript  ";

const trim = (str) => str.trim();

const wrapInDiv = (str) => `<div> ${str}</div>`;
const wrap = (type) => (str) => `<${type}> ${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

//instead of function of function calls we can use the Lodash package
//to simplify it as shown below

//npm install Lodash

//here will will read the code from right to left. i.e
//transform takes the input and then trim it and then convert to lowercase
//and the wrap it in a div
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

//to read it normally from left to right, we iwll use the pipe function
//we will use the pipe function

const transform2 = pipe(trim, toLowerCase, wrapInDiv);
transform2(input);

const transform3WrapType = pipe(trim, toLowerCase, wrap("div"));

// console.log("result", result);
// console.log("transform", transform);
console.log("transform2", transform2(input));
console.log("transform3WrapType", transform3WrapType(input));

//note in pipe function, the output of the first inpiut end up being the input of the
//next function from left to right though from right to left#
//in compose

//curring
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addingUp = add(1)(5);

console.log("addingUp", addingUp);

//as an arrow function

const add2 = (a) => (b) => a + b;

const addingUp2 = add2(1)(7);

console.log("addingUp2", addingUp2);

//Pure fucntions

//pure functions are function when givn the same argument,
//it always returns the same value

function myFunction(number) {
  return number * Math.random();
}

//the above function is not a pure function

function myFunction(number) {
  return number * 2;
}

//the above is pure function

//Pure functions

//No random values
//No current date/time
//No global state(Dom,files,db,etc)

//In redux

//we have pure function knwon as the REDUCERS

//Benefit of Pure function

//self-documenting
//Easily testable
//concurrency
//cacheable

//Immutablility

//once we created and object, strings in some other progrmamming languages, cannot be changg
//rather we have to make a copy and change the copy

//In Javasctipt, object, array, are not immutable thats why its not
//a pure functional programming language

//Why immutablity

//predictability

//faster change detection

//concurrency

//cons

//performance
//memory overhead

//Updating objects

//in javascript objects are mutable, we can reassign by copying firsst or using aassign() method to make a copy

const person = {
  name: "John",
  address: {
    country: "Nigeria",
    city: "Lagos",
  },
};

//deep copy

const updatedCopy = {
  ...person,
  address: {
    ...person.address,
    city: "Enugu",
  },
  name: "Bob",
};

console.log("person", person);

const updated = Object.assign({}, person, { name: "Bob", age: 30 });

const updated2 = { ...person, name: "Daniel Natochi" };
console.log("person", person);
console.log("updated2", updated2);

console.log("updated", updated);

const numbers = [1, 2, 3];

//Adding

// const added = [...numbers,4];

const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log("added", added);

//Removing

const removed = numbers.filter((n) => n != 2);

console.log("removed 2", removed);

//Updating

const updated3 = numbers.map((n) => (n === 2 ? 20 : n));

console.log("updated3", updated3);

//Enforcing Immutability

//there are librariess that helps to enforce immuatability
//Immutable
//immer
//mori

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

// console.log("book", book);
console.log("book.toJS()", book.toJS());

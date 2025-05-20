import "./App.css";
import { compose, pipe } from "lodash/fp";

function App() {
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

  return <div className="App">Hello Redux</div>;
}

export default App;

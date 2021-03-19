function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log(`The result is ${num}`);
}

printResult(add(5, 3));
// console.log(printResult(add(5, 3)));

// let addition: Function;
// addition = printResult; //v Typescript is not able to detect the error
let addition: (a: number, b: number) => number;
addition = add;
// addition = printResult // Not allowed

// addition = 2;

console.log(addition(3, 5));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  let res = n1 + n2;
  cb(res);
}

addAndHandle(3, 5, printResult);

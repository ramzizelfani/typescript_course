// Union Types & Literal types

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let res: number | string;
//   (typeof input1 === 'number' && typeof input2 === 'number') ||
//   resultConversion === 'as-number'
//     ? (res = +input1 + +input2)
//     : (res = input1.toString() + input2.toString());

//   return res;
// }

// const addition = combine(3, 5, 'as-number');
// const additionStrings = combine('3', '5', 'as-number');
// // const notAllowed = combine('3', '5', 'test');
// const concatenation = combine('Hello', ' World!!!', 'as-text');
// console.log(`addition: ${addition}`);
// console.log(`additionStrings: ${additionStrings}`);
// console.log(`concatenation: ${concatenation}`);

// custom types or Types Aliases (Any not reserved name)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let res: Combinable;
  (typeof input1 === 'number' && typeof input2 === 'number') ||
  resultConversion === 'as-number'
    ? (res = +input1 + +input2)
    : (res = input1.toString() + input2.toString());

  return res;
}

const addition = combine(3, 5, 'as-number');
const additionStrings = combine('3', '5', 'as-number');
// const notAllowed = combine('3', '5', 'test');
const concatenation = combine('Hello', ' World!!!', 'as-text');
console.log(`addition: ${addition}`);
console.log(`additionStrings: ${additionStrings}`);
console.log(`concatenation: ${concatenation}`);

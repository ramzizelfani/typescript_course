// unkown is different from any
// unkown is more restrictive thazn any
// You need to do a type check before assigning a variable with type unkown to a variable of fixed type (e.g. string)
// An extra check is needed
let userInput: unknown;
let userName: string;
userInput = 'Max';
// userName = userInput // Not allowed by typescript
if (typeof userInput === 'string') {
  userName = userInput;
}

//the never type

function generateErrorMessage(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };
} // This function never returns a vlue, even an undefined value, As a result the return value of this function is never and not void

generateErrorMessage('A server Error Occured', 500);
console.log(generateErrorMessage('A server Error Occured', 500));

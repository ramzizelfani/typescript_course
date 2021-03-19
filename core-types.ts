// core Types
// number, boolean, string
// function add(
//   n1: number,
//   n2: number,
//   showResult: boolean,
//   output: string
// ): number {
//   let res = n1 + n2;
//   if (showResult) {
//     console.log(output + res);
//     return 0;
//   }
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 5;
// const showresult = true;
// const output = 'The result is: ';

// const result = add(number1, number2, showresult, output);
// console.log(result);

//Objects and Arrays
// Tuples : fixed length and type Arrays
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: 'Ramzi',
//   age: 34,
//   hobbies: ['Sports', 'Movies'],
//   role: [1, 'Admin'],
// };
// person.role = [3, 'SuperAdmin'];
// console.log(person.role);
// person.role.push(3); // push is an exception for tuples that typescript could not catch
// console.log(person.role);

// let favoriteActivities: string[];
// // let favoriteActivities: any[];
// favoriteActivities = ['Sleeping', 'Sleeping in day time'];
// console.log(person.name);
// person.hobbies.map((hobby) => {
//   console.log(hobby.toUpperCase()); // Inference, get the proporties of a String because TypeScript knows we are mapping an array of strings
// });

// ENums

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Ramzi',
  age: 34,
  hobbies: ['Sports', 'Movies'],
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log('is admin');
}

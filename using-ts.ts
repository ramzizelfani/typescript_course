const button2 = document.querySelector('button')! as HTMLButtonElement;
const input21 = document.getElementById('num1')! as HTMLInputElement;
const input22 = document.getElementById('num2')! as HTMLInputElement;

function add2(num1: number, num2: number): number {
  return num1 + num2;
}

button2.addEventListener('click', function () {
  console.log(add2(+input21.value, +input22.value));
});

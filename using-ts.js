var button2 = document.querySelector('button');
var input21 = document.getElementById('num1');
var input22 = document.getElementById('num2');
function add2(num1, num2) {
    return num1 + num2;
}
button2.addEventListener('click', function () {
    console.log(add2(+input21.value, +input22.value));
});

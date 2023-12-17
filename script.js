// import { without } from 'lodash';

// console.log(without);

var _ = require('lodash');
let arr = [1,2,3,4,5];
console.log(_.without(arr, 4));

let body = document.getElementById('gradient');
let input1 = document.getElementsByClassName("input1")[0];
let input2 = document.getElementsByClassName("input2")[0];
let h3 = document.getElementsByTagName('h3')[0];

function set_gradient(event) {
    body.style.background = "linear-gradient(to right" + "," + input1.value + "," + input2.value + ")";

    h3.textContent = body.style.background;
}

input1.addEventListener('input', set_gradient)
input2.addEventListener('input', set_gradient)
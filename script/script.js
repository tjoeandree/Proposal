let button = document.getElementById('buttonPrice');

let string1 = document.getElementById('harga1').innerHTML.split('.').join('');
let string2 = document.getElementById('harga2').innerHTML.split('.').join('');
let string3 = document.getElementById('harga3').innerHTML.split('.').join('');

function getTotalandDP() {
  var num1 = string1.replace(/[^0-9]+/g, '');
  var num2 = string2.replace(/[^0-9]+/g, '');
  var num3 = string3.replace(/[^0-9]+/g, '');
  let total = +num1 + +num2 + +num3;
  let DP = total / 2;
  document.getElementById('total').innerHTML += total.toLocaleString().replace(/,/g, '.');
  document.getElementById('DP').innerHTML += DP.toLocaleString().replace(/,/g, '.');
}

window.onload = getTotalandDP;

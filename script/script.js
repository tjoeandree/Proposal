// Efek Rubah Background
function bgChange() {
  if (window.scrollX > window.innerWidth / 1.2) {
    document.body.classList.add('bg-change');
  } else {
    document.body.classList.remove('bg-change');
  }
}

window.addEventListener('scroll', bgChange);

// Fungsi Jumlah Harga Produk dan Estimasi DP
let button = document.getElementById('buttonPrice');

let string1 = document.getElementById('harga1').innerHTML.split('.').join('');
let string2 = document.getElementById('harga2').innerHTML.split('.').join('');

function getTotalandDP() {
  var num1 = string1.replace(/[^0-9]+/g, '');
  var num2 = string2.replace(/[^0-9]+/g, '');

  let total = +num1 + +num2;
  let DP = total / 2;
  document.getElementById('total').innerHTML += ' ' + total.toLocaleString().replace(/,/g, '.');
  document.getElementById('DP').innerHTML += ' ' + DP.toLocaleString().replace(/,/g, '.');
}

window.onload = getTotalandDP;

// Fungsi horisontal scroll dengan mousewheel
(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.documentElement.scrollLeft -= delta * 80; // Multiplied by 40
    document.body.scrollLeft -= delta * 80; // Multiplied by 40
    e.preventDefault();
  }
  if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener('mousewheel', scrollHorizontally, false);
    // Firefox
    window.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
    // IE 6/7/8
    window.attachEvent('onmousewheel', scrollHorizontally);
  }
})();

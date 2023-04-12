let total = 0;

function addition(x) {
  return (total += x);
}

function soustraction(x) {
  return (total -= x);
}

function multiplication(x) {
  return (total *= x);
}
function division(x) {
  if (x === 0) {
    alert("On ne peut pas diviser par 0");
  } else {
    return (total /= x);
  }
}

var input1 = document.querySelector("#input-a");
var input2 = document.querySelector("#input-b");
var output1 = document.querySelector("#output1");
var output = document.querySelector("#output");

function findHypotenuse() {
  if (!input1.value || !input2.value) {
    output.innerText = "Invalid input";
  } else if (Number(input1.value) < 0 || Number(input2.value) < 0) {
    output.innerText = "Side of 🔺 can't have negative length";
  } else if (Number(input1.value) == 0 || Number(input2.value) == 0) {
    output.innerText = "Side of 🔺 can't be 0";
  } else {
    var hypotenuse = Math.sqrt(
      Math.pow(Number(input1.value), 2) + Math.pow(Number(input2.value), 2)
    );
    hypotenuse = hypotenuse.toFixed(2);
    output.innerText = "Length of hypotenuse is " + hypotenuse;
  }
}

output1.addEventListener("click", findHypotenuse);
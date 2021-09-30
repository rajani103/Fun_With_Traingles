var angleOne = document.querySelector("#angle-one");
var angleTwo = document.querySelector("#angle-two");
var angleThree = document.querySelector("#angle-three");
var btnRef = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

function isTriangle() {
  if (!angleOne.value || !angleTwo.value || !angleThree.value) {
    output.innerText = "Invalid input";
  } else if (
    parseInt(angleThree.value) <= 0 ||
    parseInt(angleTwo.value) <= 0 ||
    parseInt(angleOne.value) <= 0
  ) {
    output.innerText = "Invalid input";
  } else if (
    parseInt(angleThree.value) +
      parseInt(angleTwo.value) +
      parseInt(angleOne.value) ===
    180
  ) {
    output.innerText = "The given angles form a triangle";
  } else {
    output.innerText = "The given angles do not form a triangle";
  }
}

btnRef.addEventListener("click", isTriangle);
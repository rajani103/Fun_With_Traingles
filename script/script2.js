var formRef = document.querySelector("#form");
var btnRef = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;
  var index = 0;

  const data = new FormData(formRef);

  for (let value of data.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index++;
  }

  output.innerText = "Your score is " + score;
}

btnRef.addEventListener("click", calculateScore);
let userscore = document.querySelector("#user-score-val");
let computerscore = document.querySelector("#computer-score-val");
let choices = document.querySelectorAll(".choice");
let userChoice;
let computerChoice;

for (let choice of choices) {
  choice.addEventListener("click", () => {
    userChoice = choice.id;
    console.log("User choice: " + userChoice);
    computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice);
    getResult(userChoice, computerChoice);
  });
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].id;
}
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    userscore.innerText = (parseInt(userscore.innerText, 10) || 0) + 1;
  } else {
    console.log("You lose!");
    computerscore.innerText = (parseInt(computerscore.innerText, 10) || 0) + 1;
  }
}

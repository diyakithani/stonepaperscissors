let userscore = 0;
let computerscore = 0;
let choices = document.querySelectorAll(".choice");
let userChoice;
let computerChoice;
function getUserChoice() {
  for (let choice of choices) {
    choice.addEventListener("click", () => {
      userChoice = choice.id;
      console.log("User choice: " + userChoice);
      computerChoice = getComputerChoice();
      console.log("Computer choice: " + computerChoice);
    });

    choices.addEventListener("click", () => {
      getUserChoice();
    });
  }
}
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].id;
}
getUserChoice();

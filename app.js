let totalRounds = 0;
let currentRound = 0;
let gameStarted = false;
let userscore = document.querySelector("#user-score-val");
let computerscore = document.querySelector("#computer-score-val");
let choices = document.querySelectorAll(".choice");
let userChoice;
let computerChoice;
let resultDisplay = document.querySelector("#result-val");
let restartButton = document.querySelector("#restart-button");

function startGame() {
  totalRounds = parseInt(document.querySelector("#rounds").value);
  if (!totalRounds || totalRounds <= 0) {
    alert("Please enter valid number of rounds.");
    return;
  }
  currentRound = 0;
  userscore.innerText = 0;
  computerscore.innerText = 0;
  resultDisplay.innerText = "";
  gameStarted = true;

  document.getElementById("entry-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";

  document.getElementById(
    "round-tracker"
  ).innerText = `Round 1 of ${totalRounds}`;
}

for (let choice of choices) {
  choice.addEventListener("click", () => {
    if (!gameStarted || currentRound >= totalRounds) return;

    userChoice = choice.id;
    computerChoice = getComputerChoice();
    getResult(userChoice, computerChoice);

    currentRound++;
    if (currentRound < totalRounds) {
      document.getElementById("round-tracker").innerText = `Round ${
        currentRound + 1
      } of ${totalRounds}`;
    } else {
      endGame();
    }
  });
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].id;
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a draw!");
    resultDisplay.innerText = "It's a draw! Both chose " + userChoice + ".";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    userscore.innerText = (parseInt(userscore.innerText, 10) || 0) + 1;
    resultDisplay.innerText =
      "You win! " + userChoice + " beats " + computerChoice;
  } else {
    console.log("You lose!");
    computerscore.innerText = (parseInt(computerscore.innerText, 10) || 0) + 1;
    resultDisplay.innerText =
      "You lose! " + computerChoice + " beats " + userChoice;
  }
}

function endGame() {
  let user = parseInt(userscore.innerText);
  let comp = parseInt(computerscore.innerText);
  let message = "";

  if (user > comp) {
    message = "🏆 You win the game!";
  } else if (user < comp) {
    message = "😢 Computer wins the game!";
  } else {
    message = "🤝 It's a tie overall!";
  }

  resultDisplay.innerText = message;
  gameStarted = false;
}

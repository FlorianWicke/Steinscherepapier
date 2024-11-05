
const tools = ["rock", "paper","scissors"]


let humanScore = 0
let computerScore = 0

function getComputerChoice(){
  return tools[Math.floor(Math.random() * tools.length)];
}

function getHumanChoice(){
  return prompt("What do you take: rock, paper, or scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice){
  if (computerChoice === humanChoice) {
    console.log("Unentschieden, keiner einen Punkt");
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[humanChoice] === computerChoice) {
    console.log("Spieler gewinnt");
    humanScore++;
  } else {
    console.log("Computer gewinnt");
    computerScore++;
  }
}

function playGame(){

while (humanScore < 3 && computerScore < 3){
  const computerChoice = getComputerChoice()
  const humanChoice = getHumanChoice()

  playRound(humanChoice, computerChoice)

  console.log("human: " + humanScore)
  console.log("computer: " + computerScore)

  if(humanScore == 3){
    console.log("Der Spieler hat gewonnen")
  } else if (computerScore === 3){
    console.log("Der Computer hat gewonnen")
  }
}
}

playGame()

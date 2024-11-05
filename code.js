
const tools = ["rock", "paper","scissors"]


let humanScore = 0
let computerScore = 0


function getComputerChoice(){
  let randomNumber = Math.random()

  if (randomNumber <0.334){
    return (tools[0])
  } else if (randomNumber > 0.334 && randomNumber < 0.667){
    return(tools[1])
  } else {
    return(tools[2])
  }

}

function getHumanChoice(){
  return prompt("What dou you take rock, paper, scissors?")
}

function playRound(){
  let computerChoice = getComputerChoice()
  let humanChoice = getHumanChoice()

  if (computerChoice === humanChoice){
    console.log("Unentschieden, keiner einen Punkt")
  }

  //Computer hat Stein, Spieler hat Paper -> Spieler gewinnt
  if (computerChoice === "rock" && humanChoice === "paper"){
    console.log("Spieler gewinnt")
    humanScore += 1
  }

  //Computer hat Stein, Spieler hat Schere -> Computer gewinnt

  if (computerChoice === "rock" && humanChoice === "scissors"){
    console.log("Computer gewinnt")
    computerScore += 1
  }
  //Computer hat Paper, Spieler hat Schere -> Spieler gewinnt
  if (computerChoice === "paper" && humanChoice === "scissors"){
    console.log("Spieler gewinnt")
    humanScore += 1
  }

  //Computer hat Paper, Spieler hat Stein -> Computer gewinnt
  if (computerChoice === "paper" && humanChoice === "rock"){
    console.log("Computer gewinnt")
    computerScore += 1
  }
  //Computer hat Schere, Spieler hat Papier -> Computer gewinnt
  if (computerChoice === "scissors" && humanChoice === "paper"){
    console.log("Computer gewinnt")
    computerScore += 1
  }

  //Computer hat Schere, Spieler hat Stein -> Spieler gewinnt
  if (computerChoice === "scissors" && humanChoice === "rock"){
    console.log("Spieler gewinnt")
    humanScore += 1
  }

}

console.log("human " + humanScore)
console.log("computer " + computerScore)

while (humanScore < 3 && computerScore < 3){
  playRound()
  console.log("human " + humanScore)
console.log("computer " + computerScore)
}

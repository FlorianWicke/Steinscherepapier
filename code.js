
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
  console.log(computerChoice)

  let humanChoice = getHumanChoice()

  if (computerChoice === humanChoice){
    console.log("Unentschieden, keiner einen Punkt")
  }

}

playRound()

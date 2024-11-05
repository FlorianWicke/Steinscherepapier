
const tools = ["rock", "paper","scissors"]


function getComputerChoice(){
  let randomNumber = Math.random()

  if (randomNumber <0.334){
    console.log(tools[0])
  } else if (randomNumber > 0.334 && randomNumber < 0.667){
    console.log(tools[1])
  } else {
    console.log(tools[2])
  }



}

getComputerChoice()

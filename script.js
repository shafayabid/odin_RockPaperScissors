
for (let i = 0; i < 5; i++){
    let userInput = prompt(`[ROUND ${i}] Enter Rock Paper or Scissors: `);
    console.log(playRound(userInput,getComputerChoice()));
}



function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(playerMove, computerMove){
    let mPlayerMove = playerMove.toLowerCase();
    console.log(`player: ${playerMove}, computer: ${computerMove}`);

    if(mPlayerMove == computerMove){
        return `Draw, you both chose ${playerMove}`;
    }else if(mPlayerMove == "rock" && computerMove == "paper"){
        return "You Lose! Paper beats Rock";
    }else if(mPlayerMove == "rock" && computerMove == "scissors"){
        return "You win! rock beats scissors";
    }else if(mPlayerMove == "paper" && computerMove == "scissors"){
        return "You Lose! scissors beats paper";
    }else if(mPlayerMove == "paper" && computerMove == "rock"){
        return "You Win! paper beats rock";
    }else if(mPlayerMove == "scissors" && computerMove == "rock"){
        return "You Lose! rock beats scissors";
    }else if(mPlayerMove == "scissors" && computerMove == "paper"){
        return "You win! scissors beats paper";
    }

}
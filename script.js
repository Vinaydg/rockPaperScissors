function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper";
    }
    else{
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")){
            playerScore++;
        }
        else if (result.includes("lose")){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You win the game!");
    }
    else if (playerScore < computerScore){
        console.log("You lose the game!");
    }
    else{
        console.log("It's a tie!");
    }
}

game();
let playerScore = 0;
let computerScore = 0;
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

function game(playerSelection){
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        document.querySelector(".present-result").innerText = result;
        console.log(result);
        if (result.includes("win")){
            document.querySelector(".player-score").innerText = ++playerScore;
        }
        else if (result.includes("lose")){
            document.querySelector(".computer-score").innerText = ++computerScore;
        }
        else if (result.includes("tie")) {
            document.querySelector(".computer-score").innerText = ++computerScore;
            document.querySelector(".player-score").innerText = ++playerScore;
        }
    if (playerScore === 5 && computerScore < 5){
        document.querySelector(".result").innerText = "You win the game!";
        console.log("You win the game!");
    }
    else if (playerScore < 5  && computerScore === 5){
        document.querySelector(".result").innerText = "You lose the game!";
        console.log("You lose the game!");
    }
    else if(computerScore === 5 && playerScore === 5){
        document.querySelector(".result").innerText = "It's a tie!";
        console.log("It's a tie!");
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".player-score").innerText = playerScore;
    document.querySelector(".computer-score").innerText = computerScore;
    document.querySelector(".present-result").innerText = "";
}

function init(){
    document.querySelector(".options").addEventListener("click", function(e){
        if (document.querySelector(".result").innerText !== ""){
            document.querySelector(".present-result").innerText = "";
            document.querySelector(".result").innerText = "";
            reset();
        }
        game(e.target.innerText.toLowerCase())
    });
    document.querySelector(".reset").addEventListener("click", function(){
        reset();
    });
}

init();
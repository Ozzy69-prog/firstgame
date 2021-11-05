let items = ["Rock", "Scissors", "Paper" ]

let computerPlay = items[Math.floor(Math.random() * items.length)]

let userPlay = prompt("Enter Rock, Paper or Scissors")
  
function game(playerSelection, computerSelection) {
        if (playerSelection === "rock") {
            return rock(playerSelection, computerSelection)
        } else if (playerSelection === "paper") {
            return paper(playerSelection, computerSelection)
        } else if (playerSelection === "scissors") {
            return scissors(playerSelection, computerSelection)
        }
    }


function rock(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors, Congratrulations"
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie! Try Again"  
    } else {
        return "You lose! Rock loses to " + computerSelection + ", Better luck next time"
    }
}

function paper(playerSelection, computerSelection) {
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock, Congratrulations"
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a tie! Try Again"  
    } else {
        return "You lose! Paper loses to " + computerSelection + ", Better luck next time"
    }
}

function scissors(playerSelection, computerSelection) {
    if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper, Congratrulations"
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie! Try Again"  
    } else {
        return "You lose! Scissors loses to " + computerSelection + ", Better luck next time"
    }
}

const computerSelection = computerPlay;
const playerSelection = userPlay.toLowerCase();
console.log(game(playerSelection, computerSelection));
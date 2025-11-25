let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice(choice){
    choice = Math.floor(Math.random()*3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else return "scissors"; 
}

function playRound(human, computer){
    const choiceH = document.querySelector("li.hChoice");
    choiceH.textContent = `The human player chose ${human}.`;

    const choiceC = document.querySelector("li.cChoice");
    choiceC.textContent = `The Computer chose ${computer}.`;
    const results = document.querySelector("li.results");

    console.log(human);
    if (human === computer){
            results.textContent = ("IT'S A DRAW!");
            drawScore++;
    }
        else if(human === "rock" && computer === "paper"){
        results.textContent = ("YOU LOST!");
        computerScore=++computerScore;
        }
        
        else if (human === "rock" && computer === "scissors"){
            results.textContent = ("YOU WON!");
            humanScore=++humanScore;
        }
            
        else if (human === "paper" && computer === "rock"){
            results.textContent = ("YOU WON!");
            humanScore=++humanScore;
        }
            
        else if(human === "paper" && computer === "scissors"){
            results.textContent = ("YOU LOST!");
            computerScore=++computerScore;
        }
            
        else if(human === "scissors" && computer === "rock"){
            results.textContent = ("YOU LOST!");
            computerScore=++computerScore;
        }
            
        else if (human === "scissors" && computer === "paper"){
            results.textContent = ("YOU WON!");
            humanScore=++humanScore; 
        }
    const score = document.querySelector("li.score")
    score.textContent = `The score is: Human: ${humanScore} Computer: ${computerScore} Draws: ${drawScore}`;

}

    let computerChoice;
    let computer;
   
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener("click", (event) =>{
        computer = getComputerChoice(computerChoice);
        event.preventDefault();
        playRound("rock", computer);
    });
    paper.addEventListener("click", (event) =>{
        computer = getComputerChoice(computerChoice);
        event.preventDefault();
        playRound("paper", computer);
    });
    scissors.addEventListener("click", (event) =>{
        computer = getComputerChoice(computerChoice);
        event.preventDefault();
        playRound("scissors", computer);
    });
    



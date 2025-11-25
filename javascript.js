let humanScore = 0;
let computerScore = 0;
// let gameStop = true;


// function getHumanChoice(choice){
//     if
// }
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
    const results = document.querySelector("li.results"); // 0 = ROCK, 1 = PAPER, 2 = SCISSORS
    // game.appendChild("results");
    // results.classList.add("results");
    console.log(human);
    if (human === computer)
            results.textContent = ("IT'S A DRAW!");
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

}

    let computerChoice;
    let computer;
    // let humanChoice;

  
    // let human = getHumanChoice(humanChoice);
    // let human;
    
    // while (human != 0 && human != 1 && human !=2 && human !=3){
    //     console.log("You should only input 0, 1, 2 or 3");
    //     human = getHumanChoice(humanChoice);
    //     }

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
    // switch(human){
    //     case 0:
    //         console.log("You chose Rock");
    //         break;
    //     case 1:
    //         console.log("You chose Paper");
    //         break;
    //     case 2:
    //         console.log("You chose Scissors");
    //         break;
    //     case 3:
    //         console.log("Game over!");
    //         gameStop = false;
    //         break;
    // }

    // if (human == 0 || human == 1 || human ==2)
    //     switch(computer){
    //         case 0:
    //             console.log("The computer chose Rock");
    //             break;
    //         case 1:
    //             console.log("The computer chose Paper");
    //             break;
    //         case 2:
    //             console.log("The computer chose Scissors");
    //             break;
    //     }

    //     if (human===3)
    //         console.log(`Final score: Human = ${humanScore} Computer = ${computerScore}`)

    //     else console.log(`Current score: Human = ${humanScore} Computer = ${computerScore}`);



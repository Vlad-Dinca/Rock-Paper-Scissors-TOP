console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;
let gameStop = true;


function getHumanChoice(choice){
    return choice =parseInt(prompt("ROCK = 0, PAPER = 1, SCISSORS = 2, STOP = 3: "));
}
function getComputerChoice(choice){
    return choice = Math.floor(Math.random()*3);
}

function playRound(human, computer){
    if (human === computer)
            console.log("IT'S A DRAW!");
        else if(human === 0 && computer === 1){
            console.log("YOU LOST!");
            computerScore=++computerScore;
        }
        
        else if (human === 0 && computer === 2){
            console.log("YOU WON!");
            humanScore=++humanScore;
        }
            
        else if (human === 1 && computer === 0){
            console.log("YOU WON!");
            humanScore=++humanScore;
        }
            
        else if(human === 1 && computer === 2){
            console.log("YOU LOST!");
            computerScore=++computerScore;
        }
            
        else if(human === 2 && computer === 0){
            console.log("YOU LOST!");
            computerScore=++computerScore;
        }
            
        else if (human === 2 && computer === 1){
            console.log("YOU WON!");
            humanScore=++humanScore; 
        }

}

while(gameStop){
    let computerChoice;
    let humanChoice;

    let computer =getComputerChoice(computerChoice);
    let human = getHumanChoice(humanChoice);
    
    while (human != 0 && human != 1 && human !=2 && human !=3){
        console.log("You should only input 0, 1, 2 or 3");
        human = getHumanChoice(humanChoice);
        }

    playRound(human, computer);  
            
    switch(human){
        case 0:
            console.log("You chose Rock");
            break;
        case 1:
            console.log("You chose Paper");
            break;
        case 2:
            console.log("You chose Scissors");
            break;
        case 3:
            console.log("Game over!");
            gameStop = false;
            break;
    }

    if (human == 0 || human == 1 || human ==2)
        switch(computer){
            case 0:
                console.log("The computer chose Rock");
                break;
            case 1:
                console.log("The computer chose Paper");
                break;
            case 2:
                console.log("The computer chose Scissors");
                break;
        }

        if (human===3)
            console.log(`Final score: Human = ${humanScore} Computer = ${computerScore}`)

        else console.log(`Current score: Human = ${humanScore} Computer = ${computerScore}`);

}

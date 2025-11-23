console.log("Hello World!");



function getHumanChoice(choice){
    return choice =parseInt(prompt("ROCK = 0, PAPER = 1, SCISSORS = 2: "));
}
function getComputerChoice(choice){
    return choice = Math.floor(Math.random()*3);
}

let computerChoice;
let humanChoice;

let computer =getComputerChoice(computerChoice);
let human = getHumanChoice(humanChoice);


while (human != 0 && human != 1 && human !=2){
    console.log("You should only input 0, 1 or 2");
    human = getHumanChoice(humanChoice);
    }

if (human === computer)
        console.log("IT'S A DRAW!");
    else if(human === 0 && computer === 1)
    console.log("YOU LOST!");
    else if (human === 0 && computer === 2)
        console.log("YOU WON!");
    else if (human === 1 && computer === 0)
        console.log("YOU WON!");
    else if(human === 1 && computer === 2)
        console.log("YOU LOST!");
    else if(human === 2 && computer === 0)
        console.log("YOU LOST!");
    else if (human === 2 && computer === 1)
        console.log("YOU WON!"); 



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


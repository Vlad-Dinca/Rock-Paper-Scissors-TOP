let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choice){
    choice = Math.floor(Math.random()*3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else 
        return "scissors"; 
}

function playRound(human, computer){
    const choiceH = document.querySelector("li.hChoice");
    choiceH.textContent = `The human player chose ${human}.`;

    const choiceC = document.querySelector("li.cChoice");
    choiceC.textContent = `The Computer chose ${computer}.`;
    const results = document.querySelector("li.results");

    if (human === computer){
            results.textContent = ("IT'S A DRAW!");
    }

    if(human === "rock" && computer === "paper"){
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
    score.textContent = `The score is: Human: ${humanScore} Computer: ${computerScore}`;
}

function checkScore(hScore, cScore){
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const para = document.getElementsByClassName("modalText")[0];
    const image = document.getElementById("modalImg");

     if (hScore === 5){
        modal.style.display="block";
        para.textContent = "YOU WON!";
        para.style="color:greenyellow";
        image.src="./images/trophyWin.svg";
        span.addEventListener("click", (event) =>{
            event.preventDefault();
            modal.style.display="none";
        });_
        humanScore = 0;
        computerScore = 0;
    }
    else if(cScore === 5){
        modal.style.display="block";
        para.textContent = "YOU LOST!";
        image.src="./images/trophyLose.svg";
        para.style="color: red";
        span.addEventListener("click", (event) =>{
            event.preventDefault();
            modal.style.display="none";
        });_ 
        humanScore = 0;
        computerScore = 0;
    }
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
    checkScore(humanScore, computerScore);
});
paper.addEventListener("click", (event) =>{
    computer = getComputerChoice(computerChoice);
    event.preventDefault();
    playRound("paper", computer);
    checkScore(humanScore, computerScore);
});
scissors.addEventListener("click", (event) =>{
    computer = getComputerChoice(computerChoice);
    event.preventDefault();
    playRound("scissors", computer);
    checkScore(humanScore, computerScore);
});

const copyright = document.getElementById("copyright");
copyright.textContent = `Copyright ©  ${(new Date().getFullYear())} Vlad-Dinca`;

    



let userScore=0;
let computerScore=0;
let round=0;
const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
const userScoreDisplay=document.getElementById('user-score');
const computerScoreDisplay=document.getElementById('computer-score');
const possibleChoice=document.querySelectorAll('.selection');

let userChoice;
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
        userChoice=e.target.id;
        userChoiceDisplay.innerHTML=userChoice;
        computerChoice();
        round++;
        getResults();
        log();
        gameEnd();
}));

let compChoice;
function computerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            computerChoiceDisplay.innerHTML='Rock';
            compChoice='Rock';
            break;

        case 1:
            computerChoiceDisplay.innerHTML='Paper';
            compChoice='Paper';
            break;
        case 2:
            computerChoiceDisplay.innerHTML='Scissors';
            compChoice='Scissors';
            break;
}
}

function getResults(){
    if(userChoice==='rock' && compChoice==='Rock' || userChoice==='paper' && compChoice==='Paper' || userChoice==='scissors' && compChoice==='Scissors'){
        resultDisplay.innerHTML='Result of round ${round} : Tie';
       
      
        
    }
    else if(userChoice==='rock' && compChoice==='Paper'||userChoice==='paper' && compChoice==='Scissors'||userChoice==='scissors' && compChoice==='Rock'){
        resultDisplay.innerHTML='Computer won the round '+round+'! Because ${compChoice} beats ${userChoice}!';
        computerScore++;
        computerScoreDisplay.innerHTML=computerScore;
        userScoreDisplay.innerHTML=userScore;
    }
    else if(userChoice==='rock' && compChoice==='Scissors'||userChoice==='paper' && compChoice==='Rock'||userChoice==='scissors' && compChoice==='Paper'){
        resultDisplay.innerHTML='You Won the round '+round+'! Because '+userChoice+' beats '+ compChoice;
        userScore++;
        userScoreDisplay.innerHTML=userScore;
        computerScoreDisplay.innerHTML=computerScore;
    }
}
function log(){
    
    const div= document.createElement('div');
    div.innerHTML='Round '+round+' : '+userChoice+' vs '+compChoice;
    console.log(div);
    document.body.appendChild(div);
}


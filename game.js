let playerWins = 0, computerWins = 0, ties =0;
let playerChoice;
const startButton = document.querySelector('#start-button');
const display = document.querySelector('#game-display');

startButton.addEventListener('click' , function () {
    const killOnStart = document.querySelectorAll('.disable-on-start').forEach(disableElement => {
        disableElement.setAttribute("disabled", "disabled");
    });
    
    const enableOnStart = document.querySelectorAll('.enable-after-start').forEach(enableElement => {
        enableElement.removeAttribute("disabled");
        
    });

        display.textContent ="Please choose a weapon below";

    
  
});


let getChoice = document.querySelectorAll('.enable-after-start');   
    getChoice.forEach( function(choice){
        choice.addEventListener("click", function(){
              playerChoice= choice.value;
             if (playerChoice) gameRound();

        } );
        
    });


function computerPlay () {
    let randComputerChoice = Math.floor((Math.random() * 100) + 1);
    let computerChoiceResult;
    if (randComputerChoice <= 20)
        computerChoiceResult = "Paper".toUpperCase();
        else if (randComputerChoice >= 20 && randComputerChoice <= 60)
        computerChoiceResult = "Rock".toUpperCase();
        else if (randComputerChoice > 60)
        computerChoiceResult = "Scissors".toUpperCase();
        return computerChoiceResult;

}


function gameRound (){
        
        const computerFinalResult = computerPlay();
        const playerFinalResult = playerChoice.toUpperCase();

        if(playerFinalResult == null)
        return;
        display.textContent  = `Player Chose ${playerFinalResult} & Computer Chose ${computerFinalResult}`;

        
        if (playerFinalResult == computerFinalResult) {

            setTimeout(() => {
                display.textContent  =`It's a TIE`;
            }, 5000);
    
            ++ties;
        }
            else if (  (playerFinalResult == 'ROCK' && computerFinalResult == 'SCISSORS')
             || (playerFinalResult == 'PAPER' && computerFinalResult == 'ROCK') 
             || (playerFinalResult == 'SCISSORS' && computerFinalResult == 'PAPER') ) {
                 setTimeout(() => {
                    display.textContent  =`PLAYER wins`;
                 }, 5000);

            ++playerWins
            }
            else {
                setTimeout(() => {
                    display.textContent  =`COMPUTER wins`;
                }, 5000);
                ++computerWins;
            }

           }
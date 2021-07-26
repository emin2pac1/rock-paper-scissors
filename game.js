let playerWins = 0, computerWins = 0, ties =0;
let playerChoice;
const startButton = document.querySelector('#start-button');
const replayButton = document.querySelector('#replay-button');
const display = document.querySelector('#game-display');
const getChoice = document.querySelectorAll('.enable-after-start'); 
const killOnStart = document.querySelectorAll('.disable-on-start');
const allButtons = document.querySelectorAll('button');

setTimeout(() => {
    display.textContent=`Click "Start" to Start`;
}, 3000);

startButton.addEventListener('click' , function () {
    killOnStart.forEach(disableElement => {
        disableElement.setAttribute("disabled", "disabled");
    });
    
    getChoice.forEach(enableElement => {
        enableElement.removeAttribute("disabled");
        
    });

        display.textContent ="choose a weapon";

    
  
});

    if (playerWins == 5 || computerWins ==5)
    gameRound();

    getChoice.forEach( function(choice){
        choice.addEventListener("click", function(){
              playerChoice= choice.value;
             if (playerChoice) {
                 getChoice.forEach( btn =>{
                     btn.setAttribute("disabled", "disabled");
                 });
                gameRound();
             } 

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
        if(playerWins<5 && computerWins<5)
        display.textContent  = `Player Chose ${playerFinalResult}`;

        setTimeout(() => {
            if(playerWins<5 && computerWins<5)
            display.textContent  =`Computer Chose ${computerFinalResult}`;
        }, 2000);

        
        if (playerFinalResult == computerFinalResult) {
            ++ties;

            setTimeout(() => {
                display.textContent  =`It's a TIE`;
            }, 4000);
    
        }
        else if (  (playerFinalResult == 'ROCK' && computerFinalResult == 'SCISSORS')
                 || (playerFinalResult == 'PAPER' && computerFinalResult == 'ROCK') 
                || (playerFinalResult == 'SCISSORS' && computerFinalResult == 'PAPER') ) {
                ++playerWins;
                 setTimeout(() => {
                     if(playerWins<5 && computerWins<5)
                    display.textContent  =`PLAYER wins`;
                 }, 4000);

            }

            else {
                ++computerWins;
                setTimeout(() => {
                    if(playerWins<5 && computerWins<5)
                    display.textContent  =`COMPUTER wins`;
                }, 4000);
            }

         if (playerWins == 5 || computerWins ==5 ) {

            allButtons.forEach(disableElement => {

                disableElement.setAttribute("disabled", "disabled");
        
             });
        
            display.textContent = "Game Over!";

                setTimeout(() => {
                    display.textContent  = `Player Chose ${playerFinalResult}`;    
                }, 2000);


                setTimeout(() => {
                    display.textContent  =`Computer Chose ${computerFinalResult}`;
                }, 4000);
                       
                setTimeout(() => {
                    if(playerWins > computerWins) {
        
                        display.textContent="Player Won the Game";
        
                    }
        
                    if (computerWins> playerWins) {
                        display.textContent="Computer Won the Game";
                    }
                    
                    },6000);
                
                
                return;
            }
    

            setTimeout(() => {
                display.textContent  =`Another Round?`;
                replayButton.removeAttribute('disabled');
            }, 8000);            

            replayButton.addEventListener('click', function () {

                getChoice.forEach(enableElement => {
                    enableElement.removeAttribute("disabled");

                    
                });

                setTimeout(() => {
                    replayButton.setAttribute("disabled","disabled");
                    display.textContent="Choose a Weapon";
                }, 100);
            });

            }
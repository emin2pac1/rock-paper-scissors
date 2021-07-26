let playerWins = 0, computerWins = 0, ties =0;
let playerChoice;
const startButton = document.querySelector('#start-button');
const replayButton = document.querySelector('#replay-button');
const display = document.querySelector('#game-display');
const getChoice = document.querySelectorAll('.enable-after-start'); 
const killOnStart = document.querySelectorAll('.disable-on-start');
const allButtons = document.querySelectorAll('button');
console.log(allButtons);

startButton.addEventListener('click' , function () {
    killOnStart.forEach(disableElement => {
        disableElement.setAttribute("disabled", "disabled");
    });
    
    getChoice.forEach(enableElement => {
        enableElement.removeAttribute("disabled");
        
    });

        display.textContent ="Please choose a weapon below";

    
  
});


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
        
    /*if (playerWins == 5 || computerWins ==5 ) {

        allButtons.forEach(disableElement => {
            disableElement.setAttribute("disabled", "disabled");

        });

        display.textContent = "Game Over!";
               
        setTimeout(() => {
            if(playerWins > computerWins) {

                display.textContent="Player Won the Game";
                return;

            }
            else if (computerWins > playerWins) {
                display.textContent="Computer Won the Game";
                return;
            }
        }, 8000);
            
    }*/

        const computerFinalResult = computerPlay();
        const playerFinalResult = playerChoice.toUpperCase();
        console.log(`${playerWins}  ${computerWins}`)
        if(playerFinalResult == null)
        return;
        display.textContent  = `Player Chose ${playerFinalResult}`;

        setTimeout(() => {
            display.textContent  =`Computer Chose ${computerFinalResult}`;
        }, 3000);

        
        if (playerFinalResult == computerFinalResult) {

            setTimeout(() => {
                display.textContent  =`It's a TIE`;
            }, 6000);
    
            ++ties;
        }
            else if (  (playerFinalResult == 'ROCK' && computerFinalResult == 'SCISSORS')
             || (playerFinalResult == 'PAPER' && computerFinalResult == 'ROCK') 
             || (playerFinalResult == 'SCISSORS' && computerFinalResult == 'PAPER') ) {
                 setTimeout(() => {
                    display.textContent  =`PLAYER wins`;
                 }, 6000);

            ++playerWins
            }
            else {
                setTimeout(() => {
                    display.textContent  =`COMPUTER wins`;
                }, 6000);
                ++computerWins;
            }
    

            setTimeout(() => {
                display.textContent  =`Hit "Replay" for another round`;
                replayButton.removeAttribute('disabled');
            }, 8000);            

            replayButton.addEventListener('click', function () {

                getChoice.forEach(enableElement => {
                    enableElement.removeAttribute("disabled");

                    
                });

                setTimeout(() => {
                    replayButton.setAttribute("disabled","disabled");
                    display.textContent="Please Choose a Weapon Below";
                }, 100);
            });

            }
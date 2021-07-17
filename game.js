let playerWins = 0, computerWins = 0, ties =0;
gameRound();
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
function playerPlay(){

        const rock = "rock", paper = "paper", scissors ="scissors";
        const playerChoice = prompt("What's your choice?");
        if(playerChoice == null)
        return;
        if (!isNaN(playerChoice) || playerChoice ==undefined || playerChoice == '') {
            alert('Invalid input');
            return playerPlay();
        }
        if ((playerChoice.toUpperCase() === rock.toUpperCase()) || (playerChoice.toUpperCase() === paper.toUpperCase()) || (playerChoice.toUpperCase() === scissors.toUpperCase()) ) {
            return playerChoice.toUpperCase();
        }

        else {
            alert("Enter Rock, Paper or Scissors...")
            return playerPlay();
        }

}

function gameRound (){
        const playerFinalResult = playerPlay();
        if(playerFinalResult == null)
        return;
        const computerFinalResult = computerPlay();
        alert(`Player Chose ${playerFinalResult} & Computer Chose ${computerFinalResult}`);
        if (playerFinalResult == computerFinalResult) {
            alert(`It's a TIE`);
            ++ties;
        }
            else if (  (playerFinalResult == 'ROCK' && computerFinalResult == 'SCISSORS') || (playerFinalResult == 'PAPER' && computerFinalResult == 'ROCK') || (playerFinalResult == 'SCISSORS' && computerFinalResult == 'PAPER') ) {
            alert (`PLAYER wins`);
            ++playerWins
            }
            else {
                alert (`COMPUTER wins`);
                ++computerWins;
            }
            let tryAgain = confirm(`Another round?`);
            if (tryAgain)
            return gameRound();
            else { 
                alert (`PLAYER won ${playerWins} time(s) and COMPUTER won ${computerWins} time(s) \nNumber of ties is ${ties}`);
                alert(`Goodbye`);
            }
}
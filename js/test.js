// business logic //
let rollTotal = 0
let playerOneTotal = 0
let playerTwoTotal = 0
let playerTurn = 1

function getRsndomIntInclusive(min, max){
    min = Math.ceil(1);
    max = Math.ceil(6);
    return Math.floor(Math.random() * (max - min + 1) + min); // the maximum is inclusive and the minimum is inclusive
}

function randomIntegerReturn() {
let randomNumber = getRsndomIntInclusive();
if (randomNumber !== 1){

rollTotal += randomNumber;

return rollTotal;
} else {
    rollTotal = 0
    return "You rolled a One"
};
}

function pushButton() {
    if (rollTotal >= 2 && playerTurn === 1) {
      playerOneTotal += rollTotal;
      rollTotal = 0;
      playerTurn = 2;
      console.log(playerTurn);
      checkFinalScore ();
    } else if (rollTotal >= 2 && playerTurn ===2 ) {
            playerTwoTotal += rollTotal;
            rollTotal = 0;  
            playerTurn = 1; 
            console.log(playerTurn);
            checkFinalScore ();
    } else {
        return "You have not rolled your dice yet!"
    }
}
function checkFinalScore () {
    if (playerOneTotal >= 20) {
        return "Player One Wins!" ||
        playerTwoTotal = 0;
        playerOneTotal = 0;||
    }
    else if (playerTwoTotal >=20){
        return "Player Two is the WINER!"
        playerOneTotal = 0;
        playerTwoTotal = 0;
    }
    
}    

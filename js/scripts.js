// business logic //
let rollTotal = 0
let playerOneTotal = 0

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
    if (rollTotal >= 2) {
      playerOneTotal += rollTotal;
      rollTotal = 0;
    } else {
        return "You have not rolled your dice yet!"
    }
}
if (rollTotal = 0) {
    playerTwoTotal += rollTotal;
}
/*function pushTotal() {
    if (rollTotal >= 2) {
        playerOneTotal += rollTotal;
        rollTotal = 0;
    }
}
}
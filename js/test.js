// business logic //
function Gameplay() {
    this.rollTotal = 0;
    this.playerOneTotal = 0;
    this.playerTwoTotal = 0;
    this.playerTurn = 1;
}


Gameplay.prototype.getRsndomIntInclusive = function(min, max){
    min = Math.ceil(1);
    max = Math.ceil(6);
    let mathInt = Math.floor(Math.random() * (max - min + 1) + min); // the maximum is inclusive and the minimum is inclusive
    console.log(mathInt);
    return mathInt
}

Gameplay.prototype.randomIntegerReturn = function() {
let randomNumber = this.getRsndomIntInclusive();
if (randomNumber !== 1) {
    console.log(this.rollTotal);
this.rollTotal += randomNumber;
return this.rollTotal;
} else {
    this.rollTotal = 0
    return "You rolled a One"
};
}
Gameplay.prototype.checkFinalScore = function() {
    if (this.playerOneTotal >= 5) {
        this.playerTwoTotal = 0;
        this.playerOneTotal = 0;
        return "Player One Wins!";
    }
    else if (Gameplay.prototype.playerTwoTotal >= 5) {
        this.playerOneTotal = 0;
        this.playerTwoTotal = 0;
        return "Player Two is the WINER!";
    }
}

Gameplay.prototype.pushButton = function() {
        if (this.rollTotal >= 2 && this.playerTurn === 1) {
            this.layerOneTotal += this.rollTotal;
            this.rollTotal = 0;
            this.playerTurn = 2;
          console.log("Player " + this.playerTurn);
          let checkFinal = checkFinalScore()
          return checkFinal;
        } else if (this.rollTotal >= 2 && this.playerTurn ===2 ) {
            this.playerTwoTotal += this.rollTotal;
            this.rollTotal = 0;  
            this.playerTurn = 1; 
            console.log("Player " + this.playerTurn);
            let checkFinal = checkFinalScore()
            return checkFinal;
        } else {
            return "You have not rolled your dice yet!"
        }
       
}  


//UI
window.onload = function(){

}
let pigGamePlay = new Gameplay();
 

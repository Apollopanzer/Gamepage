
    

function dice(){
    var dice1 =Math.floor(Math.random()*6)+1;
    var dice2 =Math.floor(Math.random()*6)+1;
    var totalDice = dice1+dice2;
    
   


if (totalDice == 7 ||  totalDice == 11 ){
     document.getElementById("diceOutput").innerHTML = "you rolled" + totalDice +". You win!";
} else if (totalDice == 2|| totalDice == 3|| totalDice == 12){
    document.getElementById("diceOutput").innerHTML = "you rolled" + totalDice +". You lose!";
} else {
  document.getElementById("diceOutput").innerHTML = "you rolled" + totalDice +". Roll again!";
}
}

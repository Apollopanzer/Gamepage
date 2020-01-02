function RPS(){
    

    
    var user = document.getElementById("userInput").value.toLowerCase();
      document.getElementById("userOutput").innerHTML="user chose " + user;
    var comp=Math.floor(Math.random()*3)+1;
    if (comp==1){
        comp="rock";
        
    }
    else if(comp==2){
        comp="paper";
    }
    
    else{
        comp="scissors";
    }
    document.getElementById("computerOutput").innerHTML="Computer chose " + comp;
    
    if(comp==user){
       document.getElementById("rpsOutput").innerHTML="it's a tie ";
         
    } else if ((user=="rock" && comp == "scissors") || (user=="paper" && comp == "rock") || (user=="scissors" && comp == "paper")){
          document.getElementById("rpsOutput").innerHTML="user wins! ";
    }else{
          document.getElementById("rpsOutput").innerHTML="comp wins! ";
    }
}

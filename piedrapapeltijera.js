var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

function compare(choice1, choice2){
  var result = ""
    if(choice1 === choice2){
        result = "The result is a tie!";}
        else if(choice1 === "rock"){
            if(choice2 === "scissors"){
                result = "rock wins"}
                else{ result = "paper wins"}
                
        }
           else if(choice1 === "paper"){
            if(choice2 === "rock"){
                result =  "paper wins"}
                else{ result = "scissors wins"}
                
        }
             else if(choice1 === "scissors"){
            if(choice2 === "rock"){
               result =  "rock wins"}
                else if(choice2 === "paper"){result =  "scissors wins";}
             
        }
            document.write(" user choose "+choice1+", computer choose  "+choice2+" and  "+result);
}
compare(userChoice,computerChoice);

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randonIdx = Math.floor(Math.random()*3);
    return options[randonIdx];
}

const drowGame = () =>{
console.log("Game is Drow Becouse You & Comp choice is same");
msg.innerText = `Game Drow..! Play Again`;
msg.style.backgroundColor="black";
}

const showWinner= (userWin, userChoice, compChoice) =>{
  if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
  console.log("You Win");
  msg.innerText =`You Win...! your ${userChoice} beats ${compChoice};`
  msg.style.backgroundColor="green";
  }else{
    compScore++;
    compScorepara.innerText=compScore;
    console.log("You Loose");
    msg.innerText=`You Loose...! ${compChoice} beats your ${userChoice};`
    msg.style.backgroundColor="red";
  }
}


const playGame=(userChoice) =>{
    console.log("User choice " + userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice " + compChoice);

    if(userChoice === compChoice){
        //drow game
        drowGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice ==="paper"?false:true;
        }else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin=compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
})


// first create 2 variable first one to track user and other of cpmputer
let userScore = 0;
let compScore = 0;
// access choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
  const options = ["rock","paper", "scissors"];  
  //rock,paper,scissors
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];

}
const drawGame = () => {
  // console.log("game was draw");
  msg.innerText = "Game Was Draw Play Again!";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice, compChoice ) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win")
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
  }
  else{
    // console.log("you loose");
    msg.innerText = `You lost! ${compChoice} beats Your ${userChoice} `;
    msg.style.backgroundColor ="red";
    compScore++;
    compScorePara.innerText = compScore;
  }
}





const playGame = (userChoice) =>{
    // console.log("user choice = " , userChoice);
    //generate comp choice ==> modular programming => breaking into functions
    const compChoice = genCompChoice();
    // console.log("comp choice = " , compChoice);

    if(userChoice===compChoice){
      //draw game
      drawGame();
    }
    else{
      let userWin = true;
      if(userChoice==="rock"){
        // compChoice ==> paper,scisoor
        userWin = compChoice === "paper"? false : true;
      }
      else if (userChoice==="paper"){
        // compChoice ==> rock,scisoor
        userWin = compChoice==="scissors" ? false : true;
      }
      else {
        // compChoice ==> paper,rock
        userWin = compChoice ==="rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
};

//adding event listner
choices.forEach((choice)=>{
  //console.log(choice);
  choice.addEventListener("click",()=>{
    //getting attributes
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});



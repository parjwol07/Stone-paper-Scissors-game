let userScore = [0];
let compScore = [0];

const  choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = ()=>{
    let option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Yellow"
        msg.style.color = "Black"
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You Lost! ${compChoice} beats your ${userChoice}`;
             msg.style.backgroundColor = "Red"
    }
}
const drawGame = () =>{
    msg.innerText = "Game was draw!Try again"
         msg.style.backgroundColor = "#081b31"
         msg.style.color = "white"
}
const playGame = (userChoice)=>{
    const compChoice =genCompChoice();
        //for Draw//
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
       if(userChoice === "rock"){
            //scissor,Paper//
            userWin = compChoice === "paper"? false: true;
        } else if(userChoice === "paper"){
            //rock ,scissor//
            userWin = compChoice === "scissor"? false : true;
        } else if (userChoice === "scissor"){
            //rock ,paper//
            userWin = compChoice === "rock"? false : true;

        }
        showWinner(userWin,userChoice,compChoice);

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});

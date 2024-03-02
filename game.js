let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#you");
const computerscorepara=document.querySelector("#computer");


const gencomputerchoice = () =>{
    let arr = ["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return arr[randomidx];
}


const showwin = (userwin,userchoice,computerchoice)=>{
    if(userwin){
        msg.innerHTML=`You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.background="green";
        userscorepara.innerText=userScore++;
        console.log("you win!");
        
    }
    else{
        msg.innerHTML=`You lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.background="red";
        computerscorepara.innerText=computerScore++;
        console.log("you loose!");
    }

}

const playgame = (userchoice) =>{
    console.log("user choice: ", userchoice);

const computerchoice = gencomputerchoice();
        console.log("computer choice: ", computerchoice);

        if(userchoice===computerchoice){
            msg.innerHTML="Game draw!";
            msg.style.background="#081b31";
            console.log("Game Draw");
            // alert("Game draw");
        }
        else{
            let userwin=true;
            if(userchoice==="rock"){
                userwin=computerchoice==="paper"?false:true;
            }else if(userchoice==="paper"){
                userwin=computerchoice==="scissor"?false:true;
            }else{
                userwin=computerchoice==="rock"?false:true;
            }
            showwin(userwin,userchoice,computerchoice);
        }
};



choices.forEach((choice) => {
choice.addEventListener("click",()=>{
    const userchoice= choice.getAttribute("id");
    playgame(userchoice);
});
});

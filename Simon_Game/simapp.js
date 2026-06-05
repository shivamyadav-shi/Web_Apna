let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=['yellow','red','green','blue'];
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    // console.log("Game started");
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
// alert("akssk");
function levelUp(){
    userseq=[];
    level++;
    h2.innerText =`Level ${level}`; 
    let ranIdx= Math.floor(Math.random()*3);
    let ranCol=btns[ranIdx];
    let ranBtn= document.querySelector(`.${ranCol}`);
    // console.log(ranBtn);
    // console.log(ranCol);
    // console.log(ranIdx);
    gameseq.push(ranCol);
    console.log(gameseq);
    gameFlash(ranBtn);
}
function checkAns(idx){
    // console.log("current level", level);
    // let idx = level-1;
    if(userseq[idx]== gameseq[idx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same value");
    } else{
        h2.innerHTML=`Game Over: Your score was <b> ${level} </b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor = 'white';
        },260);
        reset();
    }
}

function btnPress(){
    console.log("button was pressed",this);
    let btn =this;
    userFlash(btn);

    userCol = btn.getAttribute("id");
    console.log(userCol);
    userseq.push(userCol);
    checkAns(userseq.length-1);
}

let allbtn =  document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level = 0;
}
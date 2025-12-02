let colors =["blue","green","yellow","red"];
let level =0;
let ind =0;
let started = false;
let h3 = document.querySelector("h3")
let gameSeq =[];
let playerSeq=[];
let btn = document.querySelectorAll(".button");
document.addEventListener("keypress",function(){
if(started == false){
    started = true;
    game();
}
});

function bgchanger(element){
element.classList.add("flash");
setTimeout(function(){
    element.classList.remove("flash");
},500);
};

function userClick(){
    let btn = this;
    btn.classList.add("ani");
    setTimeout(function(){
        btn.classList.remove("ani");
    },500);
    playerSeq.push(btn.getAttribute("id"));
    console.log(playerSeq);
    check(playerSeq.length-1);
}
function game(){
    playerSeq=[];
    level++;
  h3.innerText=`Level ${level}`; 
  let radind = Math.floor(Math.random()*4);
 let randcolor = colors[radind];
 gameSeq.push(randcolor);
 console.log(randcolor);
 let randelement = document.querySelector(`.${randcolor}`);
 bgchanger(randelement);

} 

for(btns of btn){
    btns.addEventListener("click",userClick);
}

function check(idx){
   if(playerSeq[idx] == gameSeq[idx]){
    if(playerSeq.length== gameSeq.length){
        setTimeout(game,1000);
    }
   } 
   else{
    h3.innerText = "Game Over , Press any key to restart ";
    started = false;
    h3.innerText=`Your High Source was till level ${level}, better luck next time
      Press any key to start again`;
    level=0;
    gameSeq=[];
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },500);
   };
    
}
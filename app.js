const game = document.getElementById("game");
const center = document.getElementById("center");
const centerText = document.getElementById("centerText");
const c0 = document.getElementById("c0");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const mask = document.getElementById("mask");
const square = document.getElementsByClassName("square");
let gameHistory = [];
let gamePlayer = [];
let counter = 0;
let isText = true;
let numGame = 0;
let points = 0;
let canPlayGame;
center.addEventListener("click", 
    function(){
        if(isText == true){
            playGame();
        }   
});
c0.addEventListener("click", function(){clic(0)});
c1.addEventListener("click", function(){clic(1)});
c2.addEventListener("click", function(){clic(2)});
c3.addEventListener("click", function(){clic(3)});
function clic(e){
    let sq = document.getElementById('c'+e);
    sq.className += " fullColor";
    timerValidate(e);
    pushPlayer(e);
}
function start(){
    //centerText.innerHTML = "Start";
}
function playGame(){
    centerText.innerHTML= "0";
    isText = false;
    mask.className += " display";
    randomN();
}
function randomN(){
    let random = Math.floor(Math.random()*4);
    gameHistory.push(random);
    numGame = numGame+1;
    counter=counter+1;
    advance();
}
function advance(valClic){
    initialVal= counter-1;
    color(initialVal);
}
function color(col){
    initialVal= gameHistory[col];
    let chose = document.getElementById('c'+initialVal);
    chose.className += " fullColor";
    let time= setTimeout (timerValidate, 1000, initialVal);
}
function timerValidate(valDiv){
    let clearColor = document.getElementById('c'+valDiv);
    clearColor.classList.remove("fullColor");
}
function pushPlayer(number){
    gamePlayer.push(number);
    for(i=0; i<=counter-1; i++){
        gameVS= gameHistory[i];
        playerVS = gamePlayer[i];
        if(gameVS == playerVS){
            console.log("continua");
            mask.classList.remove("display");
            points = points+1;
            centerText.innerHTML= points;
        }else{
            console.log("lose");
            mask.classList.remove("display");
        }
    }
}
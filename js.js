// Modal Windows
let userName = document.getElementById("user-text");
let closeBtn = document.getElementById("closeBtn");
let inputReg = document.getElementById("input-registration");
let regBtn = document.getElementById("btn-registration");

let subBtn = document.getElementById("email-btn");
let subInput = document.getElementById("email-input");
let subModalWindow = document.getElementById("modal-window-section-second");
let closeBtnSecond = document.getElementById("closeBtnSecond");
let windowSection = document.getElementById("modal-window-section-first");

const checkbox = document.getElementById("checkbox");

subBtn.addEventListener("click", function(){
        subModalWindow.style.display = "flex";
});

closeBtnSecond.addEventListener("click", function(){
    subModalWindow.style.display = "none";
});

document.addEventListener("keydown", event => {
    console.log("Keydown: ", event.code);
    if(event.code == "Escape"){
        subModalWindow.style.display = "none";
        windowSection.style.display = "none";
    }
});

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
})

regBtn.addEventListener("click", function(){
    userName.innerHTML = inputReg.value;
    closeBtn.parentElement.style.display = "none";
});

closeBtn.addEventListener("click", function() {
    closeBtn.parentElement.style.display = "none";
});
// Modal Windows

// Year
let yearInput = document.getElementById("input-year");
let yearBtn = document.getElementById("btn-year");
let yearResult = document.getElementById("year-result");

yearBtn.addEventListener("click", function(){
    if(yearInput.value % 4 == 0){
        yearResult.style.color = "green";
        yearResult.innerHTML = "Ви народилися у високосний рік!";
    }else{
        yearResult.style.color = "red";
        yearResult.innerHTML = "Ви народилися не у високосний рік!";
    }

    if(yearInput.value === "" && yearBtn){
        yearResult.innerHTML = "Введіть рік!";
        yearResult.style.color = "red";
    }

    if(Number.isInteger(+yearInput.value) && yearBtn){
        console.log("number");
    }else{
        yearResult.innerHTML = "Введіть рік!";
        yearResult.style.color = "red";
        console.log("not number");
    }
});
// /Year

// RandomNumber
let digitInput = document.getElementById("input-digit");
let digitBtn = document.getElementById("btn-digit");
let digitResult = document.getElementById("digit-result");


digitBtn.addEventListener("click", function(){
    let randNumber = Math.floor(Math.random() * 10);
    if(randNumber == digitInput.value){
        digitResult.style.color = "green";
        digitResult.innerHTML = "Ви вгадали! " + randNumber;
    } else{
        digitResult.style.color = "red";
        digitResult.innerHTML = "Ви програли, комп’ютер загадав число " + randNumber;
    }

    if(digitInput.value < 0 || digitInput.value > 10){
        digitResult.innerHTML = "Введіть число від 1 до 10!";
        digitResult.style.color = "red";
    }

    if(Number.isInteger(+digitInput.value) && digitBtn){
        console.log("number");
    }else{
        digitResult.innerHTML = "Введіть число!";
        digitResult.style.color = "red";
        console.log("not number");
    }
});
// /RandomNumber

// MaxNumber
const inputMaxFirst = document.getElementById("max-number-first-input");
const inputMaxSecond = document.getElementById("max-number-second-input");
const inputMaxThird = document.getElementById("max-number-third-input");
const MaxNumberText = document.getElementById("max-number");
const MaxNumberBtn = document.getElementById("check-btn");

MaxNumberBtn.addEventListener("click", function(){
if(+inputMaxFirst.value > +inputMaxSecond.value){
    MaxNumberText.innerHTML = inputMaxFirst.value;
}
if (+inputMaxSecond.value > +inputMaxFirst.value){
    MaxNumberText.innerHTML = inputMaxSecond.value;
}
if (+inputMaxFirst.value > +inputMaxThird.value){
    MaxNumberText.innerHTML = inputMaxFirst.value;
}
if (+inputMaxThird.value > +inputMaxFirst.value){
    MaxNumberText.innerHTML = inputMaxThird.value;
}
if (+inputMaxSecond.value > +inputMaxThird.value){
    MaxNumberText.innerHTML = inputMaxSecond.value;
}
if (+inputMaxThird.value > +inputMaxSecond.value){
    MaxNumberText.innerHTML = inputMaxThird.value;
}
// if (inputMaxThird.value == inputMaxSecond.value){
//     MaxNumberText.innerHTML = inputMaxThird.value || inputMaxSecond;
// }
// if (inputMaxThird.value == inputMaxFirst.value){
//     MaxNumberText.innerHTML = inputMaxThird.value || inputMaxSecond;
// }

if (inputMaxThird.value == Text || inputMaxSecond.value == Text || inputMaxFirst.value == Text){
    MaxNumberText.innerHTML = "Введіть число";
}
});

// /MaxNumber

// Slider

document.addEventListener("DOMContentLoaded", checkPosition);

let offset = 0;
const sliderLine = document.querySelector('.my-pictures-section');

document.querySelector('#arrow-right').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    checkPosition()
});

document.querySelector('#arrow-left').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
    checkPosition()
});


function checkPosition(){
    if(offset == 0){
        document.getElementById("first").classList.add("active-link");
        document.getElementById("first").classList.remove("non-active-link");
    }else{
        document.getElementById("first").classList.remove("active-link");
        document.getElementById("first").classList.add("non-active-link");
    }

    if(offset == 256){
        document.getElementById("second").classList.add("active-link");
        document.getElementById("second").classList.remove("non-active-link");
    }else{
        document.getElementById("second").classList.remove("active-link");
        document.getElementById("second").classList.add("non-active-link");
    }

    if(offset == 512){
        document.getElementById("third").classList.add("active-link");
        document.getElementById("third").classList.remove("non-active-link");
    }else{
        document.getElementById("third").classList.remove("active-link");
        document.getElementById("third").classList.add("non-active-link");
    }

    if(offset == 768){
        document.getElementById("fourth").classList.add("active-link");
        document.getElementById("fourth").classList.remove("non-active-link");
    }else{
        document.getElementById("fourth").classList.remove("active-link");
        document.getElementById("fourth").classList.add("non-active-link");
    }
}


// /Slider

// Rock Paper Scissors Game
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsBtn = document.getElementById("rps-btn");
const compPoints = document.getElementById("comp-points-value");
const playerPoints = document.getElementById("player-points-value");
const ResultText = document.getElementById("rps-result");

let player;

rock.addEventListener("click", function(){
    player = "Rock";
    console.log(player);
});

paper.addEventListener("click", function(){
    player = "Paper";
    console.log(player);
});

scissors.addEventListener("click", function(){
    player = "Scissors";
    console.log(player);
});

function computerChoice(){
    var computerChoices = Math.floor(Math.random() * 3);
    if (computerChoices == 0){
        computerChoices = "Rock";
        console.log(computerChoices);
    }
    else if(computerChoices == 1){
        computerChoices = "Paper";
        console.log(computerChoices);
    }
    else if(computerChoices == 2){
        computerChoices = "Scissors";
        console.log(computerChoices);
    }
    if(player == "Rock" && computerChoices == "Paper"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = compPoints.ariaValueText;
        ResultText.innerText = "Ви програли";
        ResultText.style.color = "red"
    }
    else if(computerChoices == "Rock" && player == "Paper"){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = playerPoints.ariaValueText;
        ResultText.innerText = "Ви виграли!";
        ResultText.style.color = "green"
    }
    else if(player == "Paper" && computerChoices == "Scissors"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = compPoints.ariaValueText;
        ResultText.innerText = "Ви програли";
        ResultText.style.color = "red"
    }
    else if(computerChoices == "Paper" && player == "Scissors"){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = playerPoints.ariaValueText;
        ResultText.innerText = "Ви виграли!";
        ResultText.style.color = "green"
    }
    else if(player == "Rock" && computerChoices == "Scissors"){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = playerPoints.ariaValueText;
        ResultText.innerText = "Ви виграли!";
        ResultText.style.color = "green"
    }
    else if(computerChoices == "Rock" && player == "Scissors"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = compPoints.ariaValueText;
        ResultText.innerText = "Ви програли";
        ResultText.style.color = "red"
    }
    else if(computerChoices == player){
        ResultText.innerText = "Нічия!";
        ResultText.style.color = "grey"
    }
}

rpsBtn.addEventListener("click", computerChoice);
// /Rock Paper Scissors Game

// Calculator

const firstDigitInput = document.getElementById("digit-first-input");
const secondDigitInput = document.getElementById("digit-second-input");
const resultDigitInput = document.getElementById("digit-result-input");
const equalBtn = document.getElementById("equal");
const PlusBtn = document.getElementById("plus");
const SubstractBtn = document.getElementById("substract");
const MultiplyBtn = document.getElementById("multiply");
const DivisionBtn = document.getElementById("division");

let firstInputValue = firstDigitInput.value;
let secondInputValue = secondDigitInput.value;

function plus(){
        firstInputValue = +firstDigitInput.value;
        secondInputValue = +secondDigitInput.value;
        resultDigitInput.value = firstInputValue + secondInputValue;
        console.log(resultDigitInput.value);
}

function substract(){
    firstInputValue = +firstDigitInput.value;
    secondInputValue = +secondDigitInput.value;
    resultDigitInput.value = firstInputValue - secondInputValue;
    console.log(resultDigitInput.value);
}

function multiply(){
    firstInputValue = +firstDigitInput.value;
    secondInputValue = +secondDigitInput.value;
    resultDigitInput.value = firstInputValue * secondInputValue;
    console.log(resultDigitInput.value);
}

function division(){
    firstInputValue = +firstDigitInput.value;
    secondInputValue = +secondDigitInput.value;
    resultDigitInput.value = firstInputValue / secondInputValue;
    console.log(resultDigitInput.value);
}

if(Number.isInteger(+firstDigitInput.value || +secondDigitInput.value) && equalBtn){
    console.log("number");
}else{
    console.log("not number");
}

DivisionBtn.addEventListener("click", division);
MultiplyBtn.addEventListener("click", multiply);
SubstractBtn.addEventListener("click", substract);
PlusBtn.addEventListener("click", plus);
// equalBtn.addEventListener("click", equal);


// /Calculator


// Time Calculator 

const timeBtn = document.getElementById("btn-time");
const outputTextBtn = document.getElementById("time-convertor-text");

timeBtn.addEventListener("click", function(){
    let minutes = +document.getElementById("input-time").value;

    const day = Math.floor(minutes/(60*24));
    minutes = minutes%(60*24);
    let hours = Math.floor(minutes/60);
    if (hours < 10){
        hours = "0" + hours;
    }
    minutes = minutes%60
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    outputTextBtn.innerText = `${day} дн. ${hours}:${minutes}:00`;

    if(Number.isInteger(+document.getElementById("input-time").value) && equalBtn){
        console.log("number");
    }else{
        alert("Введіть число в хв!")
        console.log("not number");
    }
});

// /Time Calculator

// Dino Game

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const stopBtn = document.getElementById("stop-btn");
const continueBtn = document.getElementById("cont-btn");

continueBtn.addEventListener("click", function(){
    cactus.style.animation = "cactusMove 2s infinite linear";
});

stopBtn.addEventListener("click", function(){
    cactus.style.animation = "none";
});

if(windowSection.style.display = "flex"){
    cactus.style.animation = "none";
}

document.addEventListener("keydown", function(){
    jump();
});

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 1000);
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game Over");
    }
}, 10);

// /Dino Game

// Football

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let ball = new Image();

canvas.addEventListener("click", function(event){
    var mouseX = event.pageX;
    var mouseY = event.clientY;
    var block = document.querySelector("#canvas");
    var blockRect = block.getBoundingClientRect();
    var blockX = blockRect.left;
    var blockY = blockRect.top;
    mouseXinBlock = mouseX - blockX - 25;
    mouseYinBlock = mouseY - blockY - 25;
    // console.log(mouseXinBlock);
    // console.log(mouseYinBlock);
});

var mouseXinBlock = 0;
var mouseYinBlock = 0;

ball.src = "./img/ball.png";
canvas.width = 720;
canvas.height = 220;

function draw(){
    if(mouseXinBlock > 0 && mouseXinBlock < 670 && mouseYinBlock > 0 && mouseYinBlock < 175){
        context.fillStyle = "green";
        context.fillRect(0, 0, 720, 220);
        context.drawImage(ball, mouseXinBlock, mouseYinBlock);
    }
}
setInterval(draw, 20);
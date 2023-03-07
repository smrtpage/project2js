let yearInput = document.getElementById("input-year");
let yearBtn = document.getElementById("btn-year");
let yearResult = document.getElementById("year-result");

let digitInput = document.getElementById("input-digit");
let digitBtn = document.getElementById("btn-digit");
let digitResult = document.getElementById("digit-result");

let userName = document.getElementById("user-text");
let closeBtn = document.getElementById("closeBtn");
let inputReg = document.getElementById("input-registration");
let regBtn = document.getElementById("btn-registration");

let subBtn = document.getElementById("email-btn");
let subInput = document.getElementById("email-input");
let subModalWindow = document.getElementById("modal-window-section-second");
let closeBtnSecond = document.getElementById("closeBtnSecond");

const checkbox = document.getElementById("checkbox");

subBtn.addEventListener("click", function(){
        subModalWindow.style.display = "flex";
});

closeBtnSecond.addEventListener("click", function(){
    subModalWindow.style.display = "none";
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
});

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
});



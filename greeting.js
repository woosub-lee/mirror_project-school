const Doc1 = document.querySelector(".TOP_RIGHT");
const form = Doc1.querySelector(".form");
const input = form.querySelector("input");
const greeting = Doc1.querySelector(".greeting");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintgreeting(currentValue);
    saveName(currentValue);
}
function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintgreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    }else{
        paintgreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();
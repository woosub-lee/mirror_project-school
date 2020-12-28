function greetModule(location, userName){
    const displayLocation_GrMo = location;
    const greetContainer = document.querySelector(displayLocation_GrMo);
    const grMessage = document.createElement("h3");
    function printUser(){
        grMessage.innerText = `Hello, ${userName}!`
    }
    function init(){
        printUser();
        greetContainer.appendChild(grMessage);
    }
    init();
}
module.exports = greetModule;
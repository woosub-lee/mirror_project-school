const dateModule = require("./module/date");
const coronaModule = require("./module/corona");
const weatherModule = require("./module/weather");
const clockModule = require("./module/clock");
const subwayModule = require("./module/subway");
const menuModule = require("./module/menu");
const melonModule = require("./module/melon");
const greetModule = require("./module/greeting");
const offModule = require("./turnOff");
const fs = require('fs');
let pastdown = "0";
let paston = "0";
function turnOn(){
    dateModule(".COM1");
    clockModule(".COM2");
    weatherModule(".COM3");
    coronaModule(".COM4_1", ".COM4_2", ".COM4_TITLE");
    menuModule(".CUSTOM2"); 
    melonModule(".CUSTOM1");
    greetModule(".GREETUSR", "YONGJIN");
}
function fileRead(){ 
    fs.readFile('words.json', 'utf8', (error, jsonFile) =>{
            const json = JSON.parse(jsonFile);
            if(json.shot_down === "1" && pastdown === "0"){
                offModule();
            }
            if(json.turn_on === "1" && paston ==="0"){
                turnOn();
            }
            pastdown=json.shot_down;
            paston=json.turn_on;
        }
    );
}
function init(){
    setInterval(fileRead,5000);
}
init();
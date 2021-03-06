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
const Custom1 = document.querySelector(".CUSTOM1");
const Custom2 = document.querySelector(".CUSTOM2");
const Greetusr = document.querySelector(".GREETUSR");
let pastdown = "0";
let paston = "0";
let user = "";
let display_condition = true;
const turnOn = async () =>{
    dateModule(".COM1");
    clockModule(".COM2");
    weatherModule(".COM3");
    coronaModule(".COM4_1", ".COM4_2", ".COM4_TITLE");
    greetModule(".GREETUSR", user);
}
function fileRead(){ 
    fs.readFile('words.json', 'utf8', (error, jsonFile) =>{
            const json = JSON.parse(jsonFile);
            if(json.shot_down === "1" && pastdown === "0"){
                offModule();
		display_condition = false;
            }
            if(json.turn_on === "1" && paston ==="0"){
                turnOn();
		display_condition = true;
            }
            pastdown=json.shot_down;
            paston=json.turn_on;
        }
    );
    fs.readFile('/home/pi/Camera/fdCam/user.json', 'utf8', (error, jsonFile) =>{
        const userJson = JSON.parse(jsonFile);
        user = userJson.Current_USER;
    });
    fs.readFile('userData.json', 'utf8', (error, jsonFile) =>{
        const DataJson = JSON.parse(jsonFile);
	if(display_condition){
            Greetusr.removeChild(Greetusr.firstChild);
            while(Custom1.hasChildNodes()){
                Custom1.removeChild(Custom1.firstChild);
            }
            while(Custom2.hasChildNodes()){
                Custom2.removeChild(Custom2.firstChild);
            }
            greetModule(".GREETUSR", user);
	}
        if(DataJson.hyeonwoo.name === user && display_condition){
            if(DataJson.hyeonwoo.melon === "0"){
                menuModule(".CUSTOM1");
                subwayModule(".CUSTOM2");
            }
            else if(DataJson.hyeonwoo.menu === "0"){
                melonModule(".CUSTOM1");
                subwayModule(".CUSTOM2");
            }
            else{
                melonModule(".CUSTOM1");
                menuModule(".CUSTOM2");
            }
        }
	if(DataJson.youngjin.name === user && display_condition){
            if(DataJson.youngjin.melon === "0"){
                menuModule(".CUSTOM1");
                subwayModule(".CUSTOM2");
            }
            else if(DataJson.youngjin.menu === "0"){
                melonModule(".CUSTOM1");
                subwayModule(".CUSTOM2");
            }
            else{
                melonModule(".CUSTOM1");
                menuModule(".CUSTOM2");
            }
        }
        
    });
}
function init(){
    setInterval(fileRead,5000);
}
init();
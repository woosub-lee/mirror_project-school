const top_left = document.querySelector(".TOP_LEFT");
const top_middle = document.querySelector(".TOP_MIDDLE");
const top_right = document.querySelector(".TOP_RIGHT");
const center_left = document.querySelector(".CENTER_LEFT");
const center_middle = document.querySelector(".CENTER_MIDDLE");
const center_right = document.querySelector(".CENTER_RIGHT");
const bottom_left = document.querySelector(".BOTTOM_LEFT");
const bottom_middle = document.querySelector(".BOTTOM_MIDDLE");
const bottom_right = document.querySelector(".BOTTOM_RIGHT");
function turnoff(){
    while(top_left.hasChildNodes()){
        top_left.removeChild(top_left.firstChild);
    }
    while(top_middle.hasChildNodes()){
        top_middle.removeChild(top_middle.firstChild);
    }
    while(top_right.hasChildNodes()){
        top_right.removeChild(top_right.firstChild);
    }
    while(center_left.hasChildNodes()){
        center_left.removeChild(center_left.firstChild);
    }
    while(center_middle.hasChildNodes()){
        center_middle.removeChild(center_middle.firstChild);
    }
    while(center_right.hasChildNodes()){
        center_right.removeChild(center_right.firstChild);
    }
    while(bottom_left.hasChildNodes()){
        bottom_left.removeChild(bottom_left.firstChild);
    }
    while(bottom_middle.hasChildNodes()){
        bottom_middle.removeChild(bottom_middle.firstChild);
    }
    while(bottom_right.hasChildNodes()){
        bottom_right.removeChild(bottom_right.firstChild);
    }
}
function init(){
    setTimeout(turnoff(),20000);
    console.log("a");
}
//init();
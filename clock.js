const clockContainer = document.querySelector(".TOP_MIDDLE");
const clockTitle = clockContainer.querySelector(".contents");
function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour
        }:${minute < 10 ? `0${minute}` : minute
        }:${second < 10 ? `0${second}` : second}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();
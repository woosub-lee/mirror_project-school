const clockContainer = document.querySelector(".TOP_MIDDLE");
const clockTitle = document.createElement("p");
let year = 0;
let month = 0;
let date = 0;
let day = 0;
let day_han = "";
const day_type = {
    Hangul_text: [
        {text: "일요일"},
        {text: "월요일"},
        {text: "화요일"},
        {text: "수요일"},
        {text: "목요일"},
        {text: "금요일"},
        {text: "토요일"}  
    ]
};
function getTime(){
    const Data_date = new Date();
    year = Data_date.getFullYear();
    month = Data_date.getMonth()+1;
    date = Data_date.getDate();
    day = Data_date.getDay();
    const minute = Data_date.getMinutes();
    const hour = Data_date.getHours();
    const second = Data_date.getSeconds();
    day_han = day_type.Hangul_text[day].text;
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour
        }:${minute < 10 ? `0${minute}` : minute
        }:${second < 10 ? `0${second}` : second}`;
}
function init(){
    const dayTitle = document.createElement("p");
    clockContainer.appendChild(dayTitle);
    clockContainer.appendChild(clockTitle);
    getTime();
    setInterval(getTime,1000);
    dayTitle.innerText = `${year}년 ${month}월 ${date}일 ${day_han}`;
}
init();
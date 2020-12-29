function clockModule(location){
    const displayLocation_ClMo = location;
    const clockContainer = document.querySelector(displayLocation_ClMo);
    const clockHour = document.createElement("h1");
    const clockMinute = document.createElement("h1");
    function printTime(){
        const Data_date = new Date();
        const minute = Data_date.getMinutes();
        const hour = Data_date.getHours();
        clockHour.innerText = `${hour < 10 ? `0${hour}` : hour}`;
        clockMinute.innerText = `${minute < 10 ? `0${minute}` : minute}`;
    }
    function init(){
        clockContainer.appendChild(clockHour);
        clockContainer.appendChild(clockMinute);
        clockHour.id = "CL_HOUR";
        clockMinute.id = "CL_MIN";
        printTime();
        setInterval(printTime,1000);
    }
    init();
}
module.exports = clockModule;
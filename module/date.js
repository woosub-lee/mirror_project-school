function dateModule(location){
    const displayLocation_DaMo = location;
    const dateContainer = document.querySelector(displayLocation_DaMo);
    const dateHan = document.createElement("h1");
    const dayHan = document.createElement("h1");
    let year = 0;
    let month = 0;
    let date = 0;
    let day = 0;
    let day_han = "";
    const Data_date1 = new Date();
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
    function printDate(){
        year = Data_date1.getFullYear();
        month = Data_date1.getMonth()+1;
        date = Data_date1.getDate();
        day = Data_date1.getDay();
        day_han = day_type.Hangul_text[day].text;
        dateHan.innerText = `${year}년 ${month}월 ${date}일`;
        dayHan.innerText = day_han;
        dateContainer.appendChild(dateHan);
        dateContainer.appendChild(dayHan);
    }
    function init(){
        printDate();
    }
    init();
}
module.exports = dateModule;
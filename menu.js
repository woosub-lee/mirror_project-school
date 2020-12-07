const Breakfast = document.querySelector(".breakfast");
const Lunch = document.querySelector(".lunch");
const Dinner = document.querySelector(".dinner");
function printMenus(year,month,date,allergy){
    fetch(
        `https://schoolmenukr.ml/api/high/E100000276?&year=${year}&month=${month}&date=${date}&allergy=${allergy}`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp1 = JSON.stringify(json.menu);
        const temp2 = temp1.substring(1,temp1.length-1);
        const Menu_data = JSON.parse(temp2);
        const breakfast = JSON.stringify(Menu_data.breakfast);
        const lunch = JSON.stringify(Menu_data.lunch);
        const dinner = JSON.stringify(Menu_data.dinner);
        Breakfast.innerText = `아침:${breakfast}`;
        Lunch.innerText = `점심:${lunch}`;
        Dinner.innerText = `저녁:${dinner}`;
    })
}
function getDate(){
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth()+1;
    const date = data.getDate()+1;
    const allergy = "hidden";
    const dateObj = {
        year,
        month,
        date,
        allergy
    };
    printMenus(year,month,date,allergy);
}
function init(){
    getDate();
}
init();
function menuModule(location)
    const displayLocation_MeMo = location;
    const Breakfast = document.createElement("p");
    const Lunch = document.createElement("p");
    const Dinner = document.createElement("p");
    const menuContainer = document.querySelector(displayLocation_MeMo);
    function printMenus(year,month,date,allergy){
        fetch(
            `https://schoolmenukr.ml/api/high/E100000276?&year=${year}&month=${month}&date=${date}&allergy=${allergy}`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temp = JSON.stringify(json.menu[0])
            const Menu_data = JSON.parse(temp);
            let breakfast = JSON.stringify(Menu_data.breakfast);
            let lunch = JSON.stringify(Menu_data.lunch);
            let dinner = JSON.stringify(Menu_data.dinner);
            breakfast = breakfast.substring(1,breakfast.length-1);
            lunch = lunch.substring(1,lunch.length-1);
            dinner = dinner.substring(1,dinner.length-1);
            breakfast = breakfast === "" ? " 아침 없음" : breakfast;
            lunch = lunch === "" ? " 점심 없음" : lunch;
            dinner = dinner === "" ? " 저녁 없음" : dinner; 
            breakfast = breakfast.replaceAll("\"","");
            lunch = lunch.replaceAll("\"","");
            dinner = dinner.replaceAll("\"","");
            Breakfast.innerText = `아침:${breakfast}`;
            Lunch.innerText = `점심:${lunch}`;
            Dinner.innerText = `저녁:${dinner}`;
            menuContainer.appendChild(Breakfast);
            menuContainer.appendChild(Lunch);
            menuContainer.appendChild(Dinner);
        })
    }
    function getDate(){
        const data = new Date();
        const year = data.getFullYear();
        const month = data.getMonth()+1;
        const date = data.getHours()>18 ? data.getDate()+1 : data.getDate();
        const allergy = "hidden";
        printMenus(year,month,date,allergy);
    }
    function init(){
        getDate();
    }
    init();
}
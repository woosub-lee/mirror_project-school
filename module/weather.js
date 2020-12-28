function weatherModule(location){
    const displayLocation_WeMo = location;
    const weatherContainer = document.querySelector(displayLocation_WeMo);
    const weather = document.createElement("h1");
    const API_KEY = "1861a887801317952ed7216aaeacdcd9";
    function printWeather(){
        const lat = "37.4115037";
        const lon = "126.6691553";
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${place}  ${temperature}℃`;
            weatherContainer.appendChild(weather);
        })
    }
    function init(){
        printWeather();
    }
    init();
}
module.exports = weatherModule;
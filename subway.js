function subwayModule(location){
    const displayLocation_SuMo = location;
    const subwayContainer = document.querySelector(displayLocation_SuMo);
    const statSt = document.createElement("p");
    const lineNm = document.createElement("p");
    const ArriveSt = document.createElement("p");
    function printSubway(){
        fetch(
            'http://swopenapi.seoul.go.kr/api/subway/774b6f7549676b733130325a6f637148/json/realtimeStationArrival/0/1/%EC%A0%9C%EB%AC%BC%ED%8F%AC'
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const statnNm = json.realtimeArrivalList[0].statnNm;
            let trainLineNm = json.realtimeArrivalList[0].trainLineNm;
            const arvlMsg = json.realtimeArrivalList[0].arvlMsg2;
            trainLineNm = trainLineNm.indexOf("[") === -1 ? trainLineNm : trainLineNm.replaceAll("[","");
            trainLineNm = trainLineNm.indexOf("]") === -1 ? trainLineNm : trainLineNm.replaceAll("]","");
            statSt.innerText = `${statnNm}역`;
            lineNm.innerText = `${trainLineNm}`;
            ArriveSt.innerText = `${arvlMsg}`;
            subwayContainer.appendChild(statSt);
            subwayContainer.appendChild(lineNm);
            subwayContainer.appendChild(ArriveSt);
        })
    }
    function init(){
        printSubway();
    }
    init();
}
module.exports = subwayModule;
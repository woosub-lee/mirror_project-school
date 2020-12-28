function coronaModule(locationCo, locationLo){
    const displayLocation_CoLoMo = locationLo;
    const virusLoContainer = document.querySelector(displayLocation_CoLoMo);
    let displayLocation_CoCoMo = locationCo;
    const virusCoContainer = document.querySelector(displayLocation_CoCoMo);
    const Loca_Name = document.createElement("p");
    const TotalCaseLo = document.createElement("p");
    const TotalDeathLo = document.createElement("p");
    const TotalRecoveredLo = document.createElement("p");
    const TotalTodayLo = document.createElement("p");
    const Coun_Name = document.createElement("p");
    const TotalCase = document.createElement("p");
    const TotalDeath = document.createElement("p");
    const TotalRecovered = document.createElement("p");
    const TotalToday = document.createElement("p");
    function printCorona(){
        fetch(
            `https://api.corona-19.kr/korea/country/new/?serviceKey=c6ef53a017cbdc4d7d00d0a8c8a26852b`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const loName = json.incheon.countryName;
            const toCase = json.incheon.totalCase;
            const toDeath = json.incheon.death;
            const toRecover = json.incheon.recovered;
            const toToday = json.incheon.newCase;
            const CoName = json.korea.countryName;
            const toCoCase = json.korea.totalCase;
            const toCoDeath = json.korea.death;
            const toCoRecover = json.korea.recovered;
            const toCoToday = json.korea.newCase;
            Coun_Name.innerText = `${CoName}`
            TotalCase.innerText = `총 확진자: ${toCoCase}`;
            TotalDeath.innerText = `총 사망자: ${toCoDeath}`;
            TotalRecovered.innerText = `총 완치자: ${toCoRecover}`;
            TotalToday.innerText = `하루 확진자: ${toCoToday}`;
            Loca_Name.innerText = `${loName}`; 
            TotalCaseLo.innerText = `총 확진자: ${toCase}`;
            TotalDeathLo.innerText = `총 사망자: ${toDeath}`;
            TotalRecoveredLo.innerText = `총 완치자: ${toRecover}`;
            TotalTodayLo.innerText = `하루 확진자: ${toToday}`;
            virusCoContainer.appendChild(Coun_Name);
            virusCoContainer.appendChild(TotalCase);
            virusCoContainer.appendChild(TotalDeath);
            virusCoContainer.appendChild(TotalRecovered);
            virusCoContainer.appendChild(TotalToday);
            virusLoContainer.appendChild(Loca_Name);
            virusLoContainer.appendChild(TotalCaseLo);
            virusLoContainer.appendChild(TotalDeathLo);
            virusLoContainer.appendChild(TotalRecoveredLo);
            virusLoContainer.appendChild(TotalTodayLo);
        })
    }
    function init(){
        printCorona();
    }
    init(); 
}
module.exports = coronaModule;
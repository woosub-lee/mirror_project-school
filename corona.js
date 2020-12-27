let displayLocation_CoMo = ".TOP_LEFT";
const virusContainer = document.querySelector(displayLocation_CoMo);
const totalCase = document.createElement("p");
const totalDeath = document.createElement("p");
const totalRecovered = document.createElement("p");
const localCase = document.createElement("p");
const localDeath = document.createElement("p");
const localRecovered = document.createElement("p");
const localNew = document.createElement("p");
function printTotal(){
    fetch(
        `https://api.corona-19.kr/korea/?serviceKey=c6ef53a017cbdc4d7d00d0a8c8a26852b`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const toCase = json.totalCase;
        const toDeath = json.totalDeath;
        const toRecover = json.totalRecovered;
        console.log(json.totalCase);
        console.log(json);
        totalCase.innerText = `총 확진자: ${toCase}`;
        totalDeath.innerText = `총 사망자: ${toDeath}`;
        totalRecovered.innerText = `총 완치자: ${toRecover}`;
        virusContainer.appendChild(totalCase);
        virusContainer.appendChild(totalDeath);
        virusContainer.appendChild(totalRecovered);
    })
}

function init(){
    printTotal();
}
init();
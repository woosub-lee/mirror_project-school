function offModule(){
    const com1 = document.querySelector(".COM1");
    const com2 = document.querySelector(".COM2");
    const com3 = document.querySelector(".COM3");
    const com4_ti = document.querySelector(".COM4_TITLE"); 
    const com4_1 = document.querySelector(".COM4_1");
    const com4_2 = document.querySelector(".COM4_2");
    const custom1 = document.querySelector(".CUSTOM1")
    const custom2 = document.querySelector(".CUSTOM2");
    const greetusr = document.querySelector(".GREETUSR");
    function turnoff(){
        while(com1.hasChildNodes()){
            com1.removeChild(com1.firstChild);
        }
        while(com2.hasChildNodes()){
            com2.removeChild(com2.firstChild);
        }
        while(com3.hasChildNodes()){
            com3.removeChild(com3.firstChild);
        }
        while(com4_ti.hasChildNodes()){
            com4_ti.removeChild(com4_ti.firstChild);
        }
        while(com4_1.hasChildNodes()){
            com4_1.removeChild(com4_1.firstChild);
        }
        while(com4_2.hasChildNodes()){
            com4_2.removeChild(com4_2.firstChild);
        }
        while(custom1.hasChildNodes()){
            custom1.removeChild(custom1.firstChild);
        }
        while(custom2.hasChildNodes()){
            custom2.removeChild(custom2.firstChild);
        }
        while(greetusr.hasChildNodes()){
            greetusr.removeChild(greetusr.firstChild);
        }
    }
    function init(){
        turnoff();
    }
    init();
}
module.exports = offModule;
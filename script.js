let pound=document.getElementById('poun');
let kilor=document.getElementById('kilo');
let ounr=document.getElementById('oun');
let grmr=document.getElementById('grm');
let stn=document.getElementById('stn');

function checkPound(pnd){
    
    let kilogram=(pnd/2.2046);
    let ounces=(pnd*16);
    let stones=(pnd*0.071429);
    let gram=(pnd/0.0022046);

    kilor.value=kilogram;
    ounr.value=ounces;
    grmr.value=gram;
    stn.value=stones;
}

function checkKilogram(kg){
    
    let pnd=(kg*2.2046);
    let ounces=(kg*35.274);
    let stones=(kg*0.1574);
    let gram=(kg*1000);

    pound.value=pnd;
    ounr.value=ounces;
    grmr.value=gram;
    stn.value=stones;
}

function checkOunce(oz){
    
    let kilogram=(oz/35.274);
    let pnd=(oz*0.0625);
    let stones=(pnd*0.071429);
    let gram=(oz/0.035274);

    kilor.value=kilogram;
    pound.value=pnd;
    grmr.value=gram;
    stn.value=stones;
}

function checkGram(g){
    
    let kilogram=(g/1000);
    let ounces=(g*0.035274);
    let stones=(g*0.00015747);
    let pnd=(g*0.0022046);

    kilor.value=kilogram;
    ounr.value=ounces;
    pound.value=pnd;
    stn.value=stones;
}


function checkStone(st){
    
    let kilogram=(st/0.15747);
    let ounces=(st*224);
    let pnd=(st*14);
    let gram=(st/0.00015747);

    kilor.value=kilogram;
    ounr.value=ounces;
    grmr.value=gram;
    pound.value=pnd;
}
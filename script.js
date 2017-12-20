var increment = 1000000
var ticker = null;

function OnLoad(e) {
    var counter = document.getElementById('counter');            
    ticker = setInterval(IncrementCounter, 500);

    var year = document.getElementById('year');
    var fyear = document.getElementById('footerYear');
    year.innerText = new Date().getFullYear();
    fyear.innerText = new Date().getFullYear();   
}

function IncrementCounter() {
    if(increment >= 9999999)
    {
        clearInterval(ticker);
        increment = 9999999;
    }
    counter.innerText = increment;
    increment += Math.floor(Math.random() * 50);
}

document.addEventListener("DOMContentLoaded", OnLoad);
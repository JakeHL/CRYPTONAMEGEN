// Load the wordlist - based on:
// http://www.mieliestronk.com/corncob_caps.txt
 var wordList = [];
getList('/wordlist.txt', function(x) { wordList = x });

 // Load prefix list
 var prefixList = [];
 getList('/prefixlist.txt',  function(x) { prefixList = x });

 // Load suffix list
 var suffixList = [];
 getList('/suffixlist.txt',  function(x) { suffixList = x });


 function getList(url, f) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    var result;
    client.onreadystatechange = function() {
        f(client.responseText.split('\n'));
    }
    client.send();
 }

 
 function generateName() {
    var prefix = null;
    var word = null;
    var suffix = null;

    var generation = '';

     do {
        var showSuffix = (Math.random() > 0.5);
        var showPrefix = (Math.random() > 0.5);
     } while(!showSuffix || !showSuffix);

     if(showPrefix)
     {
         while(prefix == null)
         {
            var index = Math.floor(Math.random() * prefixList.length);
            prefix = prefixList[index];            
         }
         if(prefix.endsWith('-'))
            prefix = prefix.replace('-','');
        else
            prefix += ' ';

        generation += prefix;
     }

     var index = Math.floor(Math.random() * wordList.length);
     word = wordList[index];
     generation += word;

     if(showSuffix)
     {
        while(suffix == null)
        {
            var index = Math.floor(Math.random() * suffixList.length);
            suffix = suffixList[index];
        }
        if(suffix.startsWith('-'))
            suffix = suffix.replace('-', '');
        else
            suffix = ' ' + suffix;

        generation += suffix;
     }     

     return generation;
 }


 function fancyNames() {

    var nameBox = document.getElementById('nameBox');

    var counter = 0;

    var ticker1 = setInterval(setTicker1, 25);  
    var ticker2 = null;
    var ticker3 = null;
    
    function setTicker1() {        
        if(counter == 10)
        {
            clearInterval(ticker1);
            ticker2 = setInterval(setTicker2, 100);
        }
        else
            increment();
    } 

    function setTicker2() {        
        if(counter == 15)
        {
            clearInterval(ticker2);
            ticker2 = setInterval(setTicker3, 300);
        }
        else
            increment();
    }

    function setTicker3() {
        if(counter == 20)
        {
            clearInterval(ticker3);
        }
        else
            increment();
    }

    function increment() {
        nameBox.value = generateName();
        counter++;
    }

 }

 document.getElementById('generateBtn').onclick = fancyNames;


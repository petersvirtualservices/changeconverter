var convertButton = document.getElementById("submitDifference");

convertButton.addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
});

const calculate = function calculate() {
    var a = document.getElementById("amount").value;
    var g = document.getElementById("given").value;
    var dif = (g - a).toFixed(2);
    document.getElementById("change").textContent = dif;

   
   
   
    var hundred = Math.floor(dif / 100);
    var hundredMod = dif % 100;
    var hundredSet = document.getElementById("hundred")
    hundredSet.textContent = hundred;
    if (hundred){
        hundredSet.setAttribute('class','dollar'); 
    }

    var fifty = Math.floor(hundredMod / 50);
    var fiftyMod = hundredMod % 50;
    var fiftySet = document.getElementById("fifty");
    fifty.textContent = fifty;
    if (fifty){
        fiftySet.setAttribute('class','dollar'); 
    }

    var twenty = Math.floor(fiftyMod / 20);
    var twentyMod = fiftyMod % 20;
    var twentySet = document.getElementById("twenty");
    twentySet.textContent = twenty;
    if (twenty){
        twentySet.setAttribute('class','dollar'); 
    }
    
    var ten = Math.floor(twentyMod / 10);
    var tenMod = twentyMod % 10;
    var tenSet = document.getElementById("ten");
    tenSet.textContent = ten;
    if (ten){
        tenSet.setAttribute('class','dollar'); 
    }
    
    var five = Math.floor(tenMod / 5);
    var fiveMod = tenMod % 5;
    var fiveSet = document.getElementById("five")
    fiveSet.textContent = five;
    if (five){
        fiveSet.setAttribute('class','dollar'); 
    }
    
    var one = Math.floor(fiveMod / 1);
    var oneMod = fiveMod % 1;
    var oneSet = document.getElementById("one");
    oneSet.textContent = one;
    if (one){
        oneSet.setAttribute('class','dollar'); 
    }
    
    var quarter = Math.floor(oneMod / .25);
    var quarterMod = oneMod % .25;
    var quarterSet = document.getElementById("quarter");
    quarterSet.textContent = quarter;
    if (quarter){
        quarterSet.setAttribute('class','coin'); 
    }
    
    var dime = Math.floor(quarterMod / .1);
    var dimeMod = quarterMod % .1;
    var dimeSet = document.getElementById("dime");
    dimeSet.textContent = dime;
    if (dime){
        dimeSet.setAttribute('class','coin'); 
    }
    
    var nickle = Math.floor(dimeMod / .05);
    var nickleMod = dimeMod % .05;
    var nickleSet = document.getElementById("nickle");
    nickleSet.textContent = nickle;
    if (nickle){
        nickleSet.setAttribute('class','coin'); 
    }
    
    var penny = Math.floor(nickleMod / .01);
    var pennySet = document.getElementById("penny");
    pennySet.textContent = penny;
    if (penny){
        pennySet.setAttribute('class','coin'); 
    }
    
}


/*
 localStorage.setItem("email", email/function);
      var email = localStorage.getItem("email");
Send information to local storage
JSON parse and JSON stringify
*/

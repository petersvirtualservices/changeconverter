    var convertButton = document.getElementById("submitDifference");
    
    convertButton.addEventListener("submit", function (e) {
        e.preventDefault();
        calculate();    
    });

function calculate() {
    var a = document.getElementById("amount").value;
    var g = document.getElementById("given").value;
    var dif = g-a;
    console.log("Difference: " + dif);

    var hundred =  Math.floor(dif / 100);
    var hundredMod = dif % 100;
    console.log("How Many 100's To Give Back: " + hundred);
    console.log("How Much Left After 100's Have Been Given: " + hundredMod);
    document.getElementById("hundred").textContent= hundred;

    var fifty =  Math.floor(hundredMod / 50);
    var fiftyMod = hundredMod % 50;
    console.log("How Many 50's To Give Back: " + fifty);
    console.log("How Much Left After 50's Have Been Given: " + fiftyMod);
    document.getElementById("fifty").textContent= fifty;
    
    var twenty =  Math.floor(fiftyMod / 20);
    var twentyMod = fifty % 20;
    console.log("How Many 20's To Give Back: " + twenty);
    console.log("How Much Left After 20's Have Been Given: " + twentyMod);
    document.getElementById("twenty").textContent= twenty;
    
    var ten =  Math.floor(twentyMod / 10);
    var tenMod = twentyMod % 10;
    console.log("How Many 10's To Give Back: " + ten);
    console.log("How Much Left After 10's Have Been Given: " + tenMod);
    document.getElementById("ten").textContent= ten;
    
    var five =  Math.floor(tenMod / 5);
    var fiveMod = tenMod % 5;
    console.log("How Many 5's To Give Back: " + five);
    console.log("How Much Left After 5's Have Been Given: " + fiveMod);
    document.getElementById("five").textContent= five;
    
    var one =  Math.floor(fiveMod / 1);
    var oneMod = fiveMod % 1;
    console.log("How Many 1's To Give Back: " + one);
    console.log("How Much Left After 1's Have Been Given: " + oneMod);
    document.getElementById("one").textContent= one;
    
    var quarter =  Math.floor(oneMod / .25);
    var quarterMod = oneMod % .25;
    console.log("How Many Quarters To Give Back: " + quarter);
    console.log("How Much Left After Quarters Have Been Given: " + quarterMod);
    document.getElementById("quarter").textContent= quarter;
    
    var dime =  Math.floor(quarterMod / .1);
    var dimeMod = quarterMod % .1;
    console.log("How Many Dimes To Give Back: " + dime);
    console.log("How Much Left After Dimes Have Been Given: " + dimeMod);
    document.getElementById("dime").textContent= dime;

    var nickle =  Math.floor(dimeMod / .05);
    var nickleMod = dimeMod % .05;
    console.log("How Many Nickles To Give Back: " + nickle);
    console.log("How Much Left After Nickles Have Been Given: " + dimeMod);
    document.getElementById("nickle").textContent= nickle;
    
    var penny =  Math.floor(nickleMod / .01);
    console.log("How Many Pennies To Give Back: " + penny);
    document.getElementById("penny").textContent= penny;

}
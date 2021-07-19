var convertButton = document.getElementById("submitDifference");
const request = indexedDB.open("library");
let db;


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
    var hundredSet = document.getElementById("hundred");
    hundredSet.textContent = hundred;
    if (hundred) {
        hundredSet.setAttribute('class', 'dollar');
    }

    var fifty = Math.floor(hundredMod / 50);
    var fiftyMod = hundredMod % 50;
    var fiftySet = document.getElementById("fifty");
    fifty.textContent = fifty;
    if (fifty) {
        fiftySet.setAttribute('class', 'dollar');
    }

    var twenty = Math.floor(fiftyMod / 20);
    var twentyMod = fiftyMod % 20;
    var twentySet = document.getElementById("twenty");
    twentySet.textContent = twenty;
    if (twenty) {
        twentySet.setAttribute('class', 'dollar');
    }

    var ten = Math.floor(twentyMod / 10);
    var tenMod = twentyMod % 10;
    var tenSet = document.getElementById("ten");
    tenSet.textContent = ten;
    if (ten) {
        tenSet.setAttribute('class', 'dollar');
    }

    var five = Math.floor(tenMod / 5);
    var fiveMod = tenMod % 5;
    var fiveSet = document.getElementById("five");
    fiveSet.textContent = five;
    if (five) {
        fiveSet.setAttribute('class', 'dollar');
    }

    var one = Math.floor(fiveMod / 1);
    var oneMod = fiveMod % 1;
    var oneSet = document.getElementById("one");
    oneSet.textContent = one;
    if (one) {
        oneSet.setAttribute('class', 'dollar');
    }

    var quarter = Math.floor(oneMod / .25);
    var quarterMod = oneMod % .25;
    var quarterSet = document.getElementById("quarter");
    quarterSet.textContent = quarter;
    if (quarter) {
        quarterSet.setAttribute('class', 'coin');
    }

    var dime = Math.floor(quarterMod / .1);
    var dimeMod = quarterMod % .1;
    var dimeSet = document.getElementById("dime");
    dimeSet.textContent = dime;
    if (dime) {
        dimeSet.setAttribute('class', 'coin');
    }

    var nickle = Math.floor(dimeMod / .05);
    var nickleMod = dimeMod % .05;
    var nickleSet = document.getElementById("nickle");
    nickleSet.textContent = nickle;
    if (nickle) {
        nickleSet.setAttribute('class', 'coin');
    }

    var penny = Math.floor(nickleMod / .01);
    var pennySet = document.getElementById("penny");
    pennySet.textContent = penny;
    if (penny) {
        pennySet.setAttribute('class', 'coin');
    }

}


var tesy = 5;
var tesu = 6;

request.onupgradeneeded = function () {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("calculations", { keyPath: "isbn" });
    const amountGiven = store.createIndex("Amount_Given", "given");
    const saleAmount = store.createIndex("Sale_Amount", "saleAmount");
    const hundredStore = store.createIndex("hundreds", "hundred");
    const fiftyStore = store.createIndex("fiftys", "fifty");
    const twentyStore = store.createIndex("twentys", "twenty");
    const tenStore = store.createIndex("tens", "ten");
    const fiveStore = store.createIndex("fives", "five");
    const oneStore = store.createIndex("ones", "one");
    const quarterStore = store.createIndex("quarters", "quarter");
    const dimeStore = store.createIndex("dimes", "dime");
    const nickleStore = store.createIndex("nickles", "nickle");
    const pennyStore = store.createIndex("pennys", "penny");

    // Populate with initial data.
    store.put({ isbn: 123456, given: tesy, saleAmount:tesu, hundred:"test", fifty:"test", twenty:"test", ten:"test", five:"test", one:"test", quarter:"test", dime:"test", nickle:"test", penny:"test"  });
    
};

request.onsuccess = function () {
    db = request.result;
};



//***********INDEXEDDB***********
/*

//Table Creation
//https://www.w3.org/TR/IndexedDB/

const request = indexedDB.open("library");
let db;

request.onupgradeneeded = function () {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("calculations", {keyPath: "given"});
    const amountGiven = store.createIndex("Amount_Given", "given");
    const saleAmount = store.createIndex("Sale_Amount", "saleAmount");
    const hundredStore = store.createIndex("hundreds", "hundred");
    const fiftyStore = store.createIndex("fiftys", "fifty");
    const twentyStore = store.createIndex("twentys", "twenty");
    const tenStore = store.createIndex("tens", "ten");
    const fiveStore = store.createIndex("fives", "five");
    const oneStore = store.createIndex("ones", "one");
    const quarterStore = store.createIndex("quarters", "quarter");
    const dimeStore = store.createIndex("dimes", "dime");
    const nickleStore = store.createIndex("nickles", "nickle");
    const pennyStore = store.createIndex("pennys", "penny");

store.put({Amount_Given: "Quarry Memories", Sale_Amount: "Fred", hundreds: 123456});
};
request.onsuccess = function () {
    db = request.result;
};



//Set Attribute
//https://wanago.io/2018/10/08/fundamentals-of-storing-data-in-the-browser-with-indexeddb/


openRequest.addEventListener('success', (event) => {
    const database = event.target.result;
    const transaction = database.transaction('calculations', 'readwrite');
    const store = transaction.objectStore('calculations');

    var a = document.getElementById("amount");
    var g = document.getElementById("given");
    var hundredSet = document.getElementById("hundred");
    var fiftySet = document.getElementById("fifty");
    var twentySet = document.getElementById("twenty");
    var tenSet = document.getElementById("ten");
    var fiveSet = document.getElementById("five");
    var oneSet = document.getElementById("one");
    var quarterSet = document.getElementById("quarter");
    var dimeSet = document.getElementById("dime");
    var nickleSet = document.getElementById("nickle");
    var pennySet = document.getElementById("penny");

    store.add({
        Amount_Given: g,
        Sale_Amount: a,
        hundred: hundredSet,
        fifty: fiftySet,
        twenty: twentySet,
        ten: tenSet,
        five: fiveSet,
        one: oneSet,
        quarter: quarterSet,
        dime: dimeSet,
        nickle: nickleSet,
        penny: pennySet
    }, 1);
});
}
*/
/*
 localStorage.setItem("email", email/function);
      var email = localStorage.getItem("email");
Send information to local storage
JSON parse and JSON stringify
*/

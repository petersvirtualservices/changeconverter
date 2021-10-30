var convertButton = document.getElementById("submitDifference");

convertButton.addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
});

const calculate = function calculate() {
    var a = document.getElementById("amount").value;
    var g = document.getElementById("given").value;
    var dif = (g - a).toFixed(2);

    if (dif < 1) {
        document.getElementById("change").textContent = "Do Not Give Any Change Back."
    } else {
        document.getElementById("change").textContent = "$" + dif;

        var hundred = Math.floor(dif / 100);
        var hundredMod = dif % 100;
        var hundredSet = document.getElementById("hundred");
        hundredSet.textContent = "$100 x" +hundred;
        if (hundred) {
            hundredSet.setAttribute('class', 'dollar');
        }

        var fifty = Math.floor(hundredMod / 50);
        var fiftyMod = hundredMod % 50;
        var fiftySet = document.getElementById("fifty");
        fiftySet.textContent = "$50 x" +fifty;
        if (fifty) {
            fiftySet.setAttribute('class', 'dollar');
        }

        var twenty = Math.floor(fiftyMod / 20);
        var twentyMod = fiftyMod % 20;
        var twentySet = document.getElementById("twenty");
        twentySet.textContent = "$20 x" +twenty;
        if (twenty) {
            twentySet.setAttribute('class', 'dollar');
        }

        var ten = Math.floor(twentyMod / 10);
        var tenMod = twentyMod % 10;
        var tenSet = document.getElementById("ten");
        tenSet.textContent = "$10 x" +ten;
        if (ten) {
            tenSet.setAttribute('class', 'dollar');
        }

        var five = Math.floor(tenMod / 5);
        var fiveMod = tenMod % 5;
        var fiveSet = document.getElementById("five");
        fiveSet.textContent = "$5 x" +five;
        if (five) {
            fiveSet.setAttribute('class', 'dollar');
        }

        var one = Math.floor(fiveMod / 1);
        var oneMod = fiveMod % 1;
        var oneSet = document.getElementById("one");
        oneSet.textContent = "$1 x" +one;
        if (one) {
            oneSet.setAttribute('class', 'dollar');
        }

        var quarter = Math.floor(oneMod / .25);
        var quarterMod = oneMod % .25;
        var quarterSet = document.getElementById("quarter");
        quarterSet.textContent = "$.25 x" +quarter;
        if (quarter) {
            quarterSet.setAttribute('class', 'coin');
        }

        var dime = Math.floor(quarterMod / .1);
        var dimeMod = quarterMod % .1;
        var dimeSet = document.getElementById("dime");
        dimeSet.textContent = "$.10 x" +dime;
        if (dime) {
            dimeSet.setAttribute('class', 'coin');
        }

        var nickle = Math.floor(dimeMod / .05);
        var nickleMod = dimeMod % .05;
        var nickleSet = document.getElementById("nickle");
        nickleSet.textContent = "$.05 x" +nickle;
        if (nickle) {
            nickleSet.setAttribute('class', 'coin');
        }

        var penny = nickleMod.toFixed(2) * 100;
        var pennySet = document.getElementById("penny");
        pennySet.textContent = "$.01 x" +penny;
        if (penny) {
            pennySet.setAttribute('class', 'coin');
        }
    }

    //***********INDEXEDDB***********

    const request = indexedDB.open("Change");
    let db;

    request.onupgradeneeded = function () {
        const db = request.result;
        const store = db.createObjectStore("calculations", { keyPath: "saleAmount" });
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
    };

    function changeConversion() {

        const changeToGive = {
            given: g,
            saleAmount: a,
            penny: penny,
            nickle: nickle,
            dime: dime,
            quarter: quarter,
            one: one,
            five: five,
            ten: ten,
            twenty: twenty,
            fifty: fifty,
            hundred: hundred
        }

        const db = request.result;
        const tx = db.transaction("calculations", "readwrite");
        const cStore = tx.objectStore("calculations");
        cStore.add(changeToGive);
    }

    request.onsuccess = function () {
        request.result;
        changeConversion();
    };

    request.onerror = function () {
        alert(`Error: Check Console Log`);
    }

};

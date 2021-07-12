var convertButton = document.getElementById("submitDifference");

convertButton.addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
});

const calculate = function calculate() {
    var a = document.getElementById("amount").value;
    var g = document.getElementById("given").value;
    var dif = g - a;
    console.log("Difference: " + dif);


    document.getElementById("change").textContent = dif;

    var hundred = Math.floor(dif / 100);
    var hundredMod = dif % 100;
    console.log("How Many 100's To Give Back: " + hundred);
    console.log("How Much Left After 100's Have Been Given: " + hundredMod);
    document.getElementById("hundred").textContent = hundred;

    var fifty = Math.floor(hundredMod / 50);
    var fiftyMod = hundredMod % 50;
    console.log("How Many 50's To Give Back: " + fifty);
    console.log("How Much Left After 50's Have Been Given: " + fiftyMod);
    document.getElementById("fifty").textContent = fifty;

    var twenty = Math.floor(fiftyMod / 20);
    var twentyMod = fiftyMod % 20;
    console.log("How Many 20's To Give Back: " + twenty);
    console.log("How Much Left After 20's Have Been Given: " + twentyMod);
    document.getElementById("twenty").textContent = twenty;

    var ten = Math.floor(twentyMod / 10);
    var tenMod = twentyMod % 10;
    console.log("How Many 10's To Give Back: " + ten);
    console.log("How Much Left After 10's Have Been Given: " + tenMod);
    document.getElementById("ten").textContent = ten;

    var five = Math.floor(tenMod / 5);
    var fiveMod = tenMod % 5;
    console.log("How Many 5's To Give Back: " + five);
    console.log("How Much Left After 5's Have Been Given: " + fiveMod);
    document.getElementById("five").textContent = five;

    var one = Math.floor(fiveMod / 1);
    var oneMod = fiveMod % 1;
    console.log("How Many 1's To Give Back: " + one);
    console.log("How Much Left After 1's Have Been Given: " + oneMod);
    document.getElementById("one").textContent = one;

    var quarter = Math.floor(oneMod / .25);
    var quarterMod = oneMod % .25;
    console.log("How Many Quarters To Give Back: " + quarter);
    console.log("How Much Left After Quarters Have Been Given: " + quarterMod);
    document.getElementById("quarter").textContent = quarter;

    var dime = Math.floor(quarterMod / .1);
    var dimeMod = quarterMod % .1;
    console.log("How Many Dimes To Give Back: " + dime);
    console.log("How Much Left After Dimes Have Been Given: " + dimeMod);
    document.getElementById("dime").textContent = dime;

    var nickle = Math.floor(dimeMod / .05);
    var nickleMod = dimeMod % .05;
    console.log("How Many Nickles To Give Back: " + nickle);
    console.log("How Much Left After Nickles Have Been Given: " + dimeMod);
    document.getElementById("nickle").textContent = nickle;

    var penny = Math.floor(nickleMod / .01);
    console.log("How Many Pennies To Give Back: " + penny);
    document.getElementById("penny").textContent = penny;

}
/*
 localStorage.setItem("email", email/function);
      var email = localStorage.getItem("email");
Send information to local storage
JSON parse and JSON stringify
*/
let db = null;

function create_db() {
    const request = window.indexedDB.open('ChangeConversionDatabse', 2);

    request.onerror = function (event) {
        console.log('Database Not Created.');
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        const store = db.createObjectStore('roster', { keypath: calculate() });
        store.transaction.oncomplete = function (event) {
            console.log('Roster store successfully completed.');
        }

    }

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log('Database Successfully Created.');
        insert_record(calculate);
    }
}

function delete_db() {
    const request = window.indexedDB.deleteDatabase('ChangeConverterDatabase');

    request.onsuccess = function (event) {
        console.log("Database Successfully Deleted.")
    }
}

create_db();
//delete_db();

function insert_record(calculate) {
    if (db) {
        const insert_transaction = db.transaction('roster', 'readwrite');
        const store = insert_transaction.objectStore('roster');

        insert_transaction.onerror = function () {
            console.log('Problem with transactions');
        }

        insert_transaction.oncomplete = function () {
            console.log("Transactions complete.")
        }

        calculate.forEach(record => {
            let request = store.add(calculate);

            request.onerror = function (event) {
                console.log("Could not add", calculate);

            }

            request.onsuccess = function () {
                console.log("Successfully added ", calculate);
            }
        });

    }
}

function update_record(calculate) {
    if (db) {
        const update_transaction = db.transaction('roster', 'readwrite');
        const store = update_transaction.objectStore('roster');

        update_transaction.onerror = function () {
            console.log('Problem with transactions');
        }

        update_transaction.oncomplete = function () {
            console.log("Transactions complete.")
        }

        records.forEach(record => {
            let request = store.put(calculate);

            request.onerror = function (event) {
                console.log("Could not add", calculate);

            }

            request.onsuccess = function () {
                console.log("Successfully added ", calculate);
            }
        });

    }
}

function get_record(calculate) {
    if (db) {
        const get_transaction = db.transaction('roster', 'readwrite');
        const store = get_transaction.objectStore('roster');

        get_transaction.onerror = function () {
            console.log('Problem with transactions');
        }

        get_transaction.oncomplete = function () {
            console.log("Transactions complete.")
        }

        let request = store.get(calculate);

        request.onerror = function (event) {
            console.log("Could not get", calculate);

        }

        request.onsuccess = function () {
            console.log("Successfully got ", calculate);
        }
    };

}


function delete_record(calculate) {
    if (db) {
        const delete_transaction = db.transaction('roster', 'readwrite');
        const store = delete_transaction.objectStore('roster');

        delete_transaction.onerror = function () {
            console.log('Problem with transactions');
        }

        delete_transaction.oncomplete = function () {
            console.log("Transactions complete.")
        }

        records.forEach(record => {
            let request = store.delete(record);

            request.onerror = function (event) {
                console.log("Could not add", record);

            }

            request.onsuccess = function () {
                console.log("Successfully added ", record);
            }
        });

    }
}
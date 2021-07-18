const request = indexedDB.open("library");
let db;

request.onupgradeneeded = function() {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("calculations", {keyPath: "difference"});
    const amountGiven = store.createIndex("Amount_Given", "given");
    const saleAmount = store.createIndex("Sale_Amount", "saleAmount");
    const hundredStore = store.createIndex("hundred_number", "hundred");
    const fiftyStore = store.createIndex("fifty_number", "fifty");
    const twentyStore = store.createIndex("twenty_number", "twenty");
    const tenStore = store.createIndex("ten_number", "ten");
    const fiveStore = store.createIndex("five_number", "five");
    const oneStore = store.createIndex("one_number", "one");
    const quarterStore = store.createIndex("quarter_number", "quarter");
    const dimeStore = store.createIndex("dime_number", "dime");
    const nickleStore = store.createIndex("nickle_number", "nickle");
    const pennyStore = store.createIndex("penny_number", "penny");
  };
  
  request.onsuccess = function() {
    db = request.result;
  };

  //https://www.w3.org/TR/IndexedDB/
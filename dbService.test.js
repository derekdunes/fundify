const DbService  = require('./dbService'); 

test("Should return affectedRows", () => {
    const dataArray = [
        "mbah",
        "derek",
        "No12 Ilorin Street Federal Housing Trans Ekulu Enugu",
        "Enugu",
        "EN",
        "NG",
        "234042",
        "08184921792",
        "mbahderek@gmail.com",
        "email",
        "usd",
        "monthly",
        "600000",
        "skdnvsovsvmsfvs"
      ];

    const db = DbService.getDServiceInstance();

    const results = db.insertData(dataArray);

    return results.then(data => expect(data.affectedRows).toBe(1));
    
});

// test("Insert Empty Array Data Test", () => {
//   expect(async () => {
//     const dataArray = [];

//     const db = DbService.getDServiceInstance();

//     const results = db.insertData(dataArray);

//     const data = await results;
//     return expect(data.affectedRows).toBe(1);
//   }).toThrow(TypeError)

// });
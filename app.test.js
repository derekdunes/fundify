test('Should return Success', () => {
    const labelArray = [
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

    //save to db
    const result = fetch('http://localhost:5000/save', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(labelArray)
    })
    
    return result.then(response => expect(response.success).to.be.true);
});
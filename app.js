const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const DbService  = require('./dbService'); 
const { response } = require('express');
//const { response, json } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

//create 
app.post('/save', (req, res) => { 
        
        const db = DbService.getDServiceInstance();

        const result = db.insertData(req.body);

        result
        .then(data => res.json({ success: true}))
        .catch(err => console.log(err));
        

});

app.listen(process.env.PORT, () => console.log('app is running'));
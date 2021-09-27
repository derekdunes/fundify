const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if(err) {
        console.log(err.message);
    }

    console.log('db' + connection.state);
});

class DbService {
    static getDServiceInstance() {
        return new DbService();
    }

    async insertData(dataArray) {
        
        try {
    
            //console.log(connection);
            const results = await new Promise((resolve, reject) => {
                
                const query = "INSERT INTO donations (first_name, last_name, address, city, state, country, postal_code, phone_number, email, contact_pref, currency, donation_freq, amount, comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
                
                connection.query(query, dataArray, (err, results) => {
                    if (err){ 
                        reject(new Error(err.message));
                    }
                    console.log(results.insertId);
                    resolve(results);
                });

            });


            //console.log('The insertId ' + insertId);
            connection.end();
            return results;
            
        } catch (err) {
            console.log(err)
            //return err;
        }
    }
}

module.exports = DbService
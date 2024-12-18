const mysql=require('mysql2');

const connection=mysql.createConnection({
    user:'root',
    password:'12345678',
    host:'localhost',
    database:'nsureassesment'
});
connection.connect((err)=>{
    if (err) {
        throw err
    }
    console.log('Connected to database')
}

)
module.exports=connection;
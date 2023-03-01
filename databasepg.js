const {Client} = require('pg');

const client = new Client({
    host : "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "reg"
})

//event 
client.on("connect", ()=>{
    console.log("Database Connection");
});

client.on("end", () =>{
    console.log("Connection End");
});

client.connect();

client.query(`Select * from user`, (err,res)=> {
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    // client.end();
});

client.query("CREATE TABLE SOCIAL (id int, name varchar(10), email varchar(50))", (err,res)=>{
    console.log(err,res)
    // client.end();
})

client.query("CREATE TABLE bee (id int, name varchar(10), email varchar(50))", (err,res)=>{
    console.log(err,res)
    // client.end();
})

client.query("Insert into SOCIAL (id, name, email)values (1,'John','abc@gmail.com')", (err,res)=>{
    console.log(err,res)
    // client.end();
})

client.query("update ")


client.query("select * from social", (err,res)=>{
    console.log(err,res)
    client.end();
})







// module.exports = client;

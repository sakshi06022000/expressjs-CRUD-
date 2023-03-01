// const { Client } = require('pg');

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "123",
//     database: "reg"
// });

// const execute = async (query) => {
//     try {
//         await client.connect();     // gets connection
//         await client.query(query);  // sends queries
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await client.end();         // closes connection
//     }
// };

// const text = `
//     CREATE TABLE IF NOT EXISTS "college_info" (
// 	    "id" SERIAL,
// 	    "name" VARCHAR(100) NOT NULL,
// 	    "role" VARCHAR(15) NOT NULL,
// 	    PRIMARY KEY ("id")
//     );`

// execute(text).then(result => {
//     if (result) {
//         console.log('Table created');
//     }
// });

// client.query("Insert into college_info (id,name,role)values(1,'john','jr')", (err.res)=>{
//     console.log(err,res)
//     client.end();
// });

// const { Client } = require('pg')

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "123",
//     database: "reg"
// })

// client
//     .connect()
//     .then((res) => console.log(res))
//     .then((res) => console.log("Db connect ~"))
//     .catch((e) => console.log("DB connection Failed!", "\n", e));

// client.query("SELECT * FROM user", (err, res) => {
//     console.log(err, res)
//     client.end()
// })
// const text = `
//     CREATE TABLE IF NOT EXISTS "college" (
// 	    "id" SERIAL,
// 	    "name" VARCHAR(100) NOT NULL,
// 	    "role" VARCHAR(15) NOT NULL,
// 	    PRIMARY KEY ("id")
//     );`

// execute(text).then(result => {
//     if (result) {
//         console.log('Table created');
//     }
// });

// const query = `
// CREATE TABLE users (
//     email varchar,
//     firstName varchar,
//     lastName varchar,
//     age int
// );
// `;

// client.query(query, (err, res) => {
//     if (err) {
//         console.log(err);
//         return;
//     }else{
//     console.log('Table is successfully created');
//     }
//     client.end();
// });


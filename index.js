// const client = require('./databasepg.js')
// const express = require("express");

// const app = express();
// const port = 4040;
// const hostname = "localhost";

// app.get("/",(req,res)=>{
//     res.send("<h1>HELLO WORLD</h1>");
// });
// // app.get("/about",(req,res)=>{
// //      res.send("<h1>ABOUT PAGE</h1>");
// // });
// // app.get("/contact",(req,res)=>{
// //     res.send("<h1>CONTACT PAGE</h1>");
// // });
// app.get("/home" , (req,res)=>{
//      var a= {
//         id : 1,
//         Name : "Express"
//      }
//      res.send(a);
// });
// app.listen(port,hostname, () => {
//     console.log(`Server is Workng on port http://${hostname}:${port}`);
// });

// client.connect();

// client.query(`Select * from user`, (err,res)=> {
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end();
// });

//another way to connect 
// (async () => {
//     await client.connect();
//     const result = await client.query(`Select * from user`);
//     console.log (result.rows);
//     client.end();
// })();


// (async() => {
//     await client.connect();
//     const result = await client.query(`insert into user(name,age)values($1,$2) RETURNING *`, ["tech","test test"]);
//     console.log (result.rows);
//     console.log(result.rowcount)
//     client.end();
// })();

// client.query("Insert into user(id,name,age,address)values(1,'john',24,'ji')",(err,res)=>{
//     console.log(err,res)
//     client.end();
// });

// const client = require('./databasepg.js')
// const express = require("express");

// const app = express();
// const port = 4040;
// const hostname = "localhost";

// app.listen(hostname, port, () => {
//     console.log(`Server is created at http://${hostame}:${port}`);
// });

// client.connect();

// app.get('/user', (req, res) => {
//     client.query(`Select * from user`, (err, result) => {
//         if (!err) {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })
// client.connect();


const client = require('./connection.js');
const express = require("express");
const app = express();
const port = 4004;
const hostname = "localhost";

app.listen(port, () => {
    console.log(`Server is created at http://${hostname}:${port}`);
});

client.connect();



app.get('/emp', (req, res) => {
    client.query('Select * from emp', (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });

})

app.get('/emp/:id', (req, res)=>{
    const id = req.params.id;
        client.query(`Select * from emp where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
         }
    });
    // client.end();
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/emp', (req, res)=> {
    const emp = req.body;
    let insertQuery = `insert into emp(id, name, location) 
                       values(${emp.id}, '${emp.name}', '${emp.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    // client.end();
})

app.put('/emp/:id', (req, res)=> {
    console.log(req);
    let emp= req.body;
    const id = req.params.id
    let updateQuery = `update emp
                       set name = '${emp.name}', // req.body.name
                       location = '${emp.location}'
                       where id = ${req.params.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
})

app.delete('/del/:id', (req, res)=> {
    let insertQuery = `delete from emp where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// app.get('/emp/:id', (req, res) => {
//     const Id = req.params.id;
//     client.query('SELECT * FROM emp WHERE id = $1',[Id], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send(`Error fetching user with ID ${Id}`);
//       } else if (result.rows.length === 0) {
//         res.status(404).send(`User with ID ${Id} not found`);
//       } else {
//         res.send(result.rows[0]);
//       }
//     });
   
//   });
const client = require('../connection.js');
var express = require('express')
const router = express.Router();


router.get(`/all`, (req, res) => {
   // res.send("all employee");
    client.query(`Select * from stud`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
})

router.get('/all/:id', (req, res)=>{
    const id = req.params.id;
        client.query(`Select * from stud where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
         }
    });
})

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post('/insert', (req, res)=> {
    const stud = req.body;
    let insertQuery = `insert into stud(id, name, location) 
                       values(${stud.id}, '${stud.name}', '${stud.location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })

})

router.put('/update/:id', (req, res)=> {
    console.log(req);
    let stud= req.body;
    const id = req.params.id
    let updateQuery = `update stud
                       set name = '${stud.name}',
                       location = '${stud.location}'
                       where id = ${id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
})

router.delete('/delete/:id', (req, res)=> {
    let insertQuery = `delete from stud where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

module.exports= client;
module.exports = router;

//another way to exports
// export default router
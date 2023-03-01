// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const client = require('../connection.js');
var express = require('express')
const router = express.Router();

router.get('/all', (req, res) => {
  client.query('Select * from teach', (err, result) => {
      if (!err) {
          res.send(result.rows);
      }
  });

})

router.get('/all/:id', (req, res)=>{
  const id = req.params.id;
      client.query(`Select * from teach where id=${req.params.id}`, (err, result)=>{
      if(!err){
          res.send(result.rows);
       }
  });
})

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post('/insert', (req, res)=> {
  const teach = req.body;
  let insertQuery = `insert into teach(id, name, location) 
                     values(${teach.id}, '${teach.name}', '${teach.location}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
})

router.put('/update/:id', (req, res)=> {
  console.log(req);
  let teach= req.body;
  const id = req.params.id
  let updateQuery = `update teach
                     set name = '${teach.name}'
                     location = '${teach.location}'
                     where id = ${id}`

  client.query(updateQuery, (err, result)=>{
      if(!err){
          res.send('Update was successful')
      }
      else{ console.log(err.message) }
  })
})

router.delete('/delete/:id', (req, res)=> {
  let insertQuery = `delete from teach where id=${req.params.id}`

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
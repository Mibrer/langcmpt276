
/////////////////////////////////
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require("body-parser");

/////
var pg = require('pg');
var conString = "tcp://postgres:00012345@localhost:5432/tokimon"; //tcp://用户名：密码@localhost/数据库名
var tablecreate = `create table if not exists Tokimon(id serial primary key, name varchar(150), weight float,
  height float, fly float, fight float, fire float, water float, electric float,
  frozen float, total float, trainername varchar(150))`;

/////
/// localhost:5000/tokimon
//var passinvalue = {results: [{id: "asdasd", name:"testneam"},{id: "22222d", name:"te54325235235m"}] };

function tablecreate(){
  var client =  new pg.Client(conString);
  client.connect(function (isErr) {
      if (isErr) {
        console.log('connect error:' + isErr.message);
        client.end();
        return;
      }else{
        client.query(tablecreate , function (err){
            if(err){
              console.log(err);
              return;
            }else{
              var insertabc = `insert into Tokimon(name, weight,
                height, fly, fight, fire, water, electric,
                frozen, total, trainername) values('asdasd', 5.5, 2, 42, 2, 2, 4,43434,3434,12312312312,'2323')`
              client.query(insertabc, function (err){
                  if(err){
                    console.log(err);
                    return;
                  }})
            }
        });
      }
  })
}



express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/tokimon',(req, res) => showTableData(req,res))
  //.get('/crud', (req, res) => main.getTableData(req, res, db))
  .post('/tokimon/add', (req, res) => postTableData(req, res))
  .put('/tokimon', (req, res) => putTableData(req, res))
  .delete('/tokimon', (req, res) => deleteTableData(req, res))

  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function showTableData(req,res){
  var client =  new pg.Client(conString);

  client.connect(function (isErr) {
          if (isErr) {
              console.log('connect error:' + isErr.message);
              client.end();
              return;
          }else{
            console.log('good luck');
            /*
            client.query(tablecreate , function (err){
                if(err){
                  console.log(err);
                  return;
                }else{
                  var insertabc = `insert into Tokimon(name, weight,
                    height, fly, fight, fire, water, electric,
                    frozen, total, trainername) values('asdasd', 5.5, 2, 42, 2, 2, 4,43434,3434,12312312312,'2323')`
                  client.query(insertabc, function (err){
                      if(err){
                        console.log(err);
                        return;
                      }else{
                        console.log('table created');
                      }
                    })
                }
            }
          );
*/
            client.query('select * from Tokimon',function(err, result){
              if(err){
                console.log(err);
                return;
              }
            console.log(result.rows);
            client.end();
            res.render('pages/tokimon', {results:result.rows } )
            });
          }
  });
}

function postTableData(req, res){
  var client =  new pg.Client(conString);
  client.connect(function (isErr) {
    if (isErr) {
        console.log('connect error:' + isErr.message);
        client.end();
        return;
    }else{
      console.log('post');
      var queryinsert = `insert into Tokimon(name, weight, height, fly, fight, fire, water, electric, frozen, total, trainername) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`
      const { name, weight, height, fly, fight, fire, water, electric, frozen, total, trainername } = req.body;
      //const added = new Date()
      console.log( {name, weight, height, fly, fight, fire, water, electric, frozen, total, trainername});//
      client.query(queryinsert,[name, weight, height, fly, fight, fire, water, electric, frozen, total, trainername], function (err){
        if(err){
          console.log(err);
          return;
        }else{
          res.redirect("/tokimon");
        }
      })
    }
  });
}

function putTableData(req, res){

}

function  deleteTableData(req, res){
  console.log(req.body);
  var client =  new pg.Client(conString);
  client.connect(function (isErr) {
    if (isErr) {
        console.log('connect error:' + isErr.message);
        client.end();
        return;
    }else{
      client.query('DELETE FROM Tokimon WHERE Tokimon.id = $1;', [req.body.id], function (err){
        if(err){
          console.log(err);
          return;
        }else{
          res.redirect("/tokimon");
        }
      });
  }
});
}

////////////////////////////////////////////////////////////////////

/*
var app = express();
const { Pool } = require('pg');
var pool;

  pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => {res.render('pages/index')});
  app.get('/hello', (req,res) => { res.render('pages/hello')});
  app.get('/users', (req,res) => {


    var getUsersQuery = `SELECT * FROM userstab`;
    console.log(getUsersQuery);
    pool.query(getUsersQuery, (error, result) => {
      if (error)
        res.end(error);
      var results = {'rows': result.rows };
      console.log(results);
      res.render('pages/users', results)
    });
  });
  app.get('/users/:id', (req,res) => {
    console.log(req.params.id);
    var userIDQuery = `SELECT * FROM userstab WHERE uid=${req.params.id}`;
  });
  app.post('/login', (req, res) => {
    //console.log('post');
    var username = req.body.user;
    var password = req.body.pwd;
    res.send(`Hello, ${username}.  You have password ${password}`);
  });
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


*/






  /////////////////////////////////
  /*
  const express = require('express')
  const path = require('path')
  const PORT = process.env.PORT || 5000

  express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  */
  ////////////////////////////////////////////////////////////////////

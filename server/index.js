// const express = require("express");
// const app = express();
// app.listen(3001, () => {
//     console.log("aaaaa");
// });
// app.use('/',routers);


const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

var bodyParser = require('body-parser');    

app.use(cors('http://localhost:3000'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Password123#@!",
    database: "CRUD-Task1"
});
app.listen(3001, () => {
});
db.connect(function(err){
    if(err) console.log(err);
    console.log("connectde success!!!");
});

/**
routing API
 */
    /**
    *POST API create data
    */


    app.post('/create', (req, res) => {
        const data = req.body;
        if(data.name == "" || data.age == ""|| data.sex == "" || data.email == "" || data.date == "" || data.address == ""){
            return res.send('<p>khong de trong cac truong</p>');
        }
        console.log(data.date)
        db.query("INSERT INTO `CRUD-Task1`.`NhanVien` (`name`, `age`, `sex`, `email`, `date`, `address`) VALUES (?,?,?,?,?,?);",[data.name,data.age,data.sex,data.email, data.date, data.address], (err, d) => {
            if (err) throw err;
        });

    });
    /**
    *GET all data
    */
    app.get('/listdata',(req,res)=>{
        db.query("SELECT * FROM `CRUD-Task1`.NhanVien", function(err, data) {
            if(err) console.log({err});
            else{
                res.json(data);
            } 
            // return res.json(data);
        }); 
    });
    /**
    * delete row by id
    */
    app.delete('/deleterow/:id',(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM `CRUD-Task1`.NhanVien WHERE id = ?",id, function(err, result) {
            if(err) console.log({err});
        }); 
    });
    app.post('/update', (req, res) => {
        const data = req.body;
        if(data.name == "" || data.age == ""|| data.sex == "" || data.email == "" || data.date == "" || data.address == ""){
            return res.send('<p>khong de trong cac truong</p>');
        }
        let today = new Date(data.date);

        let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

        const sql = "UPDATE `CRUD-Task1`.`NhanVien` SET `name` = ? , `age` = ?, `sex` = ?, `email` = ?, `date` = ?, `address` = ? WHERE (`id` = '?')";
        const datasql = [data.name, data.age, data.sex, data.email, today, data.address, data.id]
        db.query(sql,datasql, (err, d) => {
            if (err) throw err;
        });

    });
/**
routing API
 */
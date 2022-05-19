const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReq');

async function getdata(req, res) {
    const data = await knex.from('nhanvien').select('*');
    return res.send(data);
};

async function create(req, res) {
    const data = req.body;
    const checkEmailExist =await knex.from('nhanvien').where('email', data.email).first();
    const checknullinput = helper.checkNullInput(data)
    const helperEmail = helper.helperEmail(data.email);

    if(checknullinput == true){
        return console.log("input not null");
    }else{
        if(helperEmail == false){
            return console.log("Incorrect email format ");
        }else{
            if(checkEmailExist){
                return console.log("Email already exists");
            }
        }
    }
    knex('nhanvien').insert(data)
      .then( function (result) {
          res.json({ success: true, message: 'ok' });     // respond back to request
       })

};
async function getDelete(req, res){
   knex('nhanvien')
    .del()
    .where('id', req.params.id)
    .then( function (result) {
        res.json({ success: true, message: 'ok' });     // respond back to request
     })
};

async function postUpdate(req, res){
    let today = new Date(req.body.date);
    let date=today.getFullYear() + "-" + parseInt(today.getMonth()+1) + "-" + parseInt(today.getDate() - 1);
    const data = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        date: date,
        email: req.body.email,
        address: req.body.address,
    }
    const checkEmailExist =await knex.from('nhanvien').where('email', data.email).first();
    const checknullinput = helper.checkNullInput(data)
    const helperEmail = helper.helperEmail(data.email);
    
    if(checknullinput == true){
        return console.log("input not null");
    }else{
        if(helperEmail == false){
            return console.log("Incorrect email format ");
        }else{
            if(checkEmailExist){
                return console.log("Email already exists");
            }
        }
    }
    console.log(data);
    knex('nhanvien')
    .update(data)
    .where('id', data.id )
    .then( function (result) {
            // respond back to request
     })
 };

const nhanvien = {
    getdata: getdata,
    create: create,
    getDelete : getDelete,
    postUpdate: postUpdate,
}

module.exports = nhanvien;

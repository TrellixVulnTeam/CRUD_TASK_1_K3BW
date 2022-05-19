const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReq');
const db = require('../models/nhanvienModel');

async function getdata(req, res) {
    return res.send(await db.getAll());
};

async function create(req, res) {
    const data = req.body;
    const checkEmailExist =await knex.from('nhanvien').where('email', data.email).first();
    const checknullinput = helper.checkNullInput(data)
    const helperEmail = helper.helperEmail(data.email);
    if(checknullinput == false || helperEmail == true || checkEmailExist){
        try {
            await db.insertData(data);   
        } catch (error) {
            console.log('Error:controller insert', error);
            return {status: 'error', message: 'Duplicate'};
        }
    }
    return res.send("insert khoong thanh cong");

};
async function getDelete(req, res){
    try {
        await db.deleteFindID(req.params.id);
        return res.send("them thanh cong");
    } catch (error) {
        console.log('Error:controller delete', error);
        return {status: 'error', message: 'Duplicate'};
    }
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
    console.log(checkEmailExist.id);
    const checknullinput = helper.checkNullInput(data)
    const helperEmail = helper.helperEmail(data.email);
    

    if(checknullinput == false || helperEmail == true || checkEmailExist){
        try {
            await db.updateData(data);   
        } catch (error) {
            console.log('Error:controller update', error);
            return {status: 'error', message: 'Duplicate'};
        }
    }
    return res.send("update khoong thanh cong");
 };

const nhanvien = {
    getdata: getdata,
    create: create,
    getDelete : getDelete,
    postUpdate: postUpdate,
}

module.exports = nhanvien;

const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReqNhanVien');
const db = require('../models/nhanvienModel');

async function getdata(req, res) {
    return res.send(await db.getAll());
};

async function create(req, res) {
    try {
        const data = req.body;
        if(data.sex == "") data.sex = "Male";
        const checkEmailExist =await knex.from('nhanvien').where('email', data.email).first();
        const checknullinput = helper.checkNullInput(data)
        const helperEmail = helper.helperEmail(data.email);
        const email = helper.checkEmail(checkEmailExist , data.id);

        if(checknullinput == false && helperEmail == true && email==true){
            await db.insertData(data);   
            return res.send("insert thanh cong")
        }else return res.send("insert khoong thanh cong");
    } catch (error) {
        return res.send("insert khong thanh cong")
    }

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
    try {
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
        const email = helper.checkEmail(checkEmailExist , data.id);

        if(checknullinput == false && helperEmail == true && email == true){
            await db.updateData(data);   
            return res.send("update thanh cong");
        }else return res.send("update khoong thanh cong");
    } catch (error) {
        return res.send(error)
    }
 };

/**
 * controller xu li logic
 */
const nhanvien = {
    getdata: getdata,
    create: create,
    getDelete : getDelete,
    postUpdate: postUpdate,
}

module.exports = nhanvien;

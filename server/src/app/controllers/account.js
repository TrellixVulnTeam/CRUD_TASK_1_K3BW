const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReqAccount');
const db = require('../models/account');

async function login(req, res) {
    try {
        const data = req.body;
        if(db.checklogin(data)){
            return res.send(await db.checklogin(data));
        };
        return res.send("khong thanh cong")

        // return res.send(await db.getAll(param));
    } catch (error) {
        return res.send(error);
    }
    
};
async function getall(req, res) {
    try {
        const param = req.query.pages;
        return res.send(await db.getAll(param));
    } catch (error) {
        return res.send(error);
    }
    
};
async function create(req, res) {
    try {
        const data = req.body;
        await db.insertData(data)
        return res.send("insert thanh cong")
    } catch (error) {
        return res.send(error.message);
    }

};

async function getDelete(req, res){
    try {
        await db.deleteFindID(req.params.id);
        return res.send("xoa thanh cong");
    } catch (error) {
        console.log('Error:controller delete', error);
        return {status: 'error', message: 'Duplicate'};
    }
};
async function forgotpassword(req, res) {
    try {
        const data = req.body.email;
        return res.send(await db.checkemail(data))
    } catch (error) {
        return res.send("");
    }

};
async function setkey(req, res) {
    try {
        const data = req.body;
        return res.send(await db.checkkey(data))
    } catch (error) {
        return res.send("");
    }

};

/**
 * controller xu li logic
 */
const account = {
    login: login,
    getall: getall,
    create: create,
    getDelete: getDelete,
    forgotpassword: forgotpassword,
    setkey: setkey,
}

module.exports = account;

const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReqAccount');
const db = require('../models/account');

async function login(req, res) {
    try {
        const data = req.body;
        console.log('bien:' ,data);
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
        // console.log(await db.getAll(param));
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
    // console.log("aaaa");
    try {
        await db.deleteFindID(req.params.id);
        return res.send("xoa thanh cong");
    } catch (error) {
        console.log('Error:controller delete', error);
        return {status: 'error', message: 'Duplicate'};
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
}

module.exports = account;

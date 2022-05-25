const knex = require('../../config/db/knexfile');
const helper = require('../validate/helperReqAccount');
const db = require('../models/account');

async function login(req, res) {
    try {
        const data = req.body;
        // console.log('bien:' ,await db.checkemail(data));
        if(db.checkemail(data)){
            return res.send(await db.checkemail(data));
        };
        return res.send("khong thanh cong")

        // return res.send(await db.getAll(param));
    } catch (error) {
        return res.send(error);
    }
    
};

/**
 * controller xu li logic
 */
const account = {
    login: login,
}

module.exports = account;

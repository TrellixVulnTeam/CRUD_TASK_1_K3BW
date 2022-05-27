const knex = require('../../config/db/knexfile');
const joi = require('joi');
const schemaValidate = require('../validate/helperReqNhanVien');


async function getAll(page){
    const starsFrom = (page - 1) * 5;
    const datalength =  await knex.from('nhanvien').select('*');
    if((datalength.length % 5) != 0){
        lengthrow = Math.floor(datalength.length/5 + 1);	
    }else{
        lengthrow = Math.floor(datalength.length/5);
    }
    return (data = {
        datarow: await knex.from('nhanvien').select('*').limit('5').offset(starsFrom),
        page: lengthrow,
    });
}

async function insertData(req){
    return (await knex('nhanvien').insert(req));
}

async function deleteFindID(id){
    const checkAccount = await knex('account').where('idNV', id).first();
    console.log(checkAccount);
    if(!checkAccount){
        await knex('nhanvien')
        .del()
        .where('id', id)
        .then( function (result) {
                // respond back to request
         })
        return "delete thanh cong"
    }else return "delete khoong thanh cong"
    
}

async function updateData(req){
    return(await knex('nhanvien').update(req).where('id', req.id ));
}

/**
 * xu li du lieu
 */
const nhanvien = {
    getAll : getAll,
    insertData: insertData,
    deleteFindID: deleteFindID,
    updateData: updateData,
};

module.exports = nhanvien;

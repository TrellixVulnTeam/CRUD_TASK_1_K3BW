const knex = require('../../config/db/knexfile');

async function getAll(){
    const data =await knex.from('nhanvien').select('*');
    return data;
}
async function insertData(req){
    try {
        await knex('nhanvien').insert(req);
        return {status: 'success'};
    } catch (error) {
        console.log('Error: insertData', error);
        return {status: 'error', message: 'Duplicate'};
    }

}
async function deleteFindID(id){
    knex('nhanvien')
    .del()
    .where('id', id)
    .then( function (result) {
            // respond back to request
     })
}
async function updateData(req){
    try {

        await knex('nhanvien').update(req).where('id', req.id )
        return {status: 'success'};
    } catch (error) {
        console.log('Error: updateData', error);
        return {status: 'error', message: 'Duplicate'};
    }
}

const nhanvien = {
    getAll : getAll,
    insertData: insertData,
    deleteFindID: deleteFindID,
    updateData: updateData,
};

module.exports = nhanvien;

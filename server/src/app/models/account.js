const knex = require('../../config/db/knexfile');



async function checkemail(data){
    // console.log(await knex.from('account').select('*').whereIn(['email', 'password'], [[data.email, data.password]]));
    return (await knex.from('account').select('*').whereIn(['email', 'password'], [[data.email, data.password]]));
}



/**
 * xu li du lieu
 */
const account = {
    checkemail : checkemail,
};

module.exports = account;

const knex = require('../../config/db/knexfile');
const nhanvien = require('./nhanvienModel');


async function loc_xoa_dau(str) {
    // Gộp nhiều dấu space thành 1 space
    str = str.replace(/\s+/g, ' ');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
    str = str.trim();
    // bắt đầu xóa dấu tiếng việt  trong chuỗi
     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
     str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
     str = str.replace(/đ/g, "d");
     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
     str = str.replace(/Đ/g, "D");
     return str;
 }
 async function createEmailNV(req){

    const nameNV = (req.name).split(" ");
    let emailNV = nameNV[nameNV.length - 1];
    for(let i = 0; i < nameNV.length - 1; i++){
        emailNV = (emailNV.concat(nameNV[i][0]));
    }
    const xoadau =await loc_xoa_dau(emailNV);
    const str =  xoadau.toLowerCase() + req.id + "@gmail.com";
    if(await checkemail(str)){
        return false;
    }else{
        return str;
    }
}
async function createToken(reqNV, reqPB){
    const nameNV = (reqNV.name).split(" ");
    let emailNV = nameNV[nameNV.length - 1];
    for(let i = 0; i < nameNV.length - 1; i++){
        emailNV = (emailNV.concat(nameNV[i][0]));
    }
    const xoadau =await loc_xoa_dau(emailNV);
    const str =  xoadau.toLowerCase() + "#" + reqNV.id + "#" + reqPB.tenphongban + "#FPTTelecom#DataCenter";
    console.log("token", str);
    return str;
}
async function getRandomInt(max) {
    return Math.floor(Math.random() * max) + "FPT";
  }
async function checkemail(req){
    console.log("checkemail", req);

    checkmail = await knex.from('account').select('*').where('email', req).first();
    key = await getRandomInt(1000000);
    if(checkmail){
    await knex('account').update('key' , key).where('id', checkmail.id);
        return key;
    }else {
        return "";
        throw new Error('khong thanh cong')
    }
}
async function checklogin(data){
    return (await knex.from('account').select('*').whereIn(['email', 'password'], [[data.email, data.password]]));
}
async function getAll(page){
    const starsFrom = (page - 1) * 5;
    const datalength =  await knex.from('account').select('*');
    if((datalength.length % 5) != 0){
        lengthrow = Math.floor(datalength.length/5 + 1);	
    }else{
        lengthrow = Math.floor(datalength.length/5);
    }
    return (data = {
        datarow: await knex.select('*','account.id','account.email').from('account')
                .leftJoin('nhanvien', 'account.idNV', 'nhanvien.id')
                .leftJoin('phongban', 'account.idPB', 'phongban.id')
                .limit('5').offset(starsFrom)
                ,
        page: lengthrow,
        dataNV:  await knex.select('*').from('nhanvien'),
        dataPB:  await knex.select('*').from('phongban'),
    });
}
async function insertData(req){
    console.log("insertData 1" ,req.idNV);

    const nhanvien = await knex('nhanvien').select('*').where('id', req.idNV).first();
    const  phongban = await knex('phongban').select('*').where('id', req.idPB).first();
    const emailNV = await createEmailNV(nhanvien);
    const token = await createToken(nhanvien, phongban);
    const password = await createEmailNV(nhanvien);
    const data = {
        idNV : req.idNV,
        idPB : req.idPB,
        email : emailNV,
        password : password,
        token : token, 
    };
    console.log(data);
    if(emailNV != false){
        return (await knex('account').insert(data));
    } else {
        throw new Error('khong thanh cong')
    }
}
async function deleteFindID(id){
    return(await knex('account')
    .del()
    .where('id', id)
    .then( function (result) {
            // respond back to request
     }))
}
async function checkkey(req){
    const checkmail = await knex('account').select('*').where('key', req.key).first();
    if(checkmail){
        if(req.newpassword == req.renewpassword){
            await knex('account').update('password' , req.newpassword).where('id', checkmail.id);
        }
        await knex('account').update('key' , "").where('id', checkmail.id); 
        return checkmail;
    }else {
        throw new Error('khong thanh cong')
    }
}

/**
 * xu li du lieu
 */
const account = {
    checkemail : checkemail,
    checklogin: checklogin,
    getAll: getAll,
    insertData: insertData,
    deleteFindID : deleteFindID,
    checkkey : checkkey,
};

module.exports = account;


/**
*ham kiem tra input co phai la email hay khong
*/
function checkNullInput(req){
    const dataReq = Object.values(req)
    const reqdata = /^\s*$/
    for(let i in dataReq) {
        if(!reqdata.test(dataReq[i]) == false){
            return true;
        }
    };
    return false;
    // const reqdata = /^\s*$/
    // return !reqdata.test(req);
    // forEach(arrReq, function(element){
    //     if(!reqdata.test(element) == false){
    //         return false;
    //     }
    // });
    // req.forEach(value => {
    //     if(!reqdata.test(value) == false){
    //         return false;
    //     }
    // });
};
function helperEmail(req){
    // const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const emailRegexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    return emailRegexp.test(req);
};
function checkEmail(req , id){
    if(req){
        if(req.id == id) return true;
        else return false;
    }else return true;
}



/**
 * validate request...
 */
const helper = {
    helperEmail : helperEmail,
    checkNullInput: checkNullInput,
    checkEmail : checkEmail,
}

module.exports = helper;

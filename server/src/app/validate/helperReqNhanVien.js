function helperEmail(req){
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
    checkEmail : checkEmail,
}

module.exports = helper;

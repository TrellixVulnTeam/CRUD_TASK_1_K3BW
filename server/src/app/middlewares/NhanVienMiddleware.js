const Joi = require('joi');

function schemaformNV(req,res,next){
    const schema = Joi.object({
        name: Joi.string().required(),
        age:  Joi.number().required(),
        sex: Joi.string().required(),
        date:  Joi.date().required(),
        email:  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

        address:  Joi.string().required(),
    });
    const {error, value } =  schema.validate(req.body);
    if(error) return res.send(error.message);
    else return next();

}
function schemaformupdateNV(req,res,next){
    const data = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
    }
    const schema = Joi.object({
        name: Joi.string().required(),
        age:  Joi.number().required(),
        email:  Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        address:  Joi.string().required(),
    });
    const {error, value } =  schema.validate(data);
    if(error) return res.send(error.message);
    else return next();

}

/**
 * middleware request...
 */
const nhanvienmiddleware = {
    schemaformNV: schemaformNV,
    schemaformupdateNV: schemaformupdateNV,
}

module.exports = nhanvienmiddleware;
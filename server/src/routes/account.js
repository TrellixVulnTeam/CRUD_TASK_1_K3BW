const Express = require("express");
const accountController = require("../app/controllers/account");
const router = Express.Router();

router.post('/login',accountController.login);
router.get('/listaccount',accountController.getall);
router.post('/create',accountController.create);
router.delete('/delete/:id',accountController.getDelete);
router.post('/forgotpassword',accountController.forgotpassword);
router.post('/setkey',accountController.setkey);




module.exports = router;

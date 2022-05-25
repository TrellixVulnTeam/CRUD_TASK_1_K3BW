const Express = require("express");
const accountController = require("../app/controllers/account");
const router = Express.Router();

router.post('/login',accountController.login);

module.exports = router;

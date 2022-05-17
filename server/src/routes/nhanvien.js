const Express = require("export");
const nhanvienController = require("../app/controllers/nhanvienController");
const nhanvienC = new nhanvienController;
const router = Express.Router();

router.get('/listdata',nhanvienC.listdata)


module.exports = router;
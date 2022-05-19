const Express = require("express");
const nhanvienController = require("../app/controllers/nhanvienController");
const router = Express.Router();

router.get('/listdata',nhanvienController.getdata);
router.post('/create',nhanvienController.create)
router.delete('/delete/:id',nhanvienController.getDelete)
router.post('/update',nhanvienController.postUpdate)




module.exports = router;

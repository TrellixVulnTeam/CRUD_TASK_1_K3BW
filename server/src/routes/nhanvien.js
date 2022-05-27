const Express = require("express");
const nhanvienController = require("../app/controllers/nhanvienController");
const middlewarenhanvien = require("../app/middlewares/NhanVienMiddleware");
const router = Express.Router();

router.get('/listdata',nhanvienController.getdata);
router.post('/create',middlewarenhanvien.schemaformNV,nhanvienController.create)
router.delete('/delete/:id',nhanvienController.getDelete)
router.post('/update',middlewarenhanvien.schemaformupdateNV,nhanvienController.postUpdate)

module.exports = router;

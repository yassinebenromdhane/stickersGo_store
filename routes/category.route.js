const router = require('express').Router()
const categoryCtrl = require('../controller/categoryCtrl');

router.post("/",categoryCtrl.postCategory)
router.get("/",categoryCtrl.getAll)
router.get("/:id",categoryCtrl.getOne)
router.delete("/:id",categoryCtrl.deleteOne)
router.put("/:id",categoryCtrl.updateOne)



module.exports = router
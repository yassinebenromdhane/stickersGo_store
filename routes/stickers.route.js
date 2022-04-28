const router = require('express').Router()
const stickerCtrl = require('../controller/stickerCtrl');

router.post("/",stickerCtrl.postSticker)
router.get("/",stickerCtrl.getAll)
router.get("/:id",stickerCtrl.getOne)
router.delete("/:id",stickerCtrl.deleteOne)
router.put("/:id",stickerCtrl.updateOne)

module.exports = router
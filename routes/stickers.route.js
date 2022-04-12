const router = require('express').Router()
const stickerCtrl = require('../controller/stickerCtrl');

router.post("/",stickerCtrl.postSticker)

module.exports = router
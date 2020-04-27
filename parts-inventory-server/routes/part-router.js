const express = require('express')

const PartCtrl = require('../controller/part-ctrl')

const router = express.Router()

router.post('/part', PartCtrl.createPart)
router.put('/part/:id', PartCtrl.updatePart)
router.delete('/part/:id', PartCtrl.deletePart)
router.get('/part/:id', PartCtrl.getPartById)
router.get('/parts', PartCtrl.getParts)

module.exports = router
const express = require("express");
const { ctrlWrapper, upload } = require("../../middlewares");

const {
    addHero,
    getAll,
    getById,
    removeById,
    updateById
} = require("../../controllers");

const router = express.Router();

router.post("/", upload.single('image'), ctrlWrapper(addHero));
router.get('/', ctrlWrapper(getAll));
router.get('/:id', ctrlWrapper(getById));
router.delete('/:id', ctrlWrapper(removeById));
router.put('/:id/update', upload.single('image'), ctrlWrapper(updateById));



module.exports = router;
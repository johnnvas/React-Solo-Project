const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Image } = require('../../db/models');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll()

    return res.json(images)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { imageUrl, userId, caption } = req.body;
    await Image.create({
        imageUrl,
        userId,
        caption
    })
}))


router.delete('/', asyncHandler(async (req, res) => {
    const { id } = req.body

    await Image.destroy({
        where: {
            id
        }
    })
}))


module.exports = router;

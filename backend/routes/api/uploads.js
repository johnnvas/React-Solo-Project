const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Image, Album } = require('../../db/models');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll({
        include: [User]
    })

    return res.json(images)
}))

router.post('/', asyncHandler(async (req, res) => {
    // console.log("HEEEEEEEEEREEEEEEEEEEEEE!!!!!!!!!!")
    const { imageUrl, userId, caption, albumId, location } = req.body;
    const uploadImage = await Image.create({
        imageUrl,
        userId,
        caption,
        location,
        albumId
    })
    // console.log("I am HEEEEEREEEEE!!!!!!!!!!!!", uploadImage)
    return res.json(uploadImage);
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

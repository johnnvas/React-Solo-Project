const express = require('express');
const asyncHandler = require('express-async-handler');

// const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Image, Comment} = require('../../db/models');


// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll({
        include: [User]
    })

    return res.json(images)
}))

router.post('/', asyncHandler(async (req, res) => {
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

router.patch('/', asyncHandler(async (req, res) => {
    const { caption, id } = req.body
    const image = await Image.findByPk(id)

    const newImage = await image.update({ caption })
    console.log("HEEEERRREEEEEE", newImage)

    return res.json(newImage)
}))


router.delete('/', asyncHandler(async (req, res) => {
    const { id } = req.body
    await Comment.destroy({

        where:{imageId: id}
    })
    const deleteImage = await Image.destroy({
        where: {
            id
        }
    })
    res.json(deleteImage)
}))


module.exports = router;

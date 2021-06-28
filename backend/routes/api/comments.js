const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Image, Comment} = require('../../db/models');


const router = express.Router()

//CREATE
router.post('/', asyncHandler(async (req, res) => {
    const { userId, imageId, comment } = req.body
    let comment1 = await Comment.create({userId, imageId, comment})
    return res.json(comment1)
}))


//READ
router.get('/:id', asyncHandler(async (req, res) => {
    const {id}= req.params
    const comment2 = await Comment.findAll({
        where: {imageId: id}
    });

     res.json(comment2)
}))

//DELETE
router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const comment3 = await Comment.destroy({
        where: { id }
    })
    return res.json(comment3)
}))

//UPDATE
router.patch('/:id', asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);

    // const { id } = req.params;
    // const newId = parseInt(id);
    const { comment } = req.body;
    const changeComment = await Comment.findByPk(commentId);

    const response = await changeComment.update({ comment });
    // console.log("HEEEERRREEEEEE", changeComment)
    res.json(response);

}))


module.exports = router;

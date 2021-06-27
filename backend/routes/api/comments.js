const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Image, Comment} = require('../../db/models');


const router = express.Router()

//CREATE
router.post('/:id', asyncHandler(async (req, res) => {
    const { userId, imageId, comment } = req.body
    let comment1 = await Comment.create(userId, imageId)
    return res.json(comment1)
}))

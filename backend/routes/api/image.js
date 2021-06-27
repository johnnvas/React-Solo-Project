const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Image} = require('../../db/models');


const router = express.Router()

router.get('/:id', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const image = await Image.findByPk(id)

    return res.json(image)
}))

module.exports= router;

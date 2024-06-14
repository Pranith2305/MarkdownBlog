const express = require('express');
const mongoose = require('mongoose');
const articles = require('../models/articles');
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new');
})

router.get('/:id', (req, res) => {

})

//To save the created article in DB
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (error){
        res.render('article/new', {article: article})//gives the previous article only incase of any errors 
        
    }
})
module.exports = router
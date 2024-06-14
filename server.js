const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: false}))

const articleRouter = require('./routes/article')

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})//By this statement we are connected to the database 

app.set('view engine', 'ejs')
app.use('/articles', articleRouter);


app.get('/', (req,res) => {
    const articles =[{
        title: "test article1",
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: "test article2",
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('articles/index', {articles :articles});
});

app.listen(5000)



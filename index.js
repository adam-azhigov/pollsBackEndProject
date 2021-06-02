const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const pollsRoutes = require('./routes/pollBackEnd')
const Polls = require('../models/Polls')
const Answer = require('../models/Answer')

app.use(todoRoutes);

app.get('/', async (req, res) => {
    const polls = await Polls.find({}).lean()
    res.json(polls)
})

app.post('/post', async (req, res) => {
    const pollPost = new Polls({
        pollsName: req.body
    })
    await pollPost.save()
    res.json(pollPost)
})

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Mutaliev:Intocode@cluster0.chyad.mongodb.net/pollsBackEnd', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => {
            console.log('Сервер запущен...')
        })
    } catch (e) {
        console.log(e)
    }
}

start();
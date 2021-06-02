const express = require('express');
const mongoose = require('mongoose');
const pollsRoutes = require('./routes/polls')
const Polls = require('../models/Polls')
const Answer = require('../models/Answer')
const app = express();
const port = 3000;

app.use(pollsRoutes);

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
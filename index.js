const express = require('express');
const mongoose = require('mongoose');
const pollsRoutes = require('./routes/polls')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))

app.use(pollsRoutes);


async function start () {
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
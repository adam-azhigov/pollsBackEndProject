const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos')

app.use(todoRoutes);

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
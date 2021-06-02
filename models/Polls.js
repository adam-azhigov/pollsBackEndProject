const {Schema, model} =require('mongoose');
const schema = new Schema({
    pollName: String
})

module.exports = model('polls', schema)

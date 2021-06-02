const { Schema, model } = require('mongoose');
const schema = new Schema({
    title: {
        type: String
    },
    poll: {
        ref: 'polls',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('Answer', schema)
const Schema = require('mongoose');
const schema = new Schema({
    title: String,
    poll: {
        ref: 'polls',
        type: Schema.Types.ObjectId
    }
})

module.exports('answer', schema)
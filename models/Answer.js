const {Schema, model} =require('mongoose');
const schema = new Schema({
    title: String,
    poll: {
        ref: 'polls',
        type: Schema.Types.ObjectId
    }
})

module.exports('Answer', schema)
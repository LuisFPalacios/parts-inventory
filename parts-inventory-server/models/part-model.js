const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Part = new Schema(
    {
        name:{type: String, required: true},
        price:{type:  Number},
        description:{type:String},
        compatibility:{type: String},
        count:{type:Number}
    },
    {timestamps: true}
)

module.exports = mongoose.model('parts', Part)
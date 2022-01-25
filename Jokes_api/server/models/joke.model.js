const mongoose = require('mongoose')

const JokeSchema= new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"You have to set this joke up"],
        minlength:10
    },
    punchline:{
        type:String,
        required:[true,"better make it punchy witha puchline"],
        minlength:3
    }
})

const Joke = mongoose.model('Joke',JokeSchema)


module.exports = Joke;
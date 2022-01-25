const Joke = require('../models/joke.model')


module.exports.newJoke = (req,res)=>{
    Joke.create(req.body)
    .then( (jokeInfo) =>{
        res.json({results:jokeInfo})
    })
    .catch((err)=> res.json( {msg:'there is an issue with creating a new Joke',error:err}))
}

module.exports.deleteJoke = (req,res)=>{
    Joke.findByIdAndDelete(req.params.id)
    .then(delJoke =>{res.json({results:delJoke})})
    .catch((err)=> res.json( {msg:'there is an issue with deleting the Joke',error:err}))
}

module.exports.updateJoke = (req,res)=>{
    Joke.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators: true })
    .then((updateJoke) =>{
        res.json({results:updateJoke})
    })
    .catch((err)=> res.json( {msg:'there is an issue with updating the Joke',error:err}))

}

module.exports.jokeById = (req,res) =>{
    Joke.findById(req.params.id)
    .then(aJoke=>{
        res.json({results:aJoke})
    })
    .catch((err)=> res.json( {msg:'there is an issue with finding that ID',error:err}))
}

module.exports.allJokes = (req,res) =>{
     
    Joke.find()    
    .then(allJokes => {        
        res.json({count:allJokes.length,results:allJokes})
    })
    .catch((err)=> res.json( {msg:'there is an issue getting the Jokes',error:err}))
}

module.exports.random = (req,res) =>{
    let jokeNum; 
    Joke.find()    
    .then(allJokes => { 
    
       jokeNum= Math.round((allJokes.length-1)*Math.random())
       console.log(`jokeNumber is: ${jokeNum}`);
        res.json({count:allJokes.length,results:allJokes[jokeNum]})
    })
    .catch((err)=> res.json( {msg:'there is an issue getting the Jokes',error:err}))
}
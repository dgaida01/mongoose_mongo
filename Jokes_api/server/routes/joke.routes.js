const JokeController = require('../controllers/joke.controller')

module.exports=(app)=>{
    app.get('/api/jokes/random',JokeController.random)
    app.post('/api/jokes/new',JokeController.newJoke)
    app.get('/api/jokes',JokeController.allJokes)
    app.get('/api/jokes/:id',JokeController.jokeById)
    app.put('/api/jokes/update/:id',JokeController.updateJoke)
    

}
const express = require('express');//imports experss
const port = 8000; //var for establishing port connection to listen on
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//establish connection to mongoDB server
require('./server/config/config');

require('./server/routes/joke.routes')(app)



app.listen(port,()=> console.log(`listening on port: ${port}`));
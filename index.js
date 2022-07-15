const express = require('express');

const connect = require('./configs/db');

const moviesController = require("./controllers/movies.controller")

const { register, login } = require("./controllers/auth.controller")

const app = express();

app.use(express.json());

app.use("/movies",moviesController);
app.use("/movies/:id",moviesController);

app.post("/register", register);

app.post("/login", login);


app.listen(process.env.PORT || 9000, async () => {
    try{
        await connect();
        console.log('Listening on Port 9000');
    }
    catch(err)
    {
        console.log(err.message);
    }
});
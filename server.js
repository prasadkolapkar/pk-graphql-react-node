const express = require("express");

const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

app.listen(4000, ()=> {
    console.log("listening")
})
const express = require("express")
const es6Renderer = require('express-es6-template-engine')
const app = express();
const port = "3000";

const db = require('./model/db')
//console.log(db)



const indexRouter = require("./routes/index")
const showsRouter = require("./routes/shows")

// VIEW ENGINE SETUP 
// app.engine()
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// ROUTES
// any route that has / you use the router 

app.use("/", indexRouter)
app.use("/shows", showsRouter)


// END ROUTES

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
}) 
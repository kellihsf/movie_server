// this is a router file, has access to all of the shows routes
// has multiple routes in this file 
const express = require("express")
const router = express.Router()  // this line declares that this is a route
const db = require('../model/db')

router.get("/", function (req, res, next) {
    res.render("shows", {
        locals: {
            title: "List of Movies/Shows",
            path: req.path,
            showsData: db,
            shows: `<h2>rendered show data</h2>`
        },
        partials: {
            details: "partials/details"
        }
    })
})

router.get("/titles", function (req, res, next) {

    const movieTitles = db.map(movie => movie.Title)
    console.log(movieTitles)
    // res.send(movieTitles)
    res.render("movie-titles", {
        locals: {
            movieTitles: movieTitles
        }
    })



    // const {title} = req.params;
    // find -> loops through an array and returns a single object where the condition is true
    // const movie = db.find((movie) => movie.Title === title)
    // let response
    // console.log("first response: ", response)
    // if (movie) {
    //     response = movie.Plot //if there is no movie match, will go to the next else 
    //     console.log("2nd response:", response)
    // } else {
    //     response = ""
    //     console.log("3rd response:", response)
    // }
    // res.send(response)
})

module.exports = router;
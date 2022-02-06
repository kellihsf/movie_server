const express = require("express")
const db = require("../model/db")
const router = express.Router()

// GET home page 
// 'next' is middleware, function that can be fired off in the middle of req/res. Next sends on the chain. 'next' is declared but its value is never read.

router.get("/", function (req, res, next) {
    res.render ('index', 
    {locals: {title: "Movies Express", 
    subtext: "These are words"}})
})

// to import a file, you have to export a file
module.exports = router;
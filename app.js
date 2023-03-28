const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

const listItems = ["Buy Food", "Cook Food", "Eat Food"]
const workItems = []

app.listen(3000, () => {
    console.log("Server is listenig on port 3000")
})

app.get("/", (req, res) => {

    res.render("list", {
        listTitle: date.getDay(),
        newItem: listItems,
    })

})

app.post("/", (req, res) => {

    if (req.body.list === "Work") {
        workItems.push(req.body.newItem)
        res.redirect("/work")
    } else {
        listItems.push(req.body.newItem)
        res.redirect("/")
    }

})

app.get("/work", (req, res) => {

    res.render("list", {
        listTitle: "Work List",
        newItem: workItems,
    })

})
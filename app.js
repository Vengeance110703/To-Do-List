const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

let listItems = ["Buy Food", "Cook Food", "Eat Food"]
let workItems = []

app.listen(3000, () => {
    console.log("Server is listenig on port 3000")
})

app.get("/", (req, res) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();
    let day = weekday[d.getDay()]

    res.render("list", {
        listTitle: day,
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
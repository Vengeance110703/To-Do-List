const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.listen(3000, () => {
    console.log("Server is listenig on port 3000")
})

app.get("/", (req, res) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    console.log(d);
    var day = weekday[d.getDay()]

    res.render("list", { day: day })
})
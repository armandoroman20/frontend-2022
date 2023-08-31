import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>"
    };

    if (data.seconds % 2 === 0) {
        data.items;
    } else {
        "No items to display";
    }
    
        res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`server running on ${port}.`)
});
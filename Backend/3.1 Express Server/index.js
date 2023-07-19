import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello World");
});

app.listen(3000, () => {
    console.log(`Server irunning on port ${port}.`);
});
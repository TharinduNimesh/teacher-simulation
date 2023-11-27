import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.redirect("http://localhost:3000");
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
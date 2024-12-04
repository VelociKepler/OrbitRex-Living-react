import express from "express";
import app from "../src/App.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.render("index");
})

const port = process.env.PORT || 3000;
app.listen(port);
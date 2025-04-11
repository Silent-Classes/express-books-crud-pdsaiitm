const express = require("express");
const { getBooks, addBook } = require("../controller/bookController");

const router = express.Router();

// Define the routes for books

router.get("/", getBooks);
router.post("/", addBook);

module.exports = router;

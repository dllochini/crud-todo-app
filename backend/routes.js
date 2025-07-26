const express = require('express');

//create route instance
const router = express.Router();

//retrieve details from db
router.get("/todos", (req, res) => {
    res.status(200).json({ msg: "GET todos /api/todos" });
})

//create new task and save it to the db
router.post("/todos", (req, res) => {
    res.status(200).json({ msg: "POST todos /api/todos" });
})

//edit a task and save back to the db
router.put("/todos/:id", (req, res) => {
    res.status(200).json({ msg: "PUT todos /api/todos" });
})

//delete a task
router.delete("/todos/:id", (req, res) => {
    res.status(200).json({ msg: "DELETE todos /api/todos" });
})

module.exports = router;

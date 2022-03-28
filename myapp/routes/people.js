var express = require('express');
var router = express.Router();

const {
    getAllPeople,
    createPerson,
} = require("./people/controller/peopleController");

router.get("/get-all-people", getAllPeople);
router.post("/create-person", createPerson);

module.exports = router;
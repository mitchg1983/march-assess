var express = require('express');
var router = express.Router();

const {
    getAllPeople,
    createPerson,
    updatePerson,
} = require("./people/controller/peopleController");

router.get("/get-all-people", getAllPeople);
router.post("/create-person", createPerson);
router.put("/update-person", updatePerson);

module.exports = router;
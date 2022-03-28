var express = require('express');
var router = express.Router();

const {
    getAllPeople,
    createPerson,
    updatePerson,
    getOnePerson,
    deletePerson,
} = require("./people/controller/peopleController");

router.get("/get-all-people", getAllPeople);
router.post("/create-person", createPerson);
router.put("/update-person", updatePerson);
router.get("/get-one-person/:id", getOnePerson);
router.delete("/delete-person/:id", deletePerson);

module.exports = router;
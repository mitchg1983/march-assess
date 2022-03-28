const People = require("../model/peopleModel");

const getAllPeople = async (req, res) => {
    console.log("Beginning getAllPeople");
  try {
    let allPeople = await People.find();
    res.status(200).json({
      payload: allPeople,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createPerson = async (req, res) => {
    try {
      console.log(req.body);
      const { name, age, favoriteMovies } = req.body;
      const newPerson = new People({
        name: name,
        age: age,
        favoriteMovies: favoriteMovies,
      });
      const savedPerson = await newPerson.save();
      res.status(200).json({
        message: "New person was saved",
        payload: savedPerson,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(500).json({
          message: error,
          error: `duplicate?`,
        });
      }
      res.json({
        message: "There is an error......",
        error: error.errors,
      });
    }
  };
  

module.exports = {
    getAllPeople,
    createPerson,
};

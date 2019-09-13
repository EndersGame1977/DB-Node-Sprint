const express = require("express");

const Projects = require("./projects-modules.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

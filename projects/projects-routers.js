const express = require("express");

const Projects = require("./projects-modules.js");

const router = express.Router();

// Retrieving a list of projects.
router.get("/projects", (req, res) => {
  Projects.findAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Retrieving a list of resources.
router.get("/resources", (req, res) => {
  Projects.findAllResources()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});
// Retrieving a list of tasks. The list of tasks should include the project name and project description.
router.get("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.findAllTasksForProjectID(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

// [ ] adding resources.

// [ ] adding projects.

// [ ] adding tasks.

// [ ] When returning project or task information, the completed property should be true or false.

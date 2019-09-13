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

router.get("/tasks", (req, res) => {
  Projects.findAllTasks()
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
  //const test = res.body;

  Projects.findAllTasksForProjectID(id)
    .then(tasks => {
      for (let task in tasks) {
        //console.log(task);

        if (tasks[task].completed === 1) {
          tasks[task].completed = true;
        } else if (tasks[task].completed === 0) {
          tasks[task].completed = false;
        }
        console.log(tasks[task].completed);
      }
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Adding projects
router.post("/projects", (req, res) => {
  const projectsData = req.body;
  Projects.addProjects(projectsData)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Adding resources.
router.post("/resources", (req, res) => {
  const resourcesData = req.body;
  Projects.addResources(resourcesData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Adding tasks
router.post("/projects/:id/tasks", (req, res) => {
  const tasksData = req.body;
  const { id } = req.params;
  Projects.addTasksForProjectID(id, tasksData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

// [ ] When returning project or task information, the completed property should be true or false.

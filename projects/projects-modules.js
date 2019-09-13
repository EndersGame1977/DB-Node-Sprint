const db = require("../.data/db-config.js");

module.exports = {
  findAllProjects,
  findAllResources,
  findAllTasks,
  findAllTasksForProjectID,
  addProjects,
  addResources,
  addTasksForProjectID
};

function findAllProjects() {
  return db("projects");
}

function findAllResources() {
  return db("resources");
}

function findAllTasks() {
  return db("tasks");
}

function findAllTasksForProjectID(id) {
  return db("projects")
    .join("tasks", "projects.id", "tasks.projects_id")
    .where("projects.id", id)
    .select(
      "projects.projectName",
      "projects.description",
      "tasks.step",
      "tasks.description",
      "tasks.completed"
    )
    .orderBy("step");
}

function addProjects(projectsData) {
  return db("projects").insert(projectsData);
}

function addResources(resourcesData) {
  return db("resources").insert(resourcesData);
}

function addTasksForProjectID(id, tasksData) {
  return db("tasks")
    .join("projects", "tasks.projects_id", "projects.id")
    .where("tasks.projects_id", id)
    .insert(tasksData)
    .select(
      "projects.projectsName",
      "tasks.step",
      "tasks.description",
      "tasks.completed"
    );
}

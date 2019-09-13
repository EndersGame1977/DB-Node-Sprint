const db = require("../.data/db-config.js");

module.exports = {
  findAllProjects,
  findAllResources,
  findAllTasksForProjectID
};

function findAllProjects() {
  return db("projects");
}

function findAllResources() {
  return db("resources");
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

const db = require("../.data/db-config.js");

module.exports = {
  findAllProjects,
  findAllResources
};

function findAllProjects() {
  return db("projects");
}

function findAllResources() {
  return db("resources");
}

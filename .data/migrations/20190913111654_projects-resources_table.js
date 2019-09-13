exports.up = function(knex) {
  return knex.schema.createTable("projects-resources", column => {
    column
      .integer("projects_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE") // if the PK record is deleted
      .onUpdate("CASCADE"); // if the PK value updates
    column
      .integer("resources_id")
      .unsigned()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE") // if the PK record is deleted
      .onUpdate("CASCADE"); // if the PK value updates

    column.primary(["projects_id", "resources_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects-resources");
};

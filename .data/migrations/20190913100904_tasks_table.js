exports.up = function(knex) {
  return knex.schema.createTable("tasks", column => {
    column.increments(); // Unique ID
    column.string("description").notNullable(); // Description is required
    column.string("notes"); // Notes is not required
    column
      .boolean("completed")
      .notNullable()
      .defaultTo(false); // Completed is required and default set to false
    // Forgien key
    column
      .integer("projects_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE") // if the PK record is deleted
      .onUpdate("CASCADE"); // if the PK value updates
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists("tasks");
};

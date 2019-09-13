exports.up = function(knex) {
  return knex.schema.createTable("tasks", column => {
    column.increments(); // Unique ID
    column.string("description").notNullable(); // Description is required
    column.string("notes"); // Notes is not required
    column.integer("projects_id").notNullable(); //Used to join to projects table
    column
      .boolean("completed")
      .notNullable()
      .defaultTo(false); // Completed is required and default set to false
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists("tasks");
};

exports.up = function(knex) {
  return knex.schema.createTable("projects", column => {
    column.increments(); // Unique ID
    column
      .string("projectName")
      .notNullable()
      .unique(); // Name is required and unique
    column.string("description"); // Description is not required
    column
      .boolean("completed")
      .notNullable()
      .defaultTo(false); // Completed is required and default set to false
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};

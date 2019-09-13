exports.up = function(knex) {
  return knex.schema.createTable("resources", column => {
    column.increments(); // Unique ID
    column
      .string("resourcesName")
      .notNullable()
      .unique(); // Name is required and unique
    column.string("descripton"); // description is not required
    column.integer("tasks_id").notNullable(); //Used to join to tasks table
    column
      .boolean("completed")
      .notNullable()
      .defaultTo(false); // Completed is required and default set to false
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists("resources");
};

exports.up = function(knex) {
  return knex.schema.createTable("resources", column => {
    column.increments(); // Unique ID
    column
      .string("resourcesName")
      .notNullable()
      .unique(); // Name is required and unique
    column.string("descripton"); // description is not required
    column
      .boolean("completed")
      .notNullable()
      .defaultTo(false); // Completed is required and default set to false
    // Forgien key
    column
      .integer("tasks_id")
      .unsigned()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE") // if the PK record is deleted
      .onUpdate("CASCADE"); // if the PK value updates
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};

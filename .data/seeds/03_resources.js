exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resourcesName: "screwdriver" }, // 1 and 2
        { resourcesName: "battery" }, // 1
        { resourcesName: "can of compressed air" } // 2
      ]);
    });
};

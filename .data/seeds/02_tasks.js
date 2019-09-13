exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { step: 1, description: "Turn off car.", projects_id: 1 },
        {
          step: 2,
          description:
            "Use screwdriver to disconnect terminals from old battery.",
          projects_id: 1
        },
        {
          step: 3,
          description: "Remove old battery from car.",
          projects_id: 1
        },
        { step: 4, description: "Place new battery in car.", projects_id: 1 },
        {
          step: 5,
          description: "Connect terminals to battery using screwdriver.",
          projects_id: 1
        },
        { step: 6, description: "Turn on car.", projects_id: 1 },
        { step: 1, description: "Turn off laptop.", projects_id: 2 },
        {
          step: 2,
          description:
            "Using screwdriver, remove screws holding back cover of laptop.",
          projects_id: 2
        },
        { step: 3, description: "Unplug fan.", projects_id: 2 },
        {
          step: 4,
          description: "Using can of compressed air, blow dust out of fan.",
          projects_id: 2
        },
        { step: 5, description: "Plug fan back in.", projects_id: 2 },
        {
          step: 6,
          description:
            "Using screwdriver, screw screws for back cover back in.",
          projects_id: 2
        },
        { step: 7, description: "Turn on laptop.", projects_id: 2 }
      ]);
    });
};

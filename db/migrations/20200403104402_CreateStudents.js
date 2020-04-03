exports.up = function (knex) {
  return knex.schema.createTable("students", (table) => {
    table.increments("id");
    table.string("name");
    table.text("bio");
    table.string("eyeColour");
    table.string("hairColour");
    table.string("country");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("students");
};

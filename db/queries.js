const knex = require("./connection");

// Select all students
const query1 = knex.select("*").from("students");

console.log(query1.toString());

query1.then((result) => {
  console.table(result);
  // knex.destroy();
});

// Select all students whose eyes are brown
const query2 = knex.select('*').from('students').where('eyeColour', 'ilike', 'brown');

query2.then((result) => {
  console.table(result);
  knex.destroy();
});

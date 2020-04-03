
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: "Ahmad", bio: "", eyeColour: "Black", hairColour: "black" },
        { name: "Akshay", bio: "", eyeColour: "Black", hairColour: "black" },
        { name: "Amy", bio: "", eyeColour: "Blue", hairColour: "black" },
        { name: "Ashkan", bio: "", eyeColour: "Brown", hairColour: "black" },
        { name: "Ayaka", bio: "", eyeColour: "Brown", hairColour: "black" },
        { name: "Caleb", bio: "", eyeColour: "Brown", hairColour: "Brown" },
        { name: "Helga", bio: "", eyeColour: "green", hairColour: "brown" },
        { name: "Katoora", bio: "", eyeColour: "Brown", hairColour: "black" },
        { name: "Ladan", bio: "", eyeColour: "green", hairColour: "brown" },
        { name: "Selim", bio: "", eyeColour: "amber", hairColour: "brown" },
        { name: "Sandro", bio: "", eyeColour: "brown", hairColour: "brown" },
        { name: "Shurooq", bio: "", eyeColour: "black", hairColour: "black" },
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Dione", password: "user1", department: "sales" },
        { username: "Marvin", password: "user2", department: "tech support" },
        { username: "Diane", password: "user3", department: "service delivery" }
      ]);
    });
};

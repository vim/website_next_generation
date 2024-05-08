// example migration
const strapiUrl = "http://localhost:1337/api";
const axios = require("axios");

async function getUsersFromStrapi() {
  try {
    const response = await axios.get(`${strapiUrl}/users`);
    const users = response.data;
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

async function createUser(username, email, password, old_password) {
  try {
    const response = await fetch(`${strapiUrl}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        old_pw_hash: old_password,
      }),
    });
    console.log(response);

    return await response.json();
  } catch (e) {
    console.log("something went wrong");
    console.log(e);
    return null;
  }
}

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "vim",
  database: "vim",
  password: "super-secret",
});

connection.query("SELECT * FROM `vs_users`", function (err, results, fields) {
  console.log(results);

  results.forEach((user) => {
    createUser(user.user_name, user.email, "123gege321", "old_hash")
      .then((a) => {
        console.log(a);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  console.log(fields);
});

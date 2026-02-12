const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

// In a real application, you would want to read these values from environment variables for security reasons

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DBUSERNAME,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: 5432 // The default port
});

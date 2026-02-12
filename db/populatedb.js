#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    username VARCHAR(100) NOT NULL,
    added_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO messages (text, username)
VALUES
('Hi there!', 'Amando'),
('Hello World!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@localhost:5432/${process.env.DBNAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

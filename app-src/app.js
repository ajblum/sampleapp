// from https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');
const { Client } = require('pg');

//const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 3000;

//getting pg database connection details

const pguser = process.env.PG_USER || 'myuser';
const pghost = process.env.PG_HOST || 'myhost';
const pgdb = process.env.PG_DB || 'mydb';
const pgpass = process.env.PG_PASS || 'mypass';


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


const client = new Client({
  user: pguser,
  host: pghost,
  database: pgdb,
  password: pgpass,
  port: 5432,
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


client.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the pg database!");
});


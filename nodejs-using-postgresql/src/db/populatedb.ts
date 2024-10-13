#! /usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

import { Client } from 'pg';
import { argv } from 'process';

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
  ('Trueman'),
  ('Odin'),
  ('Julia');
`;

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error('Expected 1 argument: <local-db-url>');
    return -1;
  }
  console.log('seeding...');
  const client = new Client({
    connectionString: args[0],
  });

  try {
    await client.connect();
    await client.query(SQL);
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
    console.log('done');
  }
}

main();

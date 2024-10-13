import pool from './pool';

export async function getAllUsernames() {
  const query = `SELECT * FROM usernames`;
  const { rows } = await pool.query(query);
  return rows;
}

export async function insertUsername(username: string) {
  const query = `INSERT INTO usernames (username) VALUES ($1)`;
  await pool.query(query, [username]);
}

export async function getSearchUsernames(username: string) {
  const query = `SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER('%${username}%')`;
  console.log(query);
  const { rows } = await pool.query(query);
  return rows;
}

export async function deleteAllUsernames() {
  const query = `DELETE FROM usernames`;
  const { rows } = await pool.query(query);
  return rows;
}

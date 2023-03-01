// src/sontrollers use db/index.js
const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};

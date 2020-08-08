// dbConfig.js
const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pokemon_tb',
})

module.exports = pool
const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Create Users table
db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`, (err, results) => {
    if (err) {
        console.error('Error creating Users table:', err.message);
    } else {
        console.log('Users table created or already exists.');
    }
});

// Create Friends table
db.query(`CREATE TABLE IF NOT EXISTS friends (
    user_id INT,
    friend_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
)`, (err, results) => {
    if (err) {
        console.error('Error creating Friends table:', err.message);
    } else {
        console.log('Friends table created or already exists.');
    }
});

// Create Scores table
db.query(`CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    opponent_id INT,
    score INT,
    game_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (opponent_id) REFERENCES users(id)
)`, (err, results) => {
    if (err) {
        console.error('Error creating Scores table:', err.message);
    } else {
        console.log('Scores table created or already exists.');
    }
});

module.exports = db;

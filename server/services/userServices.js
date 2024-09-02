const db = require('../db/database'); 

// Register a new user
function registerUser(email, username, password, callback) {
    const query = `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`;
    db.execute(query, [email, username, password], (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, { id: results.insertId, email, username });
        }
    });
}

// Check username availability
function checkUsernameAvailability(username, callback) {
    const query = `SELECT COUNT(*) as count FROM users WHERE username = ?`;
    db.query(query, [username], (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results[0].count === 0);
        }
    });
}

// Login a user
function loginUser(email, callback) {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results[0] || null); // Return null if no user is found
        }
    });
}

// Get user by ID
function getUserById(id, callback) {
    const query = `SELECT * FROM users WHERE id = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            callback(err);
        } else {
            callback(null, results[0] || null); // Return null if no user is found
        }
    });
}

module.exports = {
    registerUser,
    checkUsernameAvailability,
    loginUser,
    getUserById
};

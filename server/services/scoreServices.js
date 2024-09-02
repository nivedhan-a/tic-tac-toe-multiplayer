const db = require('../db/database');

// Add a new score
function addScore(userId, opponentId, score, gameDate, callback) {
    const query = `INSERT INTO scores (user_id, opponent_id, score, game_date) VALUES (?, ?, ?, ?)`;
    db.execute(query, [userId, opponentId, score, gameDate], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

// Get scores for a user
function getScores(userId, callback) {
    const query = `SELECT * FROM scores WHERE user_id = ? OR opponent_id = ? ORDER BY game_date DESC`;
    db.query(query, [userId, userId], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
}

module.exports = {
    addScore,
    getScores
};

const mongoose = require('mongoose');

const playerStatsSchema = new mongoose.Schema({
    playerNumber: String,
    kills: Number,
    deaths: Number,
});

const PlayerStats = mongoose.model('PlayerStats', playerStatsSchema)

module.exports = PlayerStats;
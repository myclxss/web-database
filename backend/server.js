const express = require('express');
const mongoose = require('mongoose');
const e = require("express");

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://root:dLcZgQzXHB04CwbH@kitmap.nd8b4wr.mongodb.net/?retryWrites=true&w=majority&appName=KitMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect MongoDB');
}).catch((err) => {
    console.log('Error de conexion', err);
});

app.get('/api/users', async (req, res) => {
    try {
        const playerStats = await playerStats.find();
        res.json(playerStats);
    }catch (err){
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
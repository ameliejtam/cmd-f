import express from 'express';
import fs from 'fs';

// const fs = require('fs');
const app = express();

app.use(express.json()); // Enable JSON body parsing

app.post('/save', (req, res) => {
    let jsonData = req.body;

    // Write to a JSON file
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) return res.status(500).json({ message: "Error saving file" });
        res.json({ message: "Data saved successfully!" });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3004;

const apiKey = 'f15c899dd10edcafd270963a806915e5';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

app.get('/status', async (req, res) => {
    try {
        const response = await axios.get(`${baseUrl}?lat={lat}&lon={lon}&appid=${apiKey}`);
        res.json({
            api: 'OpenWeatherMap',
            city: 'Invalid coordinates',
            status: response.status,
            statusText: response.statusText
        });
    } catch (error) {
        res.json({
            api: 'OpenWeatherMap',
            city: 'Invalid coordinates',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

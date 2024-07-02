const express = require('express');
const axios = require('axios');
const app = express();
const port = 3005;

const apiKey = 'invalid_api_key';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const location = { lat: 48.8566, lon: 2.3522, city: 'Paris' };

app.get('/status', async (req, res) => {
    try {
        const response = await axios.get(`${baseUrl}?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`);
        res.json({
            api: 'OpenWeatherMap',
            city: location.city,
            status: response.status,
            statusText: response.statusText
        });
    } catch (error) {
        res.json({
            api: 'OpenWeatherMap',
            city: location.city,
            status: error.response.status,
            statusText: error.response.statusText
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

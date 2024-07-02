const express = require('express');
const axios = require('axios');
const app = express();
const port = 3007;

app.get('/status', async (req, res) => {
    try {
        const response = await axios.get('https://postman-echo.com/status/500');
        res.json({
            api: 'Postman Echo',
            city: 'ServerError',
            status: response.status,
            statusText: response.statusText
        });
    } catch (error) {
        res.json({
            api: 'Postman Echo',
            city: 'ServerError',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

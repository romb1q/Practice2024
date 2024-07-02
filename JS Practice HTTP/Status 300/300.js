const express = require('express');
const axios = require('axios');
const app = express();
const port = 3006;

app.get('/status', async (req, res) => {
    try {
        const response = await axios.get('http://httpbin.org/redirect/1', { maxRedirects: 0 });
        res.json({
            api: 'HTTPBin',
            city: 'Multiple Choices',
            status: response.status,
            statusText: response.statusText
        });
    } catch (error) {
        res.json({
            api: 'HTTPBin',
            city: 'Multiple Choices',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

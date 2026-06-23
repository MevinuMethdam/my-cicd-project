const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello System Engineer! My CI/CD Pipeline is working V1.0');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
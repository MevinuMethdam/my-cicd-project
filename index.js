const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello SRE World! My CI/CD Pipeline is working V2.0 - Zero Downtime');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
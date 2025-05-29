const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 CI/CD Live Demo: Node.js App is Running</h1><p>Hosted on Render with GitHub Actions</p>');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

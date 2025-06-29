const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Ganraj – DevOps Live Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f5f7fa;
          padding: 2rem;
          text-align: center;
        }
        h1 {
          color: #2b5876;
        }
        .skills {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        .skill {
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        footer {
          margin-top: 3rem;
          font-size: 0.9rem;
          color: gray;
        }
      </style>
    </head>
    <body>
      <h1>🚀 I'm Ganraj – DevOps Engineer</h1>
      <p>This is a live Node.js app deployed with CI/CD using GitHub Actions + Render.</p>

      <h2>💼 My DevOps Skills:</h2>
      <div class="skills">
        <div class="skill">Docker</div>
        <div class="skill">GitHub Actions</div>
        <div class="skill">AWS</div>
        <div class="skill">Terraform</div>
        <div class="skill">Linux</div>
        <div class="skill">Kubernetes</div>
        <div class="skill">Monitoring & Logging</div>
      </div>

      <footer>🔁 This project redeploys automatically on every commit. CI/CD in action!</footer>
    </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

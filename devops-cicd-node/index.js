const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Function to format uptime in HH:MM:SS
function formatUptime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hrs}h ${mins}m ${secs}s`;
}

// Main Dashboard
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ganraj – CI/CD Live Demo</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f7fa; padding: 2rem; text-align: center; }
          h1 { color: #2b5876; }
          .section { background: white; margin: 1.5rem auto; padding: 1.5rem; border-radius: 12px; max-width: 600px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
          .pipeline-step { margin: 0.5rem 0; padding: 0.5rem; border-left: 4px solid #2b5876; text-align: left; }
          footer { margin-top: 2rem; font-size: 0.9rem; color: gray; }
        </style>
      </head>
      <body>
        <h1>🚀 CI/CD Live Demo Dashboard</h1>
        <p>This Node.js service is deployed on <b>Render</b> with GitHub Actions CI/CD.</p>

        <div class="section">
          <h2>📊 Deployment Info</h2>
          <p><b>Last Deployed (UTC):</b> ${new Date().toLocaleString("en-US", { timeZone: "UTC" })}</p>
          <p><b>Last Deployed (Mumbai):</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          <p><b>Environment:</b> ${process.env.NODE_ENV || "development"}</p>
          <p><b>Build Version:</b> 1.0.${process.env.BUILD_NUMBER || "local"}</p>
        </div>

        <div class="section">
          <h2>🔁 CI/CD Pipeline Flow</h2>
          <div class="pipeline-step">✅ Code pushed to GitHub</div>
          <div class="pipeline-step">⚙️ GitHub Actions build triggered</div>
          <div class="pipeline-step">🚀 Auto-deployed on Render</div>
        </div>

        <footer>
          <p>🔎 Try service endpoints: 
            <a href="/health">/health</a> | 
            <a href="/metrics">/metrics</a>
          </p>
          <p>© 2025 Ganraj – Live CI/CD Node.js Service</p>
        </footer>
      </body>
    </html>
  `);
});

// Health Endpoint with formatted uptime
app.get("/health", (req, res) => {
  const uptimeSeconds = process.uptime();
  res.json({
    status: "ok",
    uptime_seconds: uptimeSeconds,
    uptime: formatUptime(uptimeSeconds)
  });
});

// Metrics Endpoint
app.get("/metrics", (req, res) => {
  res.type("text/plain");
  res.send(`app_requests_total{method="GET"} ${Math.floor(Math.random() * 100)}`);
});

// Start server (only if not testing)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = app; // Export for testing

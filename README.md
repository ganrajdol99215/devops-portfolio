# 🌐 Portfolio Website

The main website (`index.html` + `style.css`) showcases:

✅ **My DevOps skills and experience**  
✅ A **workflow diagram** (`placeholder.png`)  
✅ **Custom domain configuration** via `CNAME`

👉 **Visit the live site:**  
[🌍 https://www.devopsbyganraj.cloud](https://www.devopsbyganraj.cloud)

---
📦 CI/CD Pipeline – Render + GitHub (Used in Your Portfolio Project)
## 🌐 Overview:
This portfolio project is deployed on Render, with continuous deployment (CD) connected to a GitHub repository. Whenever code is pushed to main, the site auto-builds and deploys via Render’s built-in CI/CD integration.
---
## 🛠️ Node.js CI/CD Project

Inside the `devops-cicd-node` folder, you'll find a **sample Node.js application**:

- `index.js` – Simple Node.js server
- `package.json` – Project metadata and dependencies

### 🚀 Features Demonstrated

✅ **Continuous Integration (CI):**
- Automated testing and build pipelines via **GitHub Actions**

✅ **Continuous Deployment (CD):**
- Automatic deployments to cloud platforms (**Render**)

###🔄 Workflow Diagram (Textual)

 Developer (You)
     |
     | Push to GitHub
     ▼
GitHub Repo (main branch)
     |
     | Auto Webhook
     ▼
Render (CI/CD)
     ├── Install dependencies
     ├── Build app (npm run build / static deploy)
     └── Deploy to live site (https://your-domain.com)

"I hosted my portfolio on Render using its automatic CI/CD integration with GitHub. Each push to the main branch triggers a build, dependency install, and deploys the latest version. I follow semantic commits, use static linting (eslint), and keep the build lean with optimized assets. The result is an automated, scalable workflow without manual deployment."





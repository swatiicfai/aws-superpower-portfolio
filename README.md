# ⚡ Tech Superpower Portfolio (AWS Student Builder Challenge)

[![Deployed on AWS Amplify](https://img.shields.io/badge/AWS-Amplify_Hosting-orange.svg?logo=amazon-aws)](https://aws.amazon.com/amplify/)
[![Built with Next.js](https://img.shields.io/badge/Built_with-Next.js_15-black.svg?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)

An interactive personal developer portfolio built and deployed for the **AWS Student Builder Challenge: Build Your Tech Superpower**.

---

## 🌟 The Core Superpower: "The Cloud Alchemist" & Skill Forge Engine

In addition to modern portfolio sections (**About Me**, **Skills/Superpowers**, and **Projects/Achievements**), this site features a **dual creative experience**:
1. **Interactive Superpower Skill Forge**: Visitors can combine any 2–3 skill primitives (e.g. *AWS Amplify*, *Serverless*, *Next.js*, *Strict TypeScript*) to synthesize dynamic tech superpowers accompanied by celebratory particle physics.
2. **Integrated Builder CLI Terminal**: Dev-friendly interactive terminal HUD (type `help`, `superpower`, `aws`, `projects`, `skills`, or `about`) directly within the browser.

---

## ☁️ AWS Services Used & Architecture

- **AWS Amplify Hosting**: Continuous deployment connected directly to this Git repository. Whenever new commits land, Amplify kicks off an automated build pipeline, validates TypeScript types, and deploys static/hybrid bundles to edge nodes.
- **Amazon CloudFront CDN (Amplify Edge Engine)**: Global edge caching, low-latency asset delivery, and automatic HTTPS / SSL certificate management.
- **AWS CloudWatch (Amplify Logs)**: Real-time build tracking, deployment inspection, and traffic metrics.

---

## 🛠️ Local Development

```bash
# Clone repository
git clone https://github.com/<YOUR-USERNAME>/aws-superpower-portfolio.git
cd aws-superpower-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 How to Deploy on AWS Amplify (Step-by-Step)

1. Create a new repository on your GitHub account (e.g., `aws-superpower-portfolio`).
2. Push this codebase to your repository:
   ```bash
   git add .
   git commit -m "feat: complete AWS student builder challenge portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/aws-superpower-portfolio.git
   git push -u origin main
   ```
3. Open the **[AWS Management Console](https://console.aws.amazon.com/)** and navigate to **AWS Amplify**.
4. Click **Host web app** -> Choose **GitHub** as the source repository provider.
5. Authorize GitHub, select your repository (`aws-superpower-portfolio`), and pick the `main` branch.
6. The `amplify.yml` build specification included in this repo will automatically be detected.
7. Click **Save and Deploy**.
8. In ~2 minutes, your live URL (e.g., `https://main.d123456789.amplifyapp.com`) will be generated!

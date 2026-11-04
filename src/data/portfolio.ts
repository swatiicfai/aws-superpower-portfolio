export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  awsServices: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  name: "Swati",
  title: "Cloud Builder & Full-Stack Developer",
  tagline: "Transforming ambitious ideas into scalable cloud solutions on AWS.",
  location: "India",
  bio: [
    "I am a passionate builder obsessed with crafting intuitive digital experiences and deploying resilient serverless cloud architectures.",
    "Driven by continuous learning, I love bridging the gap between sleek front-end design and scalable cloud back-ends. This portfolio itself is deployed via AWS Amplify with automated continuous integration and continuous delivery (CI/CD)."
  ],
  superpower: {
    title: "The Cloud Alchemist",
    headline: "Turning complex codebases into automated, highly-available cloud reality.",
    secretQuote: "The best superpowers aren't about flying—they're about automating the friction away.",
  },
  skills: [
    {
      category: "Cloud & DevOps (AWS)",
      skills: [
        { name: "AWS Amplify", level: "Advanced" },
        { name: "AWS Lambda & Serverless", level: "Intermediate" },
        { name: "Amazon S3 & CloudFront", level: "Advanced" },
        { name: "Amazon DynamoDB", level: "Intermediate" },
        { name: "CI/CD & Git Actions", level: "Advanced" }
      ]
    },
    {
      category: "Full-Stack Development",
      skills: [
        { name: "Next.js & React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Node.js & REST APIs", level: "Intermediate" },
        { name: "Python", level: "Intermediate" }
      ]
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "System Architecture", level: "Intermediate" },
        { name: "UI/UX & Accessibility", level: "Advanced" },
        { name: "Rapid Prototyping", level: "Expert" },
        { name: "Agile & Problem Solving", level: "Advanced" }
      ]
    }
  ],
  projects: [
    {
      id: "superpower-portfolio",
      title: "Interactive Superpower Portfolio",
      description: "My submission for the AWS Student Builder Challenge. Features an interactive Superpower Terminal HUD, Skill Forge synthesis engine, and automated deployment on AWS Amplify.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify"],
      awsServices: ["AWS Amplify Hosting", "Amazon Route 53 (Optional)", "AWS CloudWatch"],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "serverless-cloud-notes",
      title: "Serverless Smart Note Hub",
      description: "A lightning-fast Markdown workspace with automatic cloud sync, version history, and real-time collaboration using AWS serverless primitives.",
      tags: ["React", "AWS Lambda", "DynamoDB", "API Gateway"],
      awsServices: ["AWS Lambda", "Amazon DynamoDB", "Amazon API Gateway", "Amazon Cognito"],
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "ai-prompt-studio",
      title: "AI Canvas & Prompt Engine",
      description: "An interactive prompt experimentation studio with streaming AI outputs, automated prompt evaluation, and cloud preset saving.",
      tags: ["Next.js", "Tailwind CSS", "REST API", "Serverless"],
      awsServices: ["AWS Amplify", "Amazon S3"],
      githubUrl: "https://github.com",
      featured: false
    }
  ],
  achievements: [
    "AWS Student Builder Challenge Participant",
    "Active Open Source Contributor & Tech Community Explorer",
    "Continuous Builder of Serverless & AI-Powered Web Applications"
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "builder@example.com"
  }
};

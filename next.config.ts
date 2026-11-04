import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoName = "";

if (isGithubActions) {
  repoName = process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : "/aws-superpower-portfolio";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? repoName : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

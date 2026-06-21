import { type GitHubUser, type Repository } from "../types/github";

/** Best practice: environment variable */
const BASE_URL = import.meta.env.VITE_GITHUB_API;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

/** Generate headers */
const getHeaders = () => {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28", // GitHub's recommended version header
  };

  if (GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
  }

  return headers;
};

export const searchUsers = async (query: string): Promise<GitHubUser[]> => {
  const response = await fetch(`${BASE_URL}/search/users?q=${query}`, {
    method: "GET",
    headers: getHeaders(),
  });
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  const data = await response.json();
  /**
   * Limit to 5 results to mitigate rest API rate limit
   * Optimization: Github GraphQL
   */
  return data.items ? data.items.slice(0, 5) : [];
};

export const getRepositories = async (
  username: string
): Promise<Repository[]> => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
};

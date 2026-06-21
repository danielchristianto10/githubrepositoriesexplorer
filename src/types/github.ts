export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

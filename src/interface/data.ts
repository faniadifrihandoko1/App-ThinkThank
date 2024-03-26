export type data = {
  avatar_url: string;
  followers: number | string;
  following: number | string;
  login: string;
  public_repos: number | string;
};

export type IQuiz = {
  options: string[];
  question: string;
};

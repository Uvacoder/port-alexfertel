import axios from "axios";

const fetchRepoCount = (token: string) =>
  axios({
    method: "get",
    url: `https://api.github.com/user/repos`,
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((response) => response.data);

const fetchCommitCount = (token: string) =>
  axios({
    method: "get",
    url: `https://api.github.com/search/commits?q=author:alexfertel`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.cloak-preview",
      Authorization: `bearer ${token}`,
    },
  }).then((response) => response.data);

const fetchUserInfo = (token: string) =>
  axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: JSON.stringify({
      query: `query {
user(login: "alexfertel") {
    name
    login
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
    }
    repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
      totalCount
      nodes {
        nameWithOwner
        stargazerCount
      }
    }
    pullRequests(first: 10, orderBy: {direction: DESC, field: CREATED_AT}) {
      totalCount
      nodes {
        title
        baseRepository {
          stargazerCount
          description
          nameWithOwner
          url
        }
      }
    }
    followers {
      totalCount
    }
  }
}`,
    }),
  }).then((response) => response.data);

const githubApi = {
  fetchUserInfo,
  fetchCommitCount,
  fetchRepoCount,
};

export default githubApi;

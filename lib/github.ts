import axios from "axios";
import { DateRange } from "./utils";

// user(login: "alexfertel") {
//     name
//     login
//     contributionsCollection(from: 2016, to: now) {
//       totalIssueContributions
//       totalRepositoryContributions
//       totalPullRequestContributions
//       totalPullRequestReviewContributions
//       totalCommitContributions
//     }
//     repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
//       totalCount
//       nodes {
//         nameWithOwner
//         stargazerCount
//       }
//     }
//     pullRequests(first: 10, orderBy: {direction: DESC, field: CREATED_AT}) {
//       totalCount
//       nodes {
//         title
//         state
//         baseRepository {
//           stargazerCount
//           description
//           nameWithOwner
//           url
//           forks {
//             totalCount
//           }
//         }
//       }
//     }
//     followers {
//       totalCount
//     }
//   }

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

const fetchContributionsCount = (token: String, range: DateRange) => {
  const from = new Date(range[0], 1).toISOString();
  const to = new Date(range[1], 1).toISOString();

  const promise = axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: JSON.stringify({
      query: `
query {
  user(login: "alexfertel") {
    contributionsCollection(from: "${from}", to: "${to}") {
      totalIssueContributions
      totalRepositoryContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalCommitContributions
    }
  }
}`,
    }),
  }).then((response) => response.data);

  return promise;
};

const fetchUserInfo = (token: string) =>
  axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: JSON.stringify({
      query: `
query {
  user(login: "alexfertel") {
    repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
      totalCount
      nodes {
        nameWithOwner
        stargazerCount
      }
    }
    pullRequests(first: 10, orderBy: {direction: DESC, field: CREATED_AT}) {
      totalCount
    }
  }
  search(first: 10, type: ISSUE, query: "is:pr author:alexfertel archived:false sort:updated-desc is:public") {
    edges {
      node {
        ... on PullRequest {
          title
          state
          id
          baseRepository {
            stargazerCount
            description
            nameWithOwner
            url
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
}`,
    }),
  }).then((response) => response.data);

const githubApi = {
  fetchUserInfo,
  fetchCommitCount,
  fetchRepoCount,
  fetchContributionsCount,
};

export default githubApi;

import * as React from "react";
import axios from "axios";

const fetchRepoCount = (token) =>
  axios({
    method: "get",
    url: `https://api.github.com/user/repos`,
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((response) => response.data);

const fetchCommitCount = (token) =>
  axios({
    method: "get",
    url: `https://api.github.com/search/commits?q=author:alexfertel`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.cloak-preview",
      Authorization: `bearer ${token}`,
    },
  }).then((response) => response.data);

const fetchUserInfo = (token) =>
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
          name
          login
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
          pullRequests(first: 1) {
            totalCount
          }
          issues(first: 1) {
            totalCount
          }
          followers {
            totalCount
          }
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            nodes {
              stargazers {
                totalCount
              }
            }
          }
        }
      }
      `,
    }),
  }).then((response) => response.data);

export async function getStaticProps() {
  const token = process.env.GITHUB_TOKEN;
  const responses = await Promise.all([
    fetchRepoCount(token),
    fetchCommitCount(token),
    fetchUserInfo(token),
  ]);

  console.log(responses[2]);
  return {
    props: { repos: responses[0], count: responses[1].total_count },
    revalidate: 60,
  };
}

const OpenSource = ({ repos, count }) => {
  return (
    <div>
      {repos.length}
      <br />
      {count}
    </div>
  );
};

export default OpenSource;

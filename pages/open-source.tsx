import * as React from "react";
import githubApi from "../lib/github";

export async function getStaticProps() {
  const token = process.env.GITHUB_TOKEN;
  const responses = await Promise.all([
    githubApi.fetchRepoCount(token),
    githubApi.fetchCommitCount(token),
    githubApi.fetchUserInfo(token),
  ]);

  return {
    props: {
      repos: responses[0],
      count: responses[1].total_count,
      user: responses[2],
    },
    revalidate: 60,
  };
}

const OpenSource = ({ repos, count, user }) => {
  console.log(user);
  return (
    <div>
      {repos.length}
      <br />
      {count}
    </div>
  );
};

export default OpenSource;

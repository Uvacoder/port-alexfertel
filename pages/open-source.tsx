import * as React from "react";

export async function getStaticProps() {
  // {
  //   "data": {
  //     "repository": {
  //       "issue": {
  //         "reactionGroups": [
  //           { "content": "THUMBS_UP", "users": { "totalCount": 0 } },
  //           { "content": "THUMBS_DOWN", "users": { "totalCount": 0 } },
  //           { "content": "LAUGH", "users": { "totalCount": 0 } },
  //           { "content": "HOORAY", "users": { "totalCount": 0 } },
  //           { "content": "CONFUSED", "users": { "totalCount": 0 } },
  //           { "content": "HEART", "users": { "totalCount": 0 } },
  //           { "content": "ROCKET", "users": { "totalCount": 0 } },
  //           { "content": "EYES", "users": { "totalCount": 0 } }
  //         ]
  //       }
  //     }
  //   }
  // }
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com/user/repos`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  const repos = await res.json();
  if (res.status !== 200) {
    console.error(repos);
    throw new Error("Failed to fetch API");
  }
  return {
    props: { repos },
    revalidate: 1,
  };
}

const OpenSource = ({ repos }) => {
  const public_repos = repos.filter((r) => !r.private);
  const private_repos = repos.filter((r) => r.private);
  return (
    <div className="grid place-items-center">
      {repos.map((repo) => (
        <pre>{JSON.stringify(repo.full_name, null, 2)}</pre>
      ))}
      {public_repos.length}
      {"\n"}
      {private_repos.length}
    </div>
  );
};

export default OpenSource;

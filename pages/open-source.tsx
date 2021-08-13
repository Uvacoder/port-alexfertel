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
      count: responses[1].total_count,
      userInfo: responses[2].data,
    },
    revalidate: 60,
  };
}

// user(login: "alexfertel") {
//     name
//     login
//     contributionsCollection {
//       totalCommitContributions
//       restrictedContributionsCount
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
//         baseRepository {
//           stargazerCount
//           description
//           nameWithOwner
//           url
//         }
//       }
//     }
//     followers {
//       totalCount
//     }
//   }
const OpenSource = ({ repos, count, userInfo }) => {
  return (
    <div className="px-10 flex flex-1 flex-col text-center ">
      <h1 className="pt-10 text-5xl text-coolGray-600 font-pacifico">
        Open Source
      </h1>

      <div className="items-center">
        <p className="pt-6 text-lg text-coolGray-700 max-w-lg m-auto">
          I love open source! Here are my latest contributions. You can check
          them out in more detail in my{" "}
          <a
            href="https://github.com/alexfertel"
            rel="noopener noreferrer"
            className="custom-underline inline-block transition-all transform hover:scale-[1.05] duration-500 ease-out text-transparent font-semibold bg-clip-text bg-gradient-to-r from-red-500 to-blue-500"
          >
            GitHub
          </a>{" "}
          profile.
        </p>
      </div>

      <div className="grid grid-cols-2 text-left">
        <section>
          <h2 className="">Stats</h2>
        </section>
        <section>
          <h2>Pull Requests</h2>
        </section>
      </div>
    </div>
  );
};

export default OpenSource;

import * as React from "react";
import githubApi from "../lib/github";
import Navigation from "../components/Navigation";

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
    <div className="relative inset-0 flex min-h-screen">
      <Navigation />
      <div className="px-10 flex flex-1 flex-col text-center">
        <h1 className="pt-10 text-5xl text-gray-700 dark:text-coolGray-100 font-pacifico">
          Open Source
        </h1>

        <div className="items-center">
          <p className="pt-6 text-lg text-gray-700 dark:text-coolGray-300 max-w-lg m-auto">
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

        <div className="pt-20 text-center divide-dashed divide-x-2 divide-red-500 grid grid-cols-2 text-gray-700 dark:text-coolGray-100">
          <section>
            <h2 className="font-pacifico text-xl text-red-500">
              Pull Requests
            </h2>
            <div></div>
          </section>
          <section>
            <h2 className="font-pacifico text-xl text-red-500">Stats</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

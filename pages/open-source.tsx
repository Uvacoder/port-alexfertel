import * as React from "react";
import githubApi from "../lib/github";
import Navigation from "../components/global/Navigation";
import { InfoIcon, StarIcon } from "../components/icons";

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
      userInfo: responses[2].data.user,
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

const OpenSource = ({ repos, count, userInfo }) => {
  console.log(userInfo);

  const pullRequests = userInfo.pullRequests.nodes;
  const stargazerCount = userInfo.repositoriesContributedTo.nodes.reduce(
    (sum: number, repo: { stargazerCount: number }) =>
      sum + repo.stargazerCount,
    0
  );

  return (
    <div className="relative inset-0 flex min-h-screen">
      <Navigation />
      <div className="max-w-xs sm:max-w-xl lg:max-w-5xl mx-auto flex flex-1 flex-col text-center">
        <h1 className="pt-10 text-5xl text-gray-700 dark:text-coolGray-100 font-pacifico">
          Open Source
        </h1>

        <div className="items-center">
          <p className="pt-6 text-lg text-gray-700 dark:text-coolGray-300 sm:max-w-lg m-auto">
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

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-2">
          <div className="flex justify-center items-center bg-gray-50 shadow-sm rounded-md">
            <div className="flex px-6 py-6 justify-between items-center text-2xl">
              <div className="flex items-center">
                <StarIcon className="h-8 w-8 text-blue-500" />

                <p>Stargazers:</p>
              </div>
              <p className="">{stargazerCount}*</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between">
              <StarIcon className="h-5 w-5" />

              <div className="">
                Stargazers: <span>{stargazerCount}</span>
                <InfoIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between">
              <StarIcon className="h-5 w-5" />

              <div className="">
                Stargazers: <span>{stargazerCount}</span>
                <InfoIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 text-center grid grid-cols-1 lg:grid-cols-2 text-gray-700 dark:text-coolGray-100">
          <section>
            <h2 className="font-pacifico text-xl text-red-500">
              Pull Requests
            </h2>
            {pullRequests.map((pr) => (
              <div key={pr.title}>{pr.title}</div>
            ))}
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

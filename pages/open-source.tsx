import * as React from "react";
import githubApi from "../lib/github";
import Navigation from "../components/global/Navigation";
import { BookIcon, StarIcon } from "../components/icons";
import {
  aggregateContributionChunks,
  DateRange,
  getYearRangesSinceJoining,
} from "../lib/utils";
import { PullRequestIcon } from "../components/icons/PullRequestIcon";

export async function getStaticProps() {
  const token = process.env.GITHUB_TOKEN;

  const ranges = getYearRangesSinceJoining();
  const [userInfo, ...contributionChunks] = await Promise.all([
    githubApi.fetchUserInfo(token),
    ...ranges.map((range: DateRange) =>
      githubApi.fetchContributionsCount(token, range)
    ),
  ]);

  return {
    props: {
      contributions: aggregateContributionChunks(
        contributionChunks.map(
          (chunk) => chunk.data.user.contributionsCollection
        )
      ),
      userInfo: userInfo.data.user,
    },
    revalidate: 60,
  };
}

const OpenSource = ({ contributions, userInfo }) => {
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
        <h1 className="pt-20 text-5xl text-gray-700 dark:text-coolGray-100 font-pacifico">
          Open Source
        </h1>

        <div className="items-center">
          <p className="pt-6 text-2xl text-gray-700 dark:text-coolGray-300 sm:max-w-lg m-auto">
            I love contributing to open source! If you want know more check out
            my{" "}
            <a
              href="https://github.com/alexfertel"
              rel="noopener noreferrer"
              className="custom-underline inline-block transition-all transform hover:scale-[1.05] duration-500 ease-out text-transparent font-semibold bg-clip-text bg-gradient-to-r from-red-500 to-blue-500"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 gap-y-2">
          <div className="flex items-center bg-gray-50 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-6 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <StarIcon className="h-6 w-6 text-blue-500" />

                <p className="pl-2 text-coolGray-700">Stargazers:</p>
              </div>
              <p>
                <span className="text-blue-500">{stargazerCount}</span>*
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-6 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <PullRequestIcon className="h-6 w-6 text-blue-500" />

                <p className="pl-2 text-coolGray-700">Pull Requests:</p>
              </div>
              <p>
                <span className="text-blue-500">
                  {userInfo.pullRequests.totalCount}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-6 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <BookIcon className="h-6 w-6 text-blue-500" />

                <p className="pl-2 text-coolGray-700">Contributions:</p>
              </div>
              <p>
                <span className="text-blue-500">{contributions}</span>*
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 text-left grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 text-gray-700 dark:text-coolGray-100">
          <div className="flex items-center bg-gray-50 shadow-sm rounded-md">
            <div className="w-full p-6 justify-between items-center text-xl">
              <h2 className="font-pacifico text-xl text-blue-500">
                Pull Requests
              </h2>
              {pullRequests.map((pr) => (
                <div key={pr.title}>{pr.title}</div>
              ))}
            </div>
          </div>
          <div className="flex items-center bg-gray-50 shadow-sm rounded-md">
            <div className="w-full p-6 justify-between items-center text-xl">
              <h2 className="font-pacifico text-xl text-blue-500">Stats</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

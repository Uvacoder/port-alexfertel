import * as React from "react";
import githubApi from "../lib/github";
import Navigation from "../components/global/Navigation";
import { BookIcon, StarIcon } from "../components/icons";
import {
  aggregateContributionChunks,
  DateRange,
  getYearRangesSinceJoining,
} from "../lib/utils";
import { PullRequestIcon } from "../components/icons";
import PullRequestList from "../components/PullRequestList";
import FancyLink from "../components/global/FancyLink";

export async function getStaticProps() {
  const token = process.env.GITHUB_TOKEN;

  const ranges = getYearRangesSinceJoining();
  const [userInfo, ...contributionChunks] = await Promise.all([
    githubApi.fetchUserInfo(token),
    ...ranges.map((range: DateRange) =>
      githubApi.fetchContributionsCount(token, range)
    ),
  ]);

  const contributions = aggregateContributionChunks(
    contributionChunks.map((chunk) => chunk.data.user.contributionsCollection)
  );

  const pullRequests = userInfo.data.search.edges
    .map((edge: { node: any }) => edge.node)
    .filter((pr: { state: string }) => ["MERGED", "OPEN"].includes(pr.state))
    .slice(0, 6);

  return {
    props: {
      contributions,
      userInfo: userInfo.data.user,
      pullRequests,
    },
    revalidate: 60,
  };
}

const OpenSource = ({ contributions, userInfo, pullRequests }) => {
  console.log(userInfo);
  console.log(pullRequests);

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
            I love contributing to open source! If you want to know more, check
            out my{" "}
            <FancyLink
              href="https://github.com/alexfertel"
              className="font-semibold"
            >
              GitHub
            </FancyLink>
            .
          </p>
        </div>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 gap-y-2">
          <div className="flex items-center bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-5 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <StarIcon className="h-6 w-6 text-amber-500" />

                <p className="pl-2 text-gray-700 dark:text-coolGray-100">
                  Stargazers:
                </p>
              </div>
              <p>
                <span className="text-amber-500">{stargazerCount}</span>*
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-5 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <PullRequestIcon className="h-6 w-6 text-amber-500" />

                <p className="pl-2 text-gray-700 dark:text-coolGray-100">
                  Pull Requests:
                </p>
              </div>
              <p className="text-amber-500">
                {userInfo.pullRequests.totalCount}
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm rounded-md">
            <div className="flex w-full p-4 lg:p-5 justify-between items-center text-lg lg:text-xl">
              <div className="flex items-center">
                <BookIcon className="h-6 w-6 text-amber-500" />

                <p className="pl-2 text-gray-700 dark:text-coolGray-100">
                  Contributions:
                </p>
              </div>
              <p className="text-amber-500">{contributions}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 text-left grid grid-cols-1 lg:grid-cols-6 lg:gap-x-4 text-gray-700 dark:text-coolGray-100">
          <div className="flex col-span-2 px-4 bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm rounded-md">
            <div className="w-full p-5 justify-between items-center text-xl">
              <div className="text-center">
                <h2 className="font-pacifico font-normal text-xl text-amber-500 leading-8">
                  Stats
                </h2>
              </div>

              <div className="pt-3 flex flex-col gap-y-2">
                <div className="pt-1 flex justify-between items-center">
                  <p className="text-base">Contributed to: </p>
                  <p className="text-base">number</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex col-span-4 items-center bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm rounded-md">
            <PullRequestList prs={pullRequests} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

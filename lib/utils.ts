interface Contributions {
  totalIssueContributions: number;
  totalRepositoryContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  totalCommitContributions: number;
}

export const aggregateContributionChunks = (chunks: Contributions[]) =>
  chunks.reduce((acc: number, chunk: Contributions) => {
    const aggregation =
      chunk.totalCommitContributions +
      chunk.totalPullRequestReviewContributions +
      chunk.totalPullRequestContributions +
      chunk.totalRepositoryContributions +
      chunk.totalIssueContributions;

    return acc + aggregation;
  }, 0);

export type DateRange = [number, number];
export const getYearRangesSinceJoining = (): DateRange[] => {
  const yearOfJoiningGitHub = 2016;
  const thisYear = new Date().getFullYear();
  const yearsActive = thisYear - yearOfJoiningGitHub;

  const ranges = [];
  for (let i = 0; i < yearsActive - 1; i++) {
    ranges.push([yearOfJoiningGitHub + i, yearOfJoiningGitHub + i + 1]);
  }
  ranges.push([thisYear - 1, thisYear]);

  return ranges;
};

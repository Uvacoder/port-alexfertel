import { classNames } from "../lib/class-names";
import FancyLink from "./global/FancyLink";
import { PullRequestIcon, PullRequestMergedIcon, StarIcon } from "./icons";

interface IRepository {
  nameWithOwner: string;
  description: string;
  stargazerCount: number;
  url: string;
  forks: {
    totalCount: number;
  };
}

interface IPullRequest {
  id: string;
  title: string;
  state: "MERGED" | "OPEN" | "CLOSED";
  baseRepository: IRepository;
}

const PullRequest = ({ pr }) => {
  const [Icon, color, title] =
    pr.state === "MERGED"
      ? [PullRequestMergedIcon, "text-indigo-500", "Merged pull request"]
      : [PullRequestIcon, "text-green-500", "Open pull request"];

  return (
    <div className="">
      <div title={title} className="pt-1 flex justify-between">
        <div className="flex items-center">
          <Icon className={classNames("w-4 h-4", color)} />
          <FancyLink
            href={pr.baseRepository.url}
            title={pr.baseRepository.description}
            className="ml-2 text-lg"
          >
            {pr.baseRepository.nameWithOwner}
          </FancyLink>
        </div>
        <div className="flex items-center text-red-500">
          <p className="text-sm">{pr.baseRepository.stargazerCount}</p>
          <StarIcon className="pl-1 h-5 w-5" />
        </div>
      </div>
      <div>
        <p className="pl-6 pt-1 text-base opacity-90 max-w-sm">{pr.title}</p>
      </div>
    </div>
  );
};

const PullRequestList = ({ prs }) => (
  <div className="w-full p-5 justify-between items-center text-xl">
    <div className="text-center">
      <FancyLink
        href="https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3Aalexfertel+archived%3Afalse+sort%3Aupdated-desc"
        title="https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3Aalexfertel+archived%3Afalse+sort%3Aupdated-desc"
        className="text-xl font-pacifico font-normal leading-8 text-center"
      >
        Pull requests
      </FancyLink>
    </div>

    <div className="pt-3 flex flex-col gap-y-2">
      {prs.map((pr: IPullRequest) => (
        <PullRequest pr={pr} key={pr.id} />
      ))}
    </div>
  </div>
);

export default PullRequestList;

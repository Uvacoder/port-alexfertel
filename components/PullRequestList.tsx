import * as React from "react";
import Image from "next/image";
import { classNames } from "../lib/class-names";
import FancyLink from "./global/FancyLink";
import { PullRequestIcon, PullRequestMergedIcon, StarIcon } from "./icons";
import { ForkIcon } from "./icons/ForkIcon";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Transition } from "@headlessui/react";

interface IRepository {
  nameWithOwner: string;
  description: string;
  stargazerCount: number;
  forks: {
    totalCount: number;
  };
}

interface IPullRequest {
  id: string;
  title: string;
  url: string;
  resourcePath: string;
  state: "MERGED" | "OPEN" | "CLOSED";
  baseRepository: IRepository;
}

const PullRequest = ({ pr }) => {
  const [Icon, color, title] =
    pr.state === "MERGED"
      ? [PullRequestMergedIcon, "text-indigo-500", "Merged pull request"]
      : [PullRequestIcon, "text-green-500", "Open pull request"];

  const [isOpen, setIsOpen] = React.useState(false);
  const image_url = `https://opengraph.githubassets.com/1${pr.resourcePath}`;

  return (
    <div>
      <div className="pt-1 flex justify-between">
        <div title={title} className="flex items-center">
          <Icon className={classNames("w-4 h-4", color)} />

          <HoverCard.Root
            openDelay={100}
            onOpenChange={(open) => {
              setIsOpen(open);
            }}
          >
            <HoverCard.Trigger
              as={FancyLink}
              href={pr.url}
              title={pr.baseRepository.description}
              className="ml-2 text-lg"
            >
              {pr.baseRepository.nameWithOwner}
            </HoverCard.Trigger>

            <HoverCard.Content side="top">
              <Transition
                show={isOpen}
                appear
                enter="transform transition duration-300 origin-bottom ease-out"
                enterFrom="opacity-0 translate-y-2 scale-0"
                enterTo="opacity-100 translate-y-0 scale-100"
                className="shadow-xl rounded-xl"
              >
                <a
                  href={pr.url}
                  className="block p-1 bg-white border border-transparent shadow-sm rounded-lg hover:border-amber-500"
                >
                  <Image
                    width={500}
                    height={250}
                    src={image_url}
                    alt={pr.title}
                    layout="fixed"
                    loading="eager"
                  />
                </a>
              </Transition>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div className="flex items-center text-red-500">
          <p className="text-base">{pr.baseRepository.stargazerCount}</p>
          <StarIcon className="pl-1 h-5 w-5" />

          <p className="pl-2 text-base">{pr.baseRepository.forks.totalCount}</p>
          <ForkIcon className="pl-1 h-5 w-5" />
        </div>
      </div>
      <div>
        <p className="pl-6 pt-1 text-base opacity-75 max-w-sm">{pr.title}</p>
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
        className="text-2xl font-lora font-semibold leading-8 text-center"
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

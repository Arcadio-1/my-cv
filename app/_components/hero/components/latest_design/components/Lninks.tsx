import { Theme } from "@/util/Types/types";
import GithubIcon from "@/util/ui/controler/icons/GithubIcon";
import ArrowIcon, { Arrow } from "@/util/ui/icons/ArrowIcon";
import VercelIcon from "@/util/ui/icons/VercelIcon";
import YoutubeIcon from "@/util/ui/icons/YoutubeIcon";
import Link from "next/link";
import React from "react";
interface Props {}
const Lninks = ({}: Props) => {
  const links = [
    {
      id: "0",
      icon: <YoutubeIcon classes="w-10 h-10" />,
      label: "watch on youtube",
      link: "https://youtu.be/fP-_-p-z8tA?si=a5YJc0KdZj7h60eh",
    },
    {
      id: "1",
      icon: <GithubIcon classes="h-10 w-10 fill-gray-600 dark:fill-white" />,
      label: "source code",
      link: "https://github.com/Arcadio-1/Taraneh_v1.git",
    },
    {
      id: "2",
      icon: <VercelIcon classes="w-8 h-8 fill-gray-600 dark:!fill-white" />,
      label: "online demo",
      link: "https://taraneh-v1.vercel.app/",
    },
  ];
  return (
    <div className="flex gap-2 flex-col justify-start py-4 px-2">
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            className="hover:scale-105 rounded-md max-h-16 py-2 px-4 grow w-full capitalize text-gray-700 dark:text-white flex gap-3 text-2xl items-center bg-sky-100 dark:bg-sky-800"
            target="_blank"
            href={link.link}
          >
            {link.icon}
            {link.label}
            <ArrowIcon
              direction={Arrow.right}
              classes="h-6 w-6 dill-gray-700 dark:fill-white"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Lninks;

import GithubIcon from "@/util/ui/controler/icons/GithubIcon";
import ArrowIcon, { Arrow } from "@/util/ui/icons/ArrowIcon";
import VercelIcon from "@/util/ui/icons/VercelIcon";
import YoutubeIcon from "@/util/ui/icons/YoutubeIcon";
import Link from "next/link";
import React from "react";

const Lninks = () => {
  return (
    <div className="flex gap-2 bg-black bg-opacity-60 flex-col justify-start py-4 px-2">
      <Link
        className="hover:scale-105 rounded-md max-h-16 py-2 px-4 grow w-full capitalize text-white flex gap-3 text-2xl items-center bg-sky-800"
        target="_blank"
        href={"https://youtu.be/fP-_-p-z8tA?si=a5YJc0KdZj7h60eh"}
      >
        <YoutubeIcon classes="w-10 h-10" />
        watch on youtube
        <ArrowIcon direction={Arrow.right} classes="h-6 w-6 fill-white" />
      </Link>
      <Link
        className="hover:scale-105 rounded-md max-h-16 py-2 px-4 grow w-full capitalize text-white flex gap-3 text-2xl items-center bg-sky-800"
        target="_blank"
        href={"https://github.com/Arcadio-1/Taraneh_v1.git"}
      >
        <GithubIcon classes="h-10 w-10 fill-white" />
        source code
        <ArrowIcon direction={Arrow.right} classes="h-6 w-6 fill-white" />
      </Link>
      <Link
        className="hover:scale-105 rounded-md max-h-16 py-2 px-4 grow w-full capitalize text-white flex gap-3 text-2xl items-center bg-green-800"
        target="_blank"
        href={"https://taraneh-v1.vercel.app/"}
      >
        <VercelIcon classes="w-8 h-8 !fill-white" />
        online demo
        <ArrowIcon direction={Arrow.right} classes="h-6 w-6 fill-white" />
      </Link>
    </div>
  );
};

export default Lninks;

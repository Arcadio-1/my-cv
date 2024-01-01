import { Theme } from "@/util/Types/types";
import React from "react";
interface Props {}
const Header = ({}: Props) => {
  const technologies = [
    "Next.js 14",
    "Typescript",
    "MongoDB",
    "Prisma ORM",
    "Tailwind",
    "Shadcn/ui",
    "MUI",
    "Zod",
    "...",
  ];
  return (
    <div className=" flex flex-col gap-3 pt-4 px-2">
      <h1
        className={`
            dark:text-white dark:border-white text-gray-950 border-gray-600 text-2xl capitalize border-b pb-3`}
      >
        Mini Clone of Digikala With Full Functionality
      </h1>
      <ul className="px-4 text-white flex gap-2 flex-wrap">
        {technologies.map((tec, index) => {
          return (
            <li
              key={index}
              className={`text-2xl flex items-center dark:text-white text-gray-950`}
            >
              {index > 0 ? <span>,</span> : ""}
              <span>{tec}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Header;

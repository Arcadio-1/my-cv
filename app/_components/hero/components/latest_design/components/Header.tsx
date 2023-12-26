import CheckIcon from "@/util/ui/controler/icons/CheckIcon";
import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col gap-3 pt-4 px-2">
      <h1 className="text-white text-2xl capitalize border-b border-white pb-3">
        Mini Clone of Digikala With Full Functionality
      </h1>
      {/* <p className="text-white text-2xl capitalize ">
        check out my latest design using :
      </p> */}
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-5 px-4 text-white">
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Next.js 14
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Typescript
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          MongoDB
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Prisma ORM
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Tailwind
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Shadcn/ui
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          MUI
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          Zod
        </li>
        <li className="text-2xl flex items-center gap-2">
          <CheckIcon clasess="h-6 w-6 fill-green-600 " />
          ...
        </li>
      </ul>
    </div>
  );
};

export default Header;

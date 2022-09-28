import React from "react";
import Link from "next/link";
import DarkModeIcon from "../public/icons/DarkMode.svg";
import Switch from "./Switch";
function Header() {
  return (
    <div className="text-3xl font-bold underline bg-red-400 flex justify-between pr-3 pl-1 py-2">
      <Link href="/">
        <h1 className=" inline hover:cursor-pointer ">Atticus Deutsch </h1>
      </Link>
      <div className=" flex justify-evenly items-center space-x-2">
        <DarkModeIcon className=" dark:fill-black fill-white h-5 w-5" />
        <Switch />
      </div>
    </div>
  );
}

export default Header;

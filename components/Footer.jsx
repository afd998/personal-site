import Link from "next/link";
import React from "react";
import LinkedinIcon from "../public/icons/Linkedin.svg";
import GithubIcon from "../public/icons/Github.svg";

function Footer() {
  //copyright
  //soundcloud?
  //source
  //resume
  return (
    <div className="w-full flex-col flex  sm:items-end flex-wrap items-center z-20 py-8">
      <div className="pr-4">
        Desgined and Built by{" "}
        <Link href="/">
          <span className=" hover:underline cursor-pointer text-2xl">
            Atticus Deutsch
          </span>
        </Link>
      </div>
      <div className="flex space-x-3 items-center ">
        <a href="https://github.com/afd998">
          {" "}
          <GithubIcon className="w-5 h-5 dark:fill-white " />
        </a>
        <a href="https://www.linkedin.com/in/atticus-deutsch-537699102/">
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a> bookings@scion-informatics.com</a>
      </div>
    </div>
  );
}

export default Footer;

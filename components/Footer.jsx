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
    <div className=" static bottom-0 w-full left-0 flex justify-between">
      <div>
        Desgined and Built by{" "}
        <Link href="/">
          <span className=" hover:underline cursor-pointer">
            Atticus Deutsch
          </span>
        </Link>
      </div>
      <div className="flex space-x-3">
        <a href="https://github.com/afd998">
          {" "}
          <GithubIcon className="w-5 h-5 dark:fill-white" />
        </a>
        <a href="https://www.linkedin.com/in/atticus-deutsch-537699102/">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a> afd998@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;

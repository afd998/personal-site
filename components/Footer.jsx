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
    <div className="py-8 z-20 text-xs md:text-base">
      <div id="line1" className="">
        Desgined and Built by{" "}
        <Link href="/">
          <span className=" hover:underline cursor-pointer  text-xl md:text-2xl">
            Atticus Deutsch
          </span>
        </Link>
      </div>
      <div id="line2" className="flex space-x-3 items-center pl-10">
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

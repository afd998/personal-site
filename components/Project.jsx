import React from "react";
import Carousel from "./Carousel";
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
function Project({ projectData, summary: Summary }) {
  function Label({ text }) {
    return <p className="text-xs font bold w-1/2 self-end">{text}</p>;
  }
  return (
    <div className="w-full flex flex-col pt-16">
      <Label text="PROJECT" />
      <h1 className="text-4xl italic mt-2 ml-20 mb-16">
        {" "}
        {projectData.name.text}{" "}
      </h1>
      <Label text="PLATFORM" />
    </div>
  );

  function Sticker({ title, children }) {
    return (
      <div
        id={title}
        className="flex flex-col h-24  self-start md:self-end items-start justify-center border-black  dark:border-gray-500 md:border-0 border-4 p-2 rounded-2xl"
      >
        <h4 className=" uppercase text-gray-700 text-xs font-bold mb-1 dark:text-gray-900  ">
          {title}
        </h4>
        {children}
      </div>
    );
  }
}

export default Project;

import React from "react";
import Carousel from "./Carousel";
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
function Project({ projectData, summary: Summary, children }) {
  function RightBox({ children }) {
    return <div className="w-1/2 self-end">{children}</div>;
  }
  function LeftBox({ children }) {
    return <div className="w-1/2 self-start text-right">{children}</div>;
  }
  function Label({ text }) {
    return <p className="font-bold text-xs">{text}</p>;
  }

  return (
    <div className="w-full flex flex-col pt-16 relative">
      <RightBox>
        <Label text="PROJECT" />
      </RightBox>
      <h1 className="text-4xl italic mt-2 ml-20 mb-20">
        {" "}
        {projectData.name.text}{" "}
      </h1>
      <RightBox>
        <Label text="PLATFORM" />
        <div className="flex justify-start self-end items-center whitespace-nowrap mb-16 ">
          <h3 className="text-lg">{projectData.type}</h3>
          {projectData.type == "Web App" && (
            <MdComputer className="dark:fill-white fill-black w-7 h-7 ml-3" />
          )}{" "}
          {projectData.type == "iOS App" && (
            <IoPhonePortraitOutline className="dark:fill-white fill-black w-8 h-7 ml-2" />
          )}
          {projectData.type == "Website" && (
            <CgWebsite className="dark:fill-white fill-black w-8 h-7 ml-2" />
          )}
        </div>
        <Label text="CLIENT" />
        <p className="text-lg w-3/4"> {projectData.client.text} </p>
      </RightBox>
      <LeftBox>
        <br className="mt-6" />
        <Label text="SUMMARY" />
        <Summary />
      </LeftBox>
      {children}
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

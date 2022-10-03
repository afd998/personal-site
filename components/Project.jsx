import React from "react";
import Carousel from "./Carousel";
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
function Project({ projectData, summary: Summary }) {
  return (
    <div className="w-full">
      <div
        id="header"
        className=" pt-16 flex flex-col items-center space-y-16  md:flex-row  md:justify-around md:space-y-0  md:space-x-20"
      >
        <div
          id="title and summary"
          className="flex flex-col items-center w-min "
        >
          <div
            id="title"
            className="flex flex-col justify-between max-w-fit mr-20 "
          >
            <h2 className="text-gray-700 text-xs font-bold dark:text-gray-900 self-end mb-1">
              PROJECT
            </h2>
            <a
              href={projectData.name.link}
              className=" hover:underline text-4xl  md:text-5xl lg:text-6xl whitespace-nowrap  font-serif font-black"
            >
              {projectData.name.text}
            </a>
          </div>
          <div id="summary" className=" -mt-4 self-end">
            <p className="text-xs font-bold text-right text-gray-600 dark:text-gray-900  ">
              {" "}
              SUMMARY
            </p>
            <div className="mt-1  text-gray-700 dark:text-white  md:text-3xl lg:text-4xl text-2xl text-right ">
              <Summary />
            </div>{" "}
          </div>
        </div>
        <div
          id="right-panel"
          className="flex flex-row-reverse justify-evenly self-center w-full px-4 gap-x-6 md:flex-col md:w-auto md:px-0 "
        >
          <div
            id="type"
            className="flex flex-col  self-start md:self-end items-start border-black border-4 p-2 rounded-2xl"
          >
            <h4 className="text-gray-700 text-xs font-bold mb-1 dark:text-gray-900  ">
              {/* DESC: */} PLATFORM
            </h4>
            <div className="flex justify-end items-center whitespace-nowrap ">
              <h3 className="text-2xl">{projectData.type}</h3>
              {projectData.type == "Web App" && (
                <MdComputer className="dark:fill-white fill-black w-10 h-10 ml-3" />
              )}{" "}
              {projectData.type == "iOS App" && (
                <IoPhonePortraitOutline className="dark:fill-white fill-black w-7 h-7 ml-2" />
              )}
              {projectData.type == "Website" && (
                <CgWebsite className="dark:fill-white fill-black w-8 h-7 ml-2" />
              )}
            </div>
          </div>
          <div
            id="client"
            className="flex flex-col self-start md:self-end items-start border-black border-4 p-2 rounded-2xl"
          >
            <h2 className="text-gray-700 text-xs font-bold dark:text-gray-900  mb-1">
              CLIENT{" "}
            </h2>
            <a
              href={projectData.client.link}
              className=" text-2xl hover:underline  "
            >
              {projectData.client.text}
            </a>
          </div>
        </div>{" "}
        {/* <div className="text-2xl">
        <h3 className=" text-2xl text-gray-600">Technology</h3>
        <h4>Front-end: </h4>
        <p className="">{projectData.technology.frontend}</p>
        <h4 className=" text-xl"> Back-end: </h4>
        <p>
          Firebase's firestore database is used and data is is accessed directly
          from firestore using the client side sdk
        </p>
        <h3>Design:</h3>
       < /div> */}
      </div>
      {/* <div id="second level" className=" w-full flex justify-end mt-10"></div> */}
    </div>
  );
}

export default Project;

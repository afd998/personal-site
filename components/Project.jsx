import React from "react";
import Carousel from "./Carousel";
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
function Project({ projectData }) {
  return (
    <div className="w-full">
      <div
        id="header"
        className=" pt-16 px-12 sm:px-16 md:px-40 lg:px-56 xl:px-64 2xl:px-64  flex md:flex-row flex-col justify-between items-center space-y-16 "
      >
        <div id="title" className="flex flex-col justify-between max-w-fit">
          <h2 className="text-gray-700 text-xs font-bold dark:text-gray-900 self-end mb-1">
            PROJECT
          </h2>
          <a
            href={projectData.name.link}
            className=" hover:underline text-5xl lg:text-6xl  w-max"
          >
            {projectData.name.text}
          </a>
          <h2 className="mt-2 text-sm text-gray-700 dark:text-gray-200">
            Client:{" "}
            <a href={projectData.client.link} className=" hover:underline  ">
              {projectData.client.text}
            </a>
          </h2>
        </div>
        <div
          id="right-panel"
          className="text-2xl flex md:flex-col w-full flex-row-reverse items-end justify-evenly md:space-y-0  self-end sm:self-auto"
        >
          <div
            id="type"
            className="flex flex-col justify-start self-start md:self-end items-start"
          >
            <h4 className="text-gray-700 text-xs font-bold mb-1 dark:text-gray-900  ">
              {/* DESC: */} PLATFORM
            </h4>
            <div className="flex  justify-end items-center ">
              <h3>{projectData.type}</h3>
              {projectData.type == "Web App" && (
                <MdComputer className="dark:fill-white fill-black w-10 h-10 ml-3" />
              )}{" "}
              {projectData.type == "iOS App" && (
                <IoPhonePortraitOutline className="dark:fill-white fill-black w-8 h-7 ml-2" />
              )}
              {projectData.type == "Website" && (
                <CgWebsite className="dark:fill-white fill-black w-8 h-7 ml-2" />
              )}
            </div>
          </div>{" "}
          <div
            id="summary"
            className="flex flex-col sm:items-start m:static w-1/2 self-start md:self-end sm:w-2/3 lg:w-1/2 "
          >
            {" "}
            <p className="text-xs font-bold self-start md:self-start   text-gray-600 dark:text-gray-900 mb-2 ">
              {" "}
              SUMMARY
            </p>
            <p className=" lg:text-4xl md:text-3xl text-xl text-left md:text-right ">
              {projectData.desc}
            </p>{" "}
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

import React from "react";

export function RightBox({ children }) {
  return <div className="w-1/2 self-end">{children}</div>;
}
export function LeftBox({ children }) {
  return <div className="w-1/2 self-start text-right">{children}</div>;
}
export function Label({ text }) {
  return <p className="font-bold text-xs">{text}</p>;
}

export function Background({ projectData }) {
  return (
    <div id="background" className=" z-0 w-screen relative">
      <div className=" z-0 absolute flex flex-col justify-evenly items-center h-[600vw] w-full overflow-hidden text-7xl whitespace-nowrap italic text-clip text-center opacity-5">
        <p className=" py-10 w-[calc(200vw)]   overflow-hidden  rotate-45     ">
          {" "}
          {projectData.name.text} {projectData.name.text}{" "}
          {projectData.name.text}
        </p>
        <p className="  py-10 w-[calc(200vw)]  overflow-hidden rotate-45   ">
          {" "}
          {projectData.name.text} {projectData.name.text}{" "}
          {projectData.name.text}
        </p>
        <p className="  py-10 w-[calc(200vw)]  overflow-hidden rotate-45    ">
          {" "}
          {projectData.name.text} {projectData.name.text}{" "}
          {projectData.name.text}
        </p>
      </div>
      <div className=" z-0 absolute flex  flex-col justify-between h-[600vw] w-full overflow-hidden opacity-5">
        <img
          src={projectData.brandMark}
          className=" overflow-hidden   w-96  self-end    translate-x-1/2 translate-y-1/2"
        />
        <img
          src={projectData.brandMark}
          className=" overflow-hidden   w-96  self-start  -translate-x-1/2 translate-y-1/2"
        />
        <img
          src={projectData.brandMark}
          className=" overflow-hidden   w-96  self-end  translate-x-1/2 translate-y-1/2"
        />
      </div>
    </div>
  );
}

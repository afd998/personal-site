import React from 'react'
import { Background, Label, LeftBox, RightBox } from '../components/Project'
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
let projectData = {
  name: { text: "FlyMessage", link: "" },
  desc: "The first diagonal app for the IPhone",
  client: { text: "Atticus Deutsch", link: "/" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "iOS App",
  brandMark: "/images/flymessage/brand-mark.png"

}

function FlyMessage({ projectData }) {

  return (
    <div className="w-full flex flex-col pt-16 relative">
      <Background projectData={projectData} />
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
    </div>

  )
}

const Summary = () => {
  return <p>The <span className=" font-bold ">first </span> <span className="  -rotate-3 inline-block  px-1">  diagonal </span> app <br className=' hidden md:visible xl:hidden' /> for the IPhone </p >
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData

    },
  }
}


export default FlyMessage
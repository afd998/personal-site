import React from 'react'
import { Background, Label, LeftBox, RightBox } from '../components/Project'
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
const projectData = {
  name: { text: "CMBM Digital", link: "https://cmbmbox.vercel.app/" },
  desc: "The online hub for your education in Mind-Body Medicine",
  client: { text: "The Center for Mind-Body Medicine", link: "" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "Web App",
  color: "green-200",
  brandMark: "/images/cmbm/brand-mark.png"
}
const Summary = () => {
  return <p className='text-lg'>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
}
function Cmbm({ projectData }) {
  return (
    <div className=' '>
      <Background projectData={projectData} />
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
        <div id="sidebar" className=' z-10 relative self-center mt-24'>
          <img src="/images/cmbm/sidebar.png" alt="sidebar" className=' shadow-2xl rounded-xl w-36 ' />
          <p className='text-lg absolute top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
          <p className='text-lg absolute top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
          <img src="/images/cmbm/roles-extra.png" alt="sidebar" className=' -bottom-80 -left-32 absolute w-96  max-w-none' />
        </div>
        <div id="schedule" className=' z-10 relative self-center mt-96'>
          <p className='text-lg  top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
          <p className='text-lg  top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
          <img src="/images/cmbm/schedule.png" alt="sidebar" className=' shadow-2xl rounded-xl  w-36 ' />
        </div>
      </div>
      <br className=' h-64' />
    </div >
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData

    },
  }
}


export default Cmbm
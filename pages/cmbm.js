import React from 'react'
import { Background, Label, LeftBox, RightBox } from '../components/Project'
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import Star from "../public/images/cmbm/star.svg";

const projectData = {
  name: { text: "Mind-Body Center", link: "https://cmbmbox.vercel.app/" },
  desc: "The online hub for your education in Mind-Body Medicine",
  client: { text: "The Center for Mind-Body Medicine", link: "" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "Web App",
  color: "green",
  brandMark: "/images/cmbm/brand-mark.png"
}

function Cmbm({ projectData }) {
  return (
    <div className=' '>
      {/* <Background projectData={projectData} /> */}
      <div className="w-full flex flex-col pt-16 relative overflow-hidden ">
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
          <br className='mt-6' />
          <Label text="SUMMARY" />
          <p className=' w-full pl-10 text-lg'>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
        </LeftBox>

        <div className=" flex justify-center relative w-full h-[150vw] md:w-3/4 items-center md:h-[85vw] self-center bg-[url('/images/cmbm/star.svg')] bg-cover bg-center">
          <img src="/images/cmbm/splash.png" alt="main pic" className=" z-10 w-full  md:w-3/4 rounded-3xl px-10" />
          <div className='absolute w-1/4 right-[15%] bottom-1/4 z-20 flex flex-col' >
            <img src="/images/cmbm/dark-mode.png" alt="main pic" className="  rounded-xl" />
            <p className='text-xs self-end  relative -right-5 md:right-0'> <span className='font-bold'> Dark Mode <br /> </span> enabled </p>
          </div>
        </div>


        <div className='mt-10 relative flex px-[10vw] w-full justify-center space-x-2 items-start '>
          <Star className="absolute z-0  left-0 -top-[30vw] w-1/3 md:w-1/4 -translate-x-1/2  translate-y-1/2 " />
          <Star className="absolute z-0 right-10 bottom-[5vw]    w-2/3 md:w-1/3 translate-x-1/2   translate-y-1/2 " />

          <p className="text-lg z-20 w-1/2 break-words text-right  mt-56 md:mt-32">
            A <span className={`font-bold `}> virtual event platform-learning management System</span>,
            <span className={`font-bold text-${projectData.color}-900`}>  Mind-Body Center </span>
            handles the complex task of being the foundation on which CMBM’s
            <span className={`font-bold `}>  Certification program in Min-Body Medicine </span>
            is accessed by students across the world
          </p>
          <p className="text-lg  z-20 w-1/2 ">
            <span className={`font-bold text-${projectData.color}-900`}> Mind-Body Center </span>
            is a web app that brings non-profit The Center For Mind-Body Medicine’s,
            <span className={`font-bold text-${projectData.color}-900`}>  trauma healing education </span>
            and experience to the digital stage. </p>

        </div>
        <div className="bg-[url('/images/cmbm/star.svg')] w-full md:w-1/2 md:h-[57vw] bg-cover bg-center self-center flex justify-center h-[200vw]  overflow-visible">
          <div id="sidebar" className="  z-10 relative  w-full md:w-3/4  self-center flex justify-center  overflow-visible ">
            <img src="/images/cmbm/sidebar.png" alt="sidebar" className=' shadow-2xl rounded-xl w-1/3 ' />
            <p className='text-lg absolute -top-[10%] left-[65%]'> The path to certification has <span className={`font-bold text-${projectData.color}-900`}>5 major stages</span>, all mediated by the app.          </p>
            <p className='text-lg absolute top-[25%] text-right right-[70%]'> <span className={`font-bold text-${projectData.color}-900`}>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
            <p className='text-lg absolute top-[70%] left-[63%]'><span className='font-bold text-xs'> ROLES </span> <br /> <span className={`font-bold text-${projectData.color}-900`}> Signed on Teachers and Admininstrators</span> see additonal functionality</p>
            <img src="/images/cmbm/roles-extra.png" alt="sidebar" className=' -bottom-[45%] absolute w-64  max-w-none' />
          </div>
          {/* <div id="schedule" className=' z-10 relative self-center mt-96'>
            <p className='text-lg  top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
            <p className='text-lg  top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
            <img src="/images/cmbm/schedule.png" alt="sidebar" className=' shadow-2xl rounded-xl  w-36 ' />
          </div> */}
        </div> </div>
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
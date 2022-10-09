import React from 'react'
import { Background, Label, LeftBox, RightBox } from '../components/Project'
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import Star from "../public/images/cmbm/star.svg";
import Sun from "../public/images/cmbm/sun.svg";

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
    <div className='dark:bg-gray-600 '>
      <Sun className=" z-0 relative w-full top-[2800px] h-[9000px] left-1/2 -translate-x-1/2" />
      {/* <Background projectData={projectData} /> */}
      <div className="  text-lg md:text-2xl w-full flex flex-col mt-16 absolute top-0 overflow-hidden  ">
        <RightBox>
          <Label text="PROJECT" />
        </RightBox>
        <h1 className="text-4xl italic mt-2  text-center mb-20">
          {" "}
          {projectData.name.text}{" "}
        </h1>
        <RightBox>
          <Label text="PLATFORM" />
          <div className="flex justify-start self-end items-center whitespace-nowrap mb-16 ">
            <h3 className="">{projectData.type}</h3>
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
          <p className="  z-40 w-3/4"> {projectData.client.text} </p>
        </RightBox>
        <div className=' z-40 w-1/2 flex flex-col self-start text-right'>
          <br className='mt-6' />
          <Label text="SUMMARY" />
          <p className='z-40 w-full md:w-1/2 self-end pl-10 '>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
        </div>

        <div id="splash" className=" md:-top-40 flex justify-center relative w-full h-[150vw] md:w-3/4 items-center md:h-[85vw] self-center bg-[url('/images/cmbm/star.svg')] dark:bg-gray-600 bg-cover bg-center">
          <img src="/images/cmbm/splash.png" alt="main pic" className=" z-0 w-full  md:w-3/4 rounded-3xl px-10" />
          <div className='absolute w-1/4 right-[15%] bottom-1/4 z-0 flex flex-col' >
            <img src="/images/cmbm/dark-mode.png" alt="main pic" className=" rounded-xl" />
            <p className='text-xs self-end  relative -right-5 md:right-0'> <span className='font-bold'> Dark Mode <br /> </span> enabled </p>
          </div>
        </div>


        <div id="first paragraphs" className='  text-lg  md:text-2xl md:-top-24 mb-24 relative flex px-[10vw] w-full justify-center space-x-4 items-start '>
          <Star className="absolute z-0  left-0 -top-[30vw] w-1/3 md:w-1/4 -translate-x-1/2  translate-y-1/2 " />
          <Star className="absolute z-0 right-10 bottom-[20vw]    w-2/3 md:w-1/3 translate-x-1/2   translate-y-1/2 " />
          <p className=" z-20 w-1/2 md:w-1/2 text-right  mt-56 md:mt-32">
            A <span className={`font-bold `}> virtual event platform-learning management System</span>,
            <span className={`font-bold text-${projectData.color}-900`}>  Mind-Body Center </span>
            handles the complex task of being the foundation on which CMBM’s
            <span className={`font-bold `}>  Certification program in Min-Body Medicine </span>
            is accessed by students across the world
          </p>
          <p className=" z-20 w-1/2 md:w-1/2 ">
            <span className={`font-bold text-${projectData.color}-900`}> Mind-Body Center </span>
            is a web app that brings non-profit The Center For Mind-Body Medicine’s,
            <span className={`font-bold text-${projectData.color}-900`}>  trauma healing education </span>
            and experience to the digital stage. </p>
        </div>


        <div id="sidebar expo" className=" px-3 relative w-full md:w-1/2  self-center  flex items-center justify-center ">
          <Star className="absolute z-0  left-[50%] -top-[50%] w-full md:w-2/3 -translate-x-1/2  translate-y-1/2 " />
          <img src="/images/cmbm/sidebar.png" alt="sidebar" className=' z-10  w-1/2 md:w-[20vw] ' />
          <p className='z-20 text-[2vw] md:text-[13px]  leading-4 w-[30%] absolute left-[3%] md:left-[6%] top-[13%] md:top-[10%] -translate-y-1/2 dark:bg-gray-800 bg-gray-100 p-2 rounded '> The path to certification has <span className={`font-bold`}>5 major stages</span>, all mediated by the app.          </p>
          <p className='z-20 text-[4vw] md:text-xl  absolute top-[30%] md:top-[35%]  text-right right-[68%] md:right-[65%]'> <span className={`font-bold text-${projectData.color}-900`}>As students progress through the model </span> the Sidebar reflects their current stage.</p>
          <p className='z-20 text-[2vw] leading-4 md:text-[13px] absolute rounded p-2  w-[30%]   top-[39%] md:top-[42%]  text-left left-[66%] md:right-[10%] dark:bg-gray-800 bg-gray-100 '> When a <span className='font-bold '>locked</span>  stage is selected, students see an option to <span className='font-bold '> signup </span> or a <span className='font-bold '> special preview </span> </p>

          <div className=' text-[4vw] md:text-xl z-20 w-full absolute top-[63%] md:top-[58%] left-[62%] md:left-[60%]'>
            <p className='   w-[25%] sm:w-[10%]'><span className='font-bold text-xs'> ROLES </span> <br /> <span className={`font-bold text-${projectData.color}-900`}> Signed on Teachers and Admininstrators</span> see additonal functionality</p>
            <img src="/images/cmbm/roles-extra.png" alt="sidebar" className=' absolute  w-[70%] md:w-96 top-[135%] -left-12 -translate-x-1/2  -translate-y-1/2' />
          </div>
        </div>
        {/* <div id="schedule" className=' z-10 relative self-center mt-96'>
            <p className='text-lg  top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
            <p className='text-lg  top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
            <img src="/images/cmbm/schedule.png" alt="sidebar" className=' shadow-2xl rounded-xl  w-36 ' />
          </div> */}
        <div id="second paragraphs" className='mt-72 items-center relative flex px-[10vw] w-full justify-center space-x-4 '>
          <div className='w-1/3 flex flex-col items-center  text-right'>
            <p className="text-lg z-20">
              3 of the 5 stages consist of a 5-day virtual event called a  <span className='font-bold '> training</span>.  in these instances, a student must <span className='font-bold '> signup</span> for an upcoming training from a list of the <span className='font-bold '> upcoming public trainings</span>.
            </p>
            <p className="text-lg  z-20 hidden md:block  ">
              (students use a code to join trainings for which CMBM has intended cohort exclusive.) </p>
          </div>
          <div className='w-1/3 flex flex-col items-center  text-left'>
            <img className='shadow-2xl rounded-xl w-full md:w-full mb-3 md:mb-0' src='/images/cmbm/upcoming-trainings.png' alt="upcoming trainings" />
            <p className="text-lg  z-20  block md:hidden">
              (students use a code to join trainings for which CMBM has intended cohort exclusive.) </p>
          </div>
        </div>
        <div id="signup" className='relative w-full self-center h-[200vw] mt-20 md:mt-40'>
          <p className='absolute top-[110vw] left-[60%] w-[30%] '> Signup includes <span className="font-bold text-green-900" > dynamic forms</span>, built with <span className="font-bold " > react-hook-form</span>, and a <span className="font-bold " >  Stripe</span> checkout for payment.
          </p>
          <img className=' rotate-6 absolute  left-1/2 rounded-2xl w-1/2 -translate-x-1/2  ' src='/images/cmbm/form-1.png' alt="form pic1" />
          <img className='rotate-6 absolute top-[5%] shadow-2xl left-[40%] z-30 rounded-2xl w-1/3 -translate-x-1/2  ' src='/images/cmbm/form-2.png' alt="form pic2" />
        </div>
        <div id="schedule"> </div>

      </div>


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
import React from 'react'
import { Background, Label, } from '../components/Project'
import { MdComputer, MdPark } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { BiLinkExternal } from "react-icons/bi";

import Star from "../public/images/cmbm/star.svg";
import Sun from "../public/images/cmbm/sun.svg";
import Footer from '../components/Footer';
const projectData = {
  name: { text: "Mind-Body Center", link: "https://cmbmbox.vercel.app/" },
  desc: "The online hub for your education in Mind-Body Medicine",
  client: { text: "The Center for Mind-Body Medicine", link: "https://www.cmbm.org/" },
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
      {/* < Sun className=" z-0 relative w-full top-[2400px] md:top-[2000px] 2xl:top-[2600px] h-[7000px] md:h-[6000px] left-1/2 -translate-x-1/2" /> */}
      <div className="  text-lg md:text-2xl w-full flex flex-col mt-16 absolute top-0 overflow-hidden  ">
        <div className="w-1/2 self-end flex">
          <a href={projectData.name.link} target="_blank" className='mr-1 '>
            <Label text="PROJECT" />
          </a>
          <a href={projectData.name.link} target="_blank" className=''>
            <BiLinkExternal className=' w-3 h-3' />
          </a>
        </div>

        <a href={projectData.name.link} target="_blank" className='w-min z-30 self-center mb-20 mt-2 '>
          <h1 className=" text-2xl sm:text-4xl italic whitespace-nowrap   hover:underline mr-1">
            {" "}
            {projectData.name.text}{" "}
          </h1>
        </a>

        <div className=" z-30 w-1/2 self-end">
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
          <div className='flex'>
            <a href={projectData.client.link} className="hover:underline mr-1">
              <Label text="CLIENT" />
            </a>

            <a href={projectData.client.link} className="hover:underline">
              <BiLinkExternal className=' w-3 h-3' />
            </a>
          </div>
          <a href={projectData.client.link} className="hover:underline">
            <p className=" w-3/4  "> {projectData.client.text} </p>
          </a>


        </div>
        <div className=' z-40 w-1/2 flex flex-col self-start text-right'>
          <br className='mt-6' />
          <Label text="SUMMARY" />
          <p className='z-40 w-full xl:w-1/2 self-end pl-10 '>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
        </div>

        <div id="splash" className=" px-10  -mt-24 md:-top-[20vw] flex justify-center relative w-full h-[150vw] md:w-3/4 items-center md:h-[85vw] self-center bg-[url('/images/cmbm/star.svg')] dark:bg-gray-600 bg-cover bg-center">
          <img src="/images/cmbm/1.png" alt="main pic" className="md:-rotate-2 border z-0 w-full  md:w-3/4 rounded-3xl mx-10" />
          <div className='absolute w-1/4 right-[15%] bottom-1/4 z-0 flex flex-col' >
            <img src="/images/cmbm/dark-mode.png" alt="main pic" className=" rounded-xl" />
            <p className='text-xs self-end  relative -right-5 md:right-0'> <span className='font-bold'> Dark Mode <br /> </span> enabled </p>
          </div>
        </div>


        <div id="first paragraphs" className='  text-lg  md:text-2xl  -top-[30vw] md:-mt-0  relative flex px-[10vw] w-full justify-center space-x-4 items-start '>

          <p className=" relative z-20 w-1/2 md:w-1/2 text-right  mt-56 md:mt-32">
            <Star className=" absolute top-1/2 left-[90vw] z-0  w-2/3 md:w-1/3 -translate-x-1/2  -translate-y-1/2 " />
            A <span className={`font-bold `}> virtual event platform-learning management System</span>,
            <span className={`font-bold text-${projectData.color}-900`}>  Mind-Body Center </span>
            handles the complex task of being the foundation on which CMBM’s
            <span className={`font-bold `}>  Certification program in Min-Body Medicine </span>
            is accessed by students across the world

          </p>
          <p className=" relative z-20 w-1/2 md:w-1/2 ">
            <Star className="absolute z-0  right-[78vw] top-1/3 w-1/3 md:w-1/4 -translate-x-1/2  -translate-y-1/2 " />
            <span className={`font-bold text-${projectData.color}-900`}> Mind-Body Center </span>
            is a web app that brings non-profit The Center For Mind-Body Medicine’s,
            <span className={`font-bold text-${projectData.color}-900`}>  trauma healing education </span>
            and experience to the digital stage.

          </p>
        </div>


        <div id="sidebar expo" className=" md:-mt-5 xl:-mt-72 px-3 relative w-full md:w-1/2  self-center  flex items-center justify-center ">
          <Star className="absolute z-0  left-[50%] -top-[50%] w-full md:w-3/4 -translate-x-1/2  translate-y-1/2 " />
          <img src="/images/cmbm/sidebar.png" alt="sidebar" className=' z-10  w-1/2 md:w-[20vw] ' />
          <p className='z-20 text-[2vw] md:text-[13px]  leading-4 w-[30%] absolute left-[3%] md:left-[6%] top-[13%] md:top-[10%] -translate-y-1/2 dark:bg-gray-800 bg-gray-100 p-2 rounded '> The path to certification has <span className={`font-bold`}>5 major stages</span>, all mediated by the app.          </p>
          <p className='z-20 text-[4vw] md:text-xl  absolute top-[30%] md:top-[35%]  text-right right-[68%] md:right-[65%]'> <span className={`font-bold text-${projectData.color}-900`}>As students progress through the model </span> the Sidebar reflects their current stage.</p>

          <div className=' text-[4vw] md:text-xl z-20 w-full absolute top-[63%] md:top-[58%] left-[62%] md:left-[60%]'>
            <p className='z-20 text-[2vw] leading-4 md:text-[13px] absolute rounded p-2  w-[30%]  bottom-[100%]  text-left left-[5%]  dark:bg-gray-800 bg-gray-100 '> When a <span className='font-bold '>locked</span>  stage is selected, students see an option to <span className='font-bold '> signup </span> or a <span className='font-bold '> special preview </span> </p>

            <p className='   w-[25%] sm:w-[10%]'><span className='font-bold text-xs'> ROLES </span> <br /> <span className={`font-bold text-${projectData.color}-900`}> Signed on Teachers and Admininstrators</span> see additonal functionality</p>
            {/* <img src="/images/cmbm/roles-extra.png" alt="sidebar" className=' absolute  w-[70%] md:w-96 top-[135%] -left-12 -translate-x-1/2  -translate-y-1/2' /> */}
          </div>
        </div>
        {/* <div id="schedule" className=' z-10 relative self-center mt-96'>
            <p className='text-lg  top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
            <p className='text-lg  top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
            <img src="/images/cmbm/schedule.png" alt="sidebar" className=' shadow-2xl rounded-xl  w-36 ' />
          </div> */}
        <div id="second paragraphs" className='mt-56 xl:mt-32 items-center relative flex px-[10vw] w-full justify-center space-x-4 md:flex-row-reverse'>
          <div className='w-1/3 flex flex-col items-center  text-left'>
            <img className=' rotate-3 shadow-2xl   rounded-3xl w-full md:w-3/4 mb-3 md:mb-0' src='/images/cmbm/upcoming-trainings.png' alt="upcoming trainings" />
            <p className="  z-20 text-right text-sm block md:hidden">
              (students use a code to join trainings for which CMBM has intended cohort exclusive.) </p>
          </div>
          <div className='w-1/3 flex flex-col items-center  md:text-right'>
            <p className="z-20 mb-3">
              3 of the 5 stages consist of a 5-day virtual event called a  <span className='font-bold '> training</span>.  in these instances, a student must <span className='font-bold '> signup</span> for an upcoming training from a list of the <span className='font-bold '> upcoming public trainings</span>.
            </p>
            <p className=" text-lg z-20 hidden md:block  ">
              (students use a code to join trainings for which CMBM has intended cohort exclusive.) </p>
          </div>

        </div>
        <div id="signup" className=' relative w-full flex-none md:h-[70vw] h-[250vw] mt-20 md:mt-24 xl:mt-44 -translate-x-1/2 left-1/2'>
          <p className='absolute md:top-[35vw] md:left-[53%] left-[63%] top-[45%] w-[30%] '> Signup includes <span className="font-bold text-green-900" > dynamic forms</span>, built with <span className="font-bold " > react-hook-form</span>, and a <span className="font-bold " >  Stripe</span> checkout for payment.
          </p>
          <img className=' border  rotate-12 absolute ml-2 md:ml-0  left-1/2 rounded-2xl w-1/2 md:w-[15%] -translate-x-1/2  ' src='/images/cmbm/form-1.png' alt="form pic1" />
          <img className=' border rotate-12 absolute top-16 shadow-2xl left-[35%] md:left-[43%] md:w-[10%] z-30 rounded-2xl w-1/3 -translate-x-1/2  ' src='/images/cmbm/form-2.png' alt="form pic2" />
        </div>

        <div id="schedule" className='flex flex-col items-center -mt-[60vw] md:-mt-5 xl:-mt-52 px-[10vw] w-full xl:w-3/4 self-center pb-52'>
          <div className=' text-lg  md:text-2xl  flex   justify-center space-x-4 items-start '>
            <p className=" z-20 w-1/2 md:w-1/2 text-right ">
              All trainings contain virtual events, provided by Zoom, some of these events are lectures, some are experiential activities, and some are small group meetings - a core components of CMBM’s trama healing model.
            </p>
            <p className=" z-20 w-1/2 md:w-1/2   mt-56 md:mt-32">
              Therefore an important UI and logical component of the training is  <span className='font-bold'>  The Scheducle</span>
            </p>
          </div>
          <img className=' md:w-3/4 md:-rotate-6   shadow-2xl left-1/2 z-30 rounded-2xl mt-5 sm:mt-10 md:mt-20 xl:mt-20' src='/images/cmbm/8.png' alt="form pic2" />

        </div>

        <div className='w-1/2 flex  justify-end md: pl-10 -mt-24 md:mt-10'>
          <p className='text-right md:w-3/4 xl:w-1/2'>The rest of the UI is extensive, and, when signed in as an admin, supports <span className='font-bold'>CRUD </span> opperations to add events  to the training's schedule, create trainings, update the list of factulty who will be teaching at the training, remove students, and more.</p>
        </div>

        <img src="/images/cmbm/CRUD.png" className=' mt-10 w-1/2  md:w-1/3   self-center' />
        <div className='self-center w-3/4 md:w-1/3 flex flex-col items-center'>
          <div className='w-full self-center justify-evenly flex mt-36 md:mt-52 space-x-5 px-10'>
            <img src="/images/cmbm/heads.png" className='rounded-xl -rotate-6 w-1/3  self-end ' />
            <p className=''>There is also a section where admins assign each participant of a training to a small group led by a faculy member.
            </p>
          </div>
          <img src="/images/cmbm/small-groups.png" className=' shadow-2xl rounded-xl mt-2 w-full  self-center' />
          <p className=' mt-2 w-3/4 self-start'>Students will then only see their small group in the small group section of the training page</p>
        </div>
        <div className='  flex justify-center items-center mt-24 md:mt-32'>
          <div className='w-1/2 flex justify-end md: pl-10 '>
            <p className='text-right md:w-3/4 xl:w-1/2'>The core of the app (backend) is supported by Google Firebase which provides a NOSQL Database, as well as user authentication and authorization. </p>
          </div>
          <img src="/images/cmbm/firebase.png" className='w-1/2 object-contain' />
        </div>
        <div className='  flex justify-center items-center md:mt-10  space-x-[8%] '>
          <img src="/images/cmbm/front-end.png" className='w-1/2 object-contain pl-9' />
          <div className='w-1/2 flex justify-start md: pr-10 '>
            <p className='md:w-3/4 self-start xl:w-1/2'>The font-end is A next,js app  which uses Chakra UI for elements and  react-query for fetching the data from the database. </p>
          </div>

        </div>
        <div className='mt-24 self-center flex flex-col items-center w-full px-10'>
          <p><span className='font-bold'> react-table </span> is also used for data display</p>
          <img src="/images/cmbm/table.png" className=' shadow-2xl rounded-xl md:w-1/3 mt-5 ' />
        </div>
        <div className='mt-24 self-center flex flex-col items-center w-full px-10'>
          <p className='text-center'><span className='font-bold '> Mind-Body Center </span> is hosted on</p>
          <img src="/images/cmbm/vercel.png" className=' md:w-1/3  ' />
        </div>
        <div className="flex justify-center md:justify-end md:px-20 lg:pr-28 pt-64">
          <Footer />
        </div>
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
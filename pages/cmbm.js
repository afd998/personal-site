import React from 'react'
import Project from '../components/Project'

const projectData = {
  name: { text: "CMBM Digital", link: "https://cmbmbox.vercel.app/" },
  desc: "The online hub for your education in Mind-Body Medicine",
  client: { text: "The Center for Mind-Body Medicine", link: "" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "Web App",
  color: "green-200"
}
const Summary = () => {
  return <p className='text-lg'>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
}
function Cmbm({ projectData }) {
  return (
    <div className=' '>
      <div className=' z-0 w-screen relative'>

        <div className=' z-0 absolute flex flex-col justify-evenly items-center h-[300vh] w-full overflow-hidden text-7xl whitespace-nowrap italic text-clip text-center opacity-5'>
          <p className=' py-10 w-[calc(200vw)]   overflow-hidden  rotate-45     ' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
          <p className='  py-10 w-[calc(200vw)]  overflow-hidden rotate-45   ' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
          <p className='  py-10 w-[calc(200vw)]  overflow-hidden rotate-45    ' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
        </div>
        <div className=' z-0 absolute flex flex-col justify-evenly items-center h-[300vh] w-full overflow-hidden text-7xl whitespace-nowrap italic text-clip text-center opacity-5'>
          <img src="/images/cmbm/brand-mark.png" className=' overflow-hidden  absolute w-96 top-[15%] self-end    translate-x-1/2 -translate-y-1/2' />
          <img src="/images/cmbm/brand-mark.png" className=' overflow-hidden  absolute w-96 top-[35%] self-start  -translate-x-1/2 -translate-y-1/2' />
          <img src="/images/cmbm/brand-mark.png" className=' overflow-hidden  absolute w-96 top-[60%] self-end  translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>
      <Project summary={Summary} projectData={projectData}>

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

      </Project >
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
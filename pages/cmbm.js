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
    <div>
      <Project summary={Summary} projectData={projectData}>
        <div id="sidebar" className=' relative self-center mt-24'>
          <img src="/images/cmbm/sidebar.png" alt="sidebar" className=' shadow-2xl rounded-xl w-36 ' />
          <p className='text-lg absolute top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
          <p className='text-lg absolute top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
          <img src="/images/cmbm/roles-extra.png" alt="sidebar" className=' -bottom-80 -left-32 absolute w-96  max-w-none' />
        </div>
        <div id="schedule" className=' relative self-center mt-96'>
          <p className='text-lg  top-24 text-right right-40'> <span className='font-bold '>Complete stages to advance </span> toward a certification in Mind-Body Medicine </p>
          <p className='text-lg  top-80 left-32'><span className='font-bold text-xs'> ROLES </span> <br /> <span className='font-bold '> Every user is a student,</span>  but Teachers and Admin see additonal functionality</p>
          <img src="/images/cmbm/schedule.png" alt="sidebar" className=' shadow-2xl rounded-xl  w-36 ' />
        </div>
      </Project >
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
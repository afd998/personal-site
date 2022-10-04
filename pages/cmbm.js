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
  return <p>The online hub <br className='hidden md:visible' /> for your education in <br className=' hidden' /> <span className=" font-bold "> Mind-Body Medicine</span></p>
}
function Cmbm({ projectData }) {
  return (

    <div>
      <Project summary={Summary} projectData={projectData}> </Project>
      <div className="w-full mt-20 flex flex-col justify-center space-y-16">
        {" "}
        {/* <Carousel /> */}
        <img src="/images/cmbm/1.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
        <img src="/images/cmbm/3.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
        <img src="/images/cmbm/4.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
      </div>
    </div>)
}


export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData

    },
  }
}


export default Cmbm
import React from 'react'
import Project from '../components/Project'

let projectData = {
  name: { text: "FlyMessage", link: "" },
  desc: "The first diagonal app for the IPhone",
  client: { text: "Atticus Deutsch", link: "/" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "iOS App"

}

function FlyMessage({ projectData }) {

  return (
    <div>       <div className='z-10'>
      <div className=' z-0 w-screen relative'>
        <p className=' py-10 w-[calc(200vw)] text-center opacity-5 text-9xl italic whitespace-nowrap  text-clip overflow-hidden rotate-45 absolute  top-[200px] left-1/2 transform  -translate-x-1/2 -translate-y-1/2' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
        <p className='  py-10 w-[calc(200vw)] text-center opacity-5 text-9xl italic whitespace-nowrap  text-clip overflow-hidden rotate-45 absolute top-[800px] left-1/2 transform  -translate-x-1/2 -translate-y-1/2' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
        <p className='  py-10 w-[calc(200vw)] text-center opacity-5 text-9xl italic whitespace-nowrap  text-clip overflow-hidden rotate-45  absolute  top-[1400px] left-1/2 transform  -translate-x-1/2 -translate-y-1/2' > {projectData.name.text} {" "} {projectData.name.text} {" "} {projectData.name.text}</p>
        {/* <img src="/images/cmbm/brand-mark.png" className=' opacity-5 text-9xl italic whitespace-nowrap overflow-hidden  absolute w-96 top-[15%] left-full transform  -translate-x-1/2 -translate-y-1/2' />
        <img src="/images/cmbm/brand-mark.png" className=' opacity-5 text-9xl italic whitespace-nowrap overflow-hidden  absolute w-96 top-[35%]  transform  -translate-x-1/2 -translate-y-1/2' />
        <img src="/images/cmbm/brand-mark.png" className=' opacity-5 text-9xl italic whitespace-nowrap overflow-hidden   absolute w-96 top-[60%] left-full transform  -translate-x-1/2 -translate-y-1/2' /> */}

      </div>
    </div>
      <Project summary={Summary} projectData={projectData}> </Project></div>
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
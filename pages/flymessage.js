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
    <div>        <p className=' opacity-5 text-9xl italic whitespace-nowrap overflow-clip rotate-45 z-0 absolute -left-36 p-10 top-96'> {projectData.name.text}</p>
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
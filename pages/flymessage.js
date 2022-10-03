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
    <div>  <Project summary={Summary} projectData={projectData}> </Project></div>
  )
}

const Summary = () => {
  return <p>The first <span className=" transform rotate-6 inline-block  px-2">  diagonal </span> app for the IPhone </p >
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData

    },
  }
}


export default FlyMessage
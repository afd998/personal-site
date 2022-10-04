import React from 'react'
import Project from '../components/Project'

let projectData = {
  name: { text: "This Website", link: "/" },
  desc: "Portfolio of work by Atticus Detusch",
  client: { text: "Atticus Deutsch", link: "/" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "Website"

}
function Meta({ projectData }) {

  return (
    <div>  <Project summary={Summary} projectData={projectData}> </Project></div>
  )
}
const Summary = () => {
  return <p>Portfolio of work by <span className='font-bold'>Atticus Detusch </span></p >
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData
    },
  }
}


export default Meta
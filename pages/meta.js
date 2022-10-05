import React from 'react'

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
    <div>  </div>
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
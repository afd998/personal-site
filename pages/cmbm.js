import React from 'react'
import Project from '../components/Project'

function Cmbm() {
  let projectData = {
    name: { text: "cmbm.box", link: "https://cmbmbox.vercel.app/" },
    desc: "Custom web-app for user's journey toward a certification in Mind- Body Medicine.",
    client: { text: "The Center for Mind-Body Medicine", link: "" },

  }
  return (
    <div>
      <Project projectData={projectData} />
    </div>)
}

export default Cmbm
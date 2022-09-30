import React from 'react'
import Project from '../components/Project'
function Meta() {
  let projectData = {
    name: { text: "This Website", link: "/" },
    desc: "Custom web-app for user's journey toward a certification in Mind- Body Medicine.",
    client: { text: "The Center for Mind-Body Medicine", link: "" },

  }
  return (
    <Project projectData={projectData} />
  )
}

export default Meta
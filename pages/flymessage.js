import React from 'react'
import Project from '../components/Project'

function FlyMessage() {
  let projectData = {
    name: { text: "FlyMessage", link: "" },
    desc: "Custom web-app for user's journey toward a certification in Mind- Body Medicine.",
    client: { text: "Atticus Deutsch", link: "/" },

  }
  return (
    <Project projectData={projectData} />
  )
}

export default FlyMessage
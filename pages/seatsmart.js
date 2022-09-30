import React from 'react'
import Project from '../components/Project'

function SeatSmart() {
  let projectData = {
    name: { text: "SeatSmart", link: "" },
    desc: "SeatSmart is a versatile application for educators and managers to randomize group or team membership in a class or company according to diversity characteristics, including race and gender, in order to optimize team learning and deliverables. Planned iterations include enhanced memory; interface with remote web conference platforms with “breakout group” ability; and data analytics for learning and professional group optimization.",
    client: { text: "Atticus Deutsch", link: "/" },

  }
  return (
    <Project projectData={projectData} />
  )
}

export default SeatSmart
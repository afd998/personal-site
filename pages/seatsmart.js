import React from 'react'
import Project from '../components/Project'
let projectData = {
  name: { text: "SeatSmart", link: "https://seatingsmart-15114.firebaseapp.com/home" },
  desc: "Create classroom seating charts according to diversity characteristics.",
  client: { text: "Atticus Deutsch", link: "/" },
  technology: {
    frontend: "",
    backend: "",
  },
  type: "Web App"


}
function SeatSmart({ projectData }) {


  return (
    <div>  <Project summary={Summary} projectData={projectData}> </Project></div>
  )

}
const Summary = () => {
  return <p> Create classroom  <span className='font-bold'> seating charts </span> according to diversity characteristics </p >
}


export async function getStaticProps(context) {
  return {
    props: {
      projectData: projectData
    },
  }
}

export default SeatSmart
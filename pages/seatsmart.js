import React from 'react'

function SeatSmart({ projectData }) {

  return (
    <div></div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: {
        name: { text: "SeatSmart", link: "https://seatingsmart-15114.firebaseapp.com/home" },
        desc: "SeatSmart is an app for educators to randomize group or team membership in a class or  according to diversity characteristics.",
        client: { text: "Atticus Deutsch", link: "/" },
        technology: {
          frontend: "",
          backend: "",
        },
        type: "Web App"

      }
    },
  }
}

export default SeatSmart
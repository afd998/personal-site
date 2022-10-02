import React from 'react'

function FlyMessage({ projectData }) {

  return (
    <div></div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: {
        name: { text: "FlyMessage", link: "" },
        desc: "The first diagonal app for the IPhone",
        client: { text: "Atticus Deutsch", link: "/" },
        technology: {
          frontend: "",
          backend: "",
        },
        type: "iOS App"

      }
    },
  }
}


export default FlyMessage
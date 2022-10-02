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
        desc: "Custom web-app for user's journey toward a certification in Mind- Body Medicine",
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
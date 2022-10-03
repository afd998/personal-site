import React from 'react'

function Meta({ projectData }) {

  return (
    <div></div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      projectData: {
        name: { text: "Meta", link: "/" },
        desc: "Portfolio of work by Atticus",
        client: { text: "Atticus Deutsch", link: "/" },
        technology: {
          frontend: "",
          backend: "",
        },
        type: "Website"

      }
    },
  }
}


export default Meta
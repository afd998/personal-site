import React from 'react'
import Carousel from '../components/Carousel'
function Cmbm({ projectData }) {

  return (
    <div>
      <div className="w-full mt-20 flex flex-col justify-center space-y-16">
        {" "}
        {/* <Carousel /> */}
        <img src="/images/cmbm/1.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
        <img src="/images/cmbm/3.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
        <img src="/images/cmbm/4.png" className='rounded-2xl mx-10 md:mx-40 shadow-2xl' />
      </div>
    </div>)
}
export async function getStaticProps(context) {
  return {
    props: {
      projectData: {
        name: { text: "CMBM Digital", link: "https://cmbmbox.vercel.app/" },
        desc: "The online hub for your education in Mind-Body Medicine",
        client: { text: "The Center for Mind-Body Medicine", link: "" },
        technology: {
          frontend: "",
          backend: "",
        },
        type: "Web App",
        color: "green-200"
      }
    },
  }
}


export default Cmbm
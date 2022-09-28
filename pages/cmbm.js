import React from 'react'

function cmbm() {
  return (
    //video
    //pictures

    <div className=' text-2xl'>
      <h2 >Client: <a href="https://cmbm.org/" className=' hover:underline'>The Center for Mind-Body Medicine</a>
      </h2>
      <h2 > Project: <a href="https://cmbmbox.vercel.app/" className=' hover:underline'>cmbm.box</a>
      </h2>
      <h3>Description:


      </h3>

      <h3>Technology:
        <h4 className=' text-xl'>Front-end: </h4>
        <p className=" text-base">
          Next.js for SEO purposes,
          but the majority of the app is in the deepweb as essentially a Next.JS page behaving as an SPA.
          Chakra-UI is used for a component library. Stripe for payment proccessing. react-table, react-hook-form and react-query are also used.</p>
        <h4 className=' text-xl'> Back-end:
          <p className=" text-base">
            Firebase's firestore database is used and data is is accessed directly from firestore using the client side sdk
          </p>
        </h4>


      </h3>

      <h3>Design:


      </h3>
    </div >
  )
}

export default cmbm
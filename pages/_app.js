import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import "../styles/global.css"
import Project from "../components/Project"
import Sun from "../public/images/cmbm/sun.svg";

const MyApp = ({ Component, pageProps }) => {



  return (
    <>
      <div className=" h-screen dark:text-white dark:bg-gray-600 flex flex-col justify-between relative w-screen ">
        {/* {Component.name === "Cmbm" && < Sun className=" z-0 relative w-full top-[2400px] md:top-[2000px] 2xl:top-[2600px] h-[7000px] md:h-[6000px] left-1/2 -translate-x-1/2" />
        } */}
        <div >
          <Header />
          <div className=" ">
            {/* {Component.name !== "Home" && <Project {...pageProps} />} */}
            <Component {...pageProps} />
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:px-20 lg:pr-28 pt-64">
          <Footer />
        </div>
      </div></>)
}
export default MyApp

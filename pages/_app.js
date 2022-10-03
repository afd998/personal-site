import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import "../styles/global.css"
import Project from "../components/Project"

const MyApp = ({ Component, pageProps }) => {
  console.log(Component)
  console.log(pageProps)


  return (
    <div className=" min-h-screen dark:text-white dark:bg-gray-600 flex flex-col justify-between relative">
      <div >
        <Header />
        <div className=" ">
          {/* {Component.name !== "Home" && <Project {...pageProps} />} */}
          <Component {...pageProps} />
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:px-20 lg:pr-28">
        <Footer />
      </div>
    </div>)
}
export default MyApp

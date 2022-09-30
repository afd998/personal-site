import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react"
import "../styles/global.css"

const MyApp = ({ Component, pageProps }) => {


  return (
    <div className=" min-h-screen dark:text-white dark:bg-gray-600 flex flex-col justify-between relative">
      <div>
        <Header />
        <div className=" lg:px-8 xl:px-16">
          <Component {...pageProps} />
        </div>
      </div>

      <Footer />
    </div>)
}
export default MyApp

import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react"
import "../styles/global.css"

const MyApp = ({ Component, pageProps }) => {


  return (
    <div className=" min-h-screen dark:text-white dark:bg-black">
      <Header />
      <div className="pr-3 pl-1 h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>)
}
export default MyApp

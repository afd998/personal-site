import Head from 'next/head'
import Map from '../components/Map'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Atticus Deutsch | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=' px-3 h-64 '>
        {/* <h2 className="text-2xl font-bold lg:absolute top-44 left-32 ">
          Making myself useful
        </h2>
        <p className="description lg:absolute bottom-56 right-32">
          Tending to my things
        </p> */}
        <div className="absolute flex w-full justify-center top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
          <Map />
        </div>


      </div>



    </div>
  )
}

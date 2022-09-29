import Head from 'next/head'
import Map from '../components/Map'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Atticus Deutsch | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-screen h-64 '>
        <h2 className="text-2xl font-bold ">
          Making myself useful
        </h2>
        <p className="description">
          Tending to my things:
        </p>
        <div className=" absolute flex w-full justify-center top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
          <Map />
        </div>


      </div>



    </div>
  )
}

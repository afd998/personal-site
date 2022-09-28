import Head from 'next/head'
import Map from '../components/Map'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Atticus Deutsch | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className="text-3xl font-bold ">
          Making myself useful
        </h1>
        <p className="description">
          Tending to my things:
        </p>
        <div className="flex justify-center items-start">
          {/* projects / work */}
          <Map />

        </div>

      </main>



    </div>
  )
}

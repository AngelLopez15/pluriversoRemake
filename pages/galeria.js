import Head from 'next/head'
import Gallery from "react-photo-gallery";
import {photos} from '../data/photos'

export default function galeria() {
  return (
    <>
      <Head>
        <title>Galeria | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Galeria fotografica con material original propiedad de Pluriverso Digital la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-galeria md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Galeria</h1>
      </header>
      <main>
        <section className="md:py-5">
          <h2>Galeria de fotos de Pluriverso Digital</h2>
          <div>
            <Gallery photos={photos} />
          </div>
        </section>
      </main>
    </>
  )
}

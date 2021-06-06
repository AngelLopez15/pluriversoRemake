import Gallery from "react-photo-gallery";
import {photos} from '../data/photos'

export default function galeria() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-galeria">
        <h1 className="text-7xl text-white font-bold">Galeria</h1>
      </header>
      <main>
        <section>
          <h2>Galeria de fotos de Pluriverso Digital</h2>
          <div>
            <Gallery photos={photos} />
          </div>
        </section>
      </main>
    </>
  )
}

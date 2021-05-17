import Gallery from "react-photo-gallery";
import {photos} from '../data/photos'

export default function galeria() {
  return (
    <>
      <header>
        <h1>Galeria</h1>
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

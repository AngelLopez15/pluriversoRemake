import Integrante from '../components/Integrante'
import integrantes from '../data/integrantes.json'
export default function creadores() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-creadores md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Creadores</h1>
      </header>
      <main className="mx-12 md:mx-2">
        <section>
          <h2>Integrantes</h2>
          <div className="flex w-full flex-wrap justify-center md:w-full">
            {
              integrantes.map((item) => (
                <Integrante
                  key={item.id}
                  {...item}
                />
              ))
            }
          </div>
        </section>
        <section className="md:py-0">
          <h2 className="md:mb-0">Cápsula de equipo</h2>
          <div className="flex justify-center md:w-full md:block">
            <div>
              <iframe src={`https://player.vimeo.com/video/292275653?color=c9ff23&title=0&byline=0&portrait=0`} className="md:w-full" width="640" height="360"></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

import Integrante from '../components/Integrante'
import integrantes from '../data/integrantes.json'
export default function creadores() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-creadores">
        <h1 className="text-7xl text-white font-bold">Creadores</h1>
      </header>
      <main className="mx-12">
        <section>
          <h2>Integrantes</h2>
          <div className="flex flex-wrap justify-center">
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
        <section>
          <h2>Cápsula de equipo</h2>
          <div className="flex justify-center">
            <div>
              <iframe src={`https://player.vimeo.com/video/292275653?color=c9ff23&title=0&byline=0&portrait=0`} width="640" height="360"></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

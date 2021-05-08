import Integrante from '../components/Integrante'
import integrantes from '../data/integrantes.json'
export default function creadores() {
  return (
    <>
      <header>
        <h1>Creadores</h1>
      </header>
      <main>
        <section>
          <h2>Integrantes</h2>
          <div>
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
        </section>
      </main>
    </>
  )
}

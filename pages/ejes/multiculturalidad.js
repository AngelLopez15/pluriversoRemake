import Link from 'next/link'

export default function multiculturalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso">
        <h1 className="text-7xl text-white font-bold">Multiculturalidad</h1>
      </header>
      <main className="mx-12">
        <section>
          <h2>Presentación</h2>
          <p className="font-medium text-lg text-gray-700">La multiculturalidad es el reconocimiento de diversos grupos culturales y presupone su posible coexistencia dentro de un espacio determinado. El término es de carácter descriptivo y varios autores lo consideran como el primer paso de la posmodernidad a la complejización de los procesos socioculturales.</p>
          <h2>A continuación, encontrarás:</h2>
          <ul className="list-disc">
            <li className="font-medium text-gray-700 mb-2">Bibliografía con la que puedes explorar más a fondo los distintos planteamientos del concepto.</li>
            <li className="font-medium text-gray-700 mb-2">Un mapa conceptual que presenta el panorama general del concepto y el modo en que se ha trabajado desde distintas disciplinas como son la filosofía, la antropología, la sociología, entre otras.</li>
            <li className="font-medium text-gray-700 mb-2">Ejemplos de proyectos actuales, principalmente, en México.</li>
            <li className="font-medium text-gray-700 mb-2">Materiales sobre los estudios del concepto y su aplicación en algunos contextos.</li>
            <li className="font-medium text-gray-700 mb-2">Opiniones de especialistas en el tema desde diferentes disciplinas.</li>
          </ul>
        </section>
        <section>
          <h2>Mapa mental</h2>
          <div className="mb-4">
            <p className="font-medium text-lg text-gray-700">Decargar mapa mental</p>
            <a target="_blank" rel="noopener noreferrer" href="/mapas/identidad.jpg">como PDF</a>
            <a target="_blank" rel="noopener noreferrer" href="/mapas/identidad.pdf">como imagen</a>
          </div>
          <div className="mb-4">
            <p className="font-medium text-lg text-gray-700">Descargar nota metodológica</p>
            <a target="_blank" rel="noopener noreferrer" href="/notas/notaIdentidad.pdf">Descargar</a>
          </div>
          <div className="mb-4">
            <p className="font-medium text-lg text-gray-700">Bibliografía</p>
            <Link href="/bibliografia/bibliografia-multiculturalidad">
              <a>Ir a la seccion</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

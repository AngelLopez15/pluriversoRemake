import Link from 'next/link'

export default function interseccionalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-identidad">
        <h1 className="text-7xl text-white font-bold">Interseccionalidad</h1>
      </header>
      <main className="mx-12">
        <section>
          <h2>Presentación</h2>
          <p className="font-medium text-lg text-gray-700">Es un concepto que nace del movimiento feminista afro estadounidense. Parte de la observación de que, si bien una mujer y un hombre negros enfrentan racismo, la mujer afronta también patriarcado. La interseccionalidad busca comprender cómo las múltiples identidades sociales construidas como raza, género, etnicidad, clase, entre otras, se cruzan en un nivel de experiencia individual y colectiva que reflejan sistemas de opresión y privilegio en la estructura social. Para realizar un análisis interseccional se requiere investigar con especificidad el contexto histórico social y con ello todos los elementos que generan división social, desigualdad y discriminación.</p>
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
            <Link href="/bibliografia/bibliografia-interseccionalidad">
              <a>Ir a la seccion</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

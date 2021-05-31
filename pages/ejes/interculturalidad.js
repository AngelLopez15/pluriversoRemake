import Link from 'next/link'

export default function interculturalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-identidad">
        <h1 className="text-7xl text-white font-bold">Interculturalidad</h1>
      </header>
      <main className="mx-12">
        <section>
          <h2>Presentación</h2>
          <p className="font-medium text-lg text-gray-700">El concepto de interculturalidad se ha trabajado principalmente por autores de América Latina. Plantea las relaciones e interacciones entre miembros e instituciones de distintas culturas y sociedades. Se trata de un proyecto social y político que está vinculado con los proyectos, “desde abajo” o bien parte de las luchas políticas de los pueblos originarios o afrodescendientes.</p>
          <p className="font-medium text-lg text-gray-700">Se plantea como un proyecto alternativo al multiculturalismo, dado que el multiculturalismo también traza modelos sociales para administrar a la diversidad cultural. Sin embargo, es un proyecto que suele buscar que las diferencias culturales deberían de ser integradas o toleradas por las características de las culturas dominantes con las que conviven. Es un modelo que principalmente se plantea en países europeos y en el caso de Norteamérica, en Canadá.</p>
          <p className="font-medium text-lg text-gray-700">La interculturalidad plantea que las relaciones entre grupos culturales deben de ser horizontales. Es decir, que no exista dominación de una cultura sobre otra, y que los diálogos entre ellas deben de ir más allá de la integración, para formar condiciones de igualdad y justicia social.</p>
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
            <Link href="/bibliografia/bibliografia-interculturalidad">
              <a>Ir a la seccion</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

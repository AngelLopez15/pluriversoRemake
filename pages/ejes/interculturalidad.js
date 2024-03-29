import Head from 'next/head'
import Link from 'next/link'

export default function interculturalidad() {
  return (
    <>
      <Head>
        <title>Interculturalidad | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Eje Interculturalidad. Pluriverso Digital es la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Interculturalidad</h1>
      </header>
      <main className="mx-12 md:mx-2">
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
          <div className="mb-10 flex justify-center">
            <a target="_blank" rel="noopener noreferrer" href="https://www.goconqr.com/es-MX/p/14780222-----Interculturalidad-mind_maps?frame=true" className="bg-action py-4 px-20 mr-2 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-secondary sm:px-10 sm:text-base md:mr-0 md:mb-2">Ir al mapa mental interactivo</a>
          </div>
          <div className="mb-4">
            <p className="font-medium text-2xl text-gray-700 text-center">Decargar mapa mental</p>
            <div className="flex justify-center md:flex-wrap">
              <a target="_blank" rel="noopener noreferrer" href="/mapas/interculturalidad.jpg" className="bg-red-500 py-4 px-20 mr-2 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-blue-500 sm:px-16 md:mr-0 md:mb-2">como PDF</a>
              <a target="_blank" rel="noopener noreferrer" href="/mapas/Interculturalidad.pdf" className="bg-blue-400 py-4 px-20 ml-2 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-green-500 sm:px-12 md:ml-0">como imagen</a>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-medium text-2xl text-gray-700 text-center">Descargar nota metodológica</p>
            <div className="flex justify-center">
              <a target="_blank" rel="noopener noreferrer" href="/notas/notaInterculturalidad.pdf" className="bg-green-400 py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 sm:px-16">Descargar</a>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-medium text-2xl text-gray-700 text-center">Bibliografía</p>
            <div className="flex justify-center">
              <Link href="/bibliografia/bibliografia-interculturalidad">
                <a className="bg-yellow-400 py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-green-300 sm:px-12">Ir a la seccion</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

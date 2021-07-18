import Head from 'next/head'

export default function publicaciones() {

  const books = [
    {
      id: "1",
      titulo: "Las culturas hoy",
      portada: "/images/publicaciones/las_culturas.png",
      link: "/images/publicaciones/las_culturas_hoy.pdf",
    },
    {
      id: "2",
      titulo: "Fronteras de género",
      portada: "/images/publicaciones/fronteras_de_genero.png",
      link: "/images/publicaciones/fronteras_de_genero.pdf",
    }
  ]

  return (
    <>
      <Head>
        <title>Publicaciones | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Material didactico de apoyo didactico de Pluriverso Digital la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-recursos md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Publicaciones</h1>
      </header>
      <main className="mx-12 md:mx-2">
        <section className="md:py-5">
          <h2>Libros disponibles</h2>
          <div className="flex w-full flex-wrap justify-around">
            {
              books.map((item)=>(
                <article key={item.id} className="bg-white rounded-md p-2 md:my-2 shadow-md transition duration-500 ease-in-out hover:shadow-2xl">
                  <header>
                    <div>
                      <picture>
                        <img src={item.portada} alt={item.titulo} />
                      </picture>
                    </div>
                    <h3 className="text-center text-xl font-semibold my-2">{item.titulo}</h3>
                  </header>
                  <div className="flex w-full justify-center">
                    <a target="_blank" rel="noopener noreferrer" href={item.link} className="bg-action py-2 px-20 my-2 rounded-md font-semibold" >Descargar</a>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

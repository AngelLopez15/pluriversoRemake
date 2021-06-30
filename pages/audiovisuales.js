import Head from 'next/head'
import Link from 'next/link'

export default function audiovisuales() {

  const videoConceptos = [
    {
      id: '1',
      imagen: '/images/portadas/Thumb_Juana.png',
      titulo: 'Dra. Juana Martínez Reséndiz',
      link: '240200996'
    },
    {
      id: '2',
      imagen: '/images/portadas/Thumb_Agueda.png',
      titulo: 'Dra. Águeda Suárez Gómez',
      link: '237015245',
    },
    {
      id: '3',
      imagen: '/images/portadas/Thumb_Ishita.png',
      titulo: 'Dra. Ishita Benerjee Dube',
      link: '244273683',
    },
    {
      id: '4',
      imagen: '/images/portadas/Thumb_Ambrosio.png',
      titulo: 'Dr. Ambrosio Velasco Gómez',
      link: '245258990',
    },
    {
      id: '5',
      imagen: '/images/portadas/Thumb_Nati.png',
      titulo: 'Dra. Natividad Guierrez Chong',
      link: '286946031',
    },
    {
      id: '6',
      imagen: '/images/portadas/Thumb_Hernan.png',
      titulo: 'Dr. Hernan Salas Quintanal',
      link: '240227564',
    },
    {
      id: '7',
      imagen: '/images/portadas/Thumb_Gilberto.png',
      titulo: 'Dr. Gilberto Giménez',
      link: '286160963',
    },
    {
      id: '8',
      imagen: '/images/portadas/Thumb_estudiosa.png',
      titulo: 'Congreso Internacional de Estudios Afromexicanos',
      link: '237013901',
    },
    {
      id: '9',
      imagen: '/images/portadas/aniv.png',
      titulo: '10° Aniversario de la Licenciatura en Desarrollo y Gestión Interculturales',
      link: '312660416',
    },
  ]

  const videoExperiencias = [
    {
      id: '1',
      imagen: '/images/portadas/Thumb_interseccionalidad.png',
      titulo: 'Interseccionalidad',
      link: '288278952',
    },
    {
      id: '2',
      imagen: '/images/portadas/Thumb_interculturalidad.png',
      titulo: 'Interculturalidad',
      link: '291798756',
    },
    {
      id: '3',
      imagen: '/images/portadas/Thumb_identidad.png',
      titulo: 'Identidad',
      link: '310243050',
    },
  ]

  const videoExpresiones = [
    {
      id: '1',
      imagen: '/images/portadas/aniv.png',
      titulo: '10° Aniversario de la Licenciatura en Desarrollo y Gestión Interculturales',
      link: '312660416',
    },
    {
      id: '2',
      imagen: '/images/portadas/Thumb_estudiosa.png',
      titulo: 'Congreso Internacional de Estudios Afromexicanos',
      link: '237013901',
    },
    {
      id: '3',
      imagen: '/images/portadas/Thumb_marcha.png',
      titulo: 'Marcha LGBTTIQ+ 2017',
      link: '312657634',
    },
  ]

  return (
    <>
      <Head>
        <title>Audiovisuales | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Material audiovisual de Pluriverso Digital es la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-videos md:py-6">
        <h1 className="text-7xl text-subtitle font-bold md:text-3xl md:text-white">Audiovisuales</h1>
      </header>
      <main className="mx-12 md:mx-2">
        <section className="md:py-4">
          <h2>Investigación audiovisual</h2>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Presentamos un acercamiento en lenguaje visual de las diversidades.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Preguntamos a académicos de la UNAM, de la UAM Xochimilco, de El Colegio de México y de la Universidad de Vigo en Galicia, sobre sus investigaciones y docencia en el salón de clases acerca de los conceptos principales.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Para conocer cómo el concepto se materializa en experiencias, buscamos a creadores que interpretan diversos géneros musicales. La identidad es explorada en los segmentos de la cantante maya Yazmin Novelo, del rapero mazateco José Andrés, y de la intérprete de chilenas, Yamilé Mendoza.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Otras expresiones de afromexicaneidad se pueden ver con el registro de algunas memorias del Congreso Internacional de Estudios Afromexicanos en la Ciudad de Oaxaca.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Las vivencias de la interculturalidad, fueron aportadas por alumnos y profesores nahuas y totonacas en la Universidad Intercultural del Estado de Puebla, y del Centro de Estudios Superiores Indígenas KGOYOM en Huehuetla, Puebla.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Introspecciones sobre cómo vivir identidades diversas son las que registramos del poeta muxe zapoteca, Elvis Guerra, de la activista feminista, Leticia Sánchez, y de las sexualidades trans, Dora Omara Corona. Con estas experiencias, buscamos aportar ejemplos de interseccionalidad. A fin de contribuir al acercamiento de más sexualidades, registramos momentos de la marcha LGBT+ en la Ciudad de México.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Por último, mostramos un simbólico registro de la celebración de la primera década de la Licenciatura en Desarrollo y Gestión Intercultural.</p>
        </section>
        <section className="md:py-4">
          <h2>Conceptos fundamentales</h2>
          <div className="flex w-full flex-wrap justify-center">
            {
              videoConceptos.map((item) => (
                <article key={item.id} className="mx-8 w-96 bg-gray-100 shadow-md mb-16 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-4 2xl:m-2 md:mx-2 md:mb-4">
                  <div className="flex justify-center">
                    <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                  </div>
                  <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                  <div className="flex justify-center mb-8">
                    <Link href={`/video/${item.link}`}>
                      <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 md:px-32 sm:px-28">Ver video</a>
                    </Link>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
        <section className="md:py-4">
          <h2>Experiencias</h2>
          <div className="flex flex-wrap justify-center">
            {
              videoExperiencias.map((item) => (
                <article key={item.id} className="mx-8 w-96 bg-gray-100 shadow-md mb-16 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-4 2xl:m-2 md:mx-2 md:mb-4">
                  <div className="flex justify-center">
                    <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                  </div>
                  <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                  <div className="flex justify-center mb-8">
                    <Link href={`/video/${item.link}`}>
                      <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 md:px-32 sm:px-28">Ver video</a>
                    </Link>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
        <section className="md:py-4">
          <h2>Expresiones</h2>
          <div className="flex flex-wrap justify-center">
            {
              videoExpresiones.map((item) => (
                <article key={item.id} className="mx-8 w-96 bg-gray-100 shadow-md mb-16 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-4 2xl:m-2 md:mx-2 md:mb-4">
                  <div className="flex justify-center">
                    <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                  </div>
                  <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                  <div className="flex justify-center mb-8">
                    <Link href={`/video/${item.link}`}>
                      <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 md:px-32 sm:px-28">Ver video</a>
                    </Link>
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

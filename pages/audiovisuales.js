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
      imagen: '/images/portadas/Thumb_aniv.png',
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
      imagen: '/images/portadas/Thumb_aniv.png',
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
      <header>
        <h1>Audiovisuales</h1>
      </header>
      <main>
        <section>
          <h2>Investigación audiovisual</h2>
          <p>Presentamos un acercamiento en lenguaje visual de las diversidades.</p>
          <p>Preguntamos a académicos de la UNAM, de la UAM Xochimilco, de El Colegio de México y de la Universidad de Vigo en Galicia, sobre sus investigaciones y docencia en el salón de clases acerca de los conceptos principales.</p>
          <p>Para conocer cómo el concepto se materializa en experiencias, buscamos a creadores que interpretan diversos géneros musicales. La identidad es explorada en los segmentos de la cantante maya Yazmin Novelo, del rapero mazateco José Andrés, y de la intérprete de chilenas, Yamilé Mendoza.</p>
          <p>Otras expresiones de afromexicaneidad se pueden ver con el registro de algunas memorias del Congreso Internacional de Estudios Afromexicanos en la Ciudad de Oaxaca.</p>
          <p>Las vivencias de la interculturalidad, fueron aportadas por alumnos y profesores nahuas y totonacas en la Universidad Intercultural del Estado de Puebla, y del Centro de Estudios Superiores Indígenas KGOYOM en Huehuetla, Puebla.</p>
          <p>Introspecciones sobre cómo vivir identidades diversas son las que registramos del poeta muxe zapoteca, Elvis Guerra, de la activista feminista, Leticia Sánchez, y de las sexualidades trans, Dora Omara Corona. Con estas experiencias, buscamos aportar ejemplos de interseccionalidad. A fin de contribuir al acercamiento de más sexualidades, registramos momentos de la marcha LGBT+ en la Ciudad de México.</p>
          <p>Por último, mostramos un simbólico registro de la celebración de la primera década de la Licenciatura en Desarrollo y Gestión Intercultural.</p>
        </section>
        <section>
          <h2>Conceptos fundamentales</h2>
          <div className="flex flex-wrap justify-center">
            {
              videoConceptos.map((item) => (
                <div key={item.id} className="mx-8 w-96 bg-gray-100 shadow-xl mb-16 rounded-lg">
                  <div className="flex justify-center">
                    <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                  </div>
                  <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                  <div className="flex justify-center mb-8">
                    <Link href={`/video/${item.link}`}>
                      <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300">Ver video</a>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <section>
          <h2>Experiencias</h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {
                videoExperiencias.map((item) => (
                  <div key={item.id} className="mx-8 w-96 bg-gray-100 shadow-xl mb-16 rounded-lg">
                    <div className="flex justify-center">
                      <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                    </div>
                    <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                    <div className="flex justify-center mb-8">
                      <Link href={`/video/${item.link}`}>
                        <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300">Ver video</a>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <section>
          <h2>Expresiones</h2>
          <div className="flex flex-wrap justify-center">
            {
              videoExpresiones.map((item) => (
                <div key={item.id} className="mx-8 w-96 bg-gray-100 shadow-xl mb-16 rounded-lg">
                  <div className="flex justify-center">
                    <img className="w-full rounded-lg" src={item.imagen} alt={item.titulo} />
                  </div>
                  <h3 className="text-xl font-semibold text-center my-8 text-blue-900">{item.titulo}</h3>
                  <div className="flex justify-center mb-8">
                    <Link href={`/video/${item.link}`}>
                      <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300">Ver video</a>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

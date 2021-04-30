export default function audiovisuales() {

  const videoConceptos = [
    {
      id: '1',
      imagen: '/images/portadas/Thumb_Juana.png',
      titulo: 'Dra. Juana Martínez Reséndiz',
    },
    {
      id: '2',
      imagen: '/images/portadas/Thumb_Agueda.png',
      titulo: 'Dra. Águeda Suárez Gómez',
    },
    {
      id: '3',
      imagen: '/images/portadas/Thumb_Ishita.png',
      titulo: 'Dra. Ishita Benerjee Dube',
    },
    {
      id: '4',
      imagen: '/images/portadas/Thumb_Ambrosio.png',
      titulo: 'Dr. Ambrosio Velasco Gómez',
    },
    {
      id: '5',
      imagen: '/images/portadas/Thumb_Nati.png',
      titulo: 'Dra. Natividad Guierrez Chong',
    },
    {
      id: '6',
      imagen: '/images/portadas/Thumb_Hernan.png',
      titulo: 'Dr. Hernan Salas Quintanal',
    },
    {
      id: '7',
      imagen: '/images/portadas/Thumb_Gilberto.png',
      titulo: 'Dr. Gilberto Giménez',
    },
    {
      id: '8',
      imagen: '/images/portadas/Thumb_estudiosa.png',
      titulo: 'Congreso Internacional de Estudios Afromexicanos',
    },
    {
      id: '9',
      imagen: '/images/portadas/Thumb_aniv.png',
      titulo: '10° Aniversario de la Licenciatura en Desarrollo y Gestión Interculturales',
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
          <div>
            {
              videoConceptos.map((item) => (
                <div key={item.id}>
                  <img src={item.imagen} alt={item.titulo} />
                  <h3>{item.titulo}</h3>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

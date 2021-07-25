import Head from 'next/head'
import etno from '../data/recursos.json'
import etno2 from '../data/recursos2.json'
import etnoComplemento from '../data/etnoComplemento.json'

export default function recursos() {

  return (
    <>
      <Head>
        <title>Recursos | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Material didactico de apoyo didactico de Pluriverso Digital la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-recursos md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Recursos</h1>
      </header>
      <main className="mx-12 md:mx-2">
        <section className="md:py-5">
          <h2>Material de apoyo</h2>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Con el propósito de complementar los mapas conceptuales y descripciones de Mariana, Montserrat y Miguel, Natividad, comparte tres presentaciones que utiliza en la impartición de la asignatura “Estado y Diversidad Cultural” Cuarto Semestre.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Temarios de otros profesores de la Licenciatura en Gestión y Desarrollo Intercultural.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">El espacio esta abierto para incluir los temarios de más profesores de la carrera.</p>
        </section>
        <section className="md:py-5">
          <h2>Etnografías</h2>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Como parte de la acreditación de la asignatura “Estado y Diversidad Cultural” Cuarto Semestre, la profesora Natividad, solicita a sus alumnos mirar la realidad social y observar la aplicabilidad de algunos de los conceptos desarrollados en clase. Para ello, eligen un lugar determinado, lo observan, y describen lo que ocurre. Entregan la etnografía por escrito y esta es presentada a todo el grupo. Los resultados son fascinantes porque la mirada de los jóvenes sobre la diversidad cultural muestra sorpresas, dudas, conflictos, tensiones y mucho más.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">La sección es el repositorio de estas Etnografías que han sido voluntariamente donadas por sus autores. Hay una enorme riqueza de momentos observados, captados y registrados, que van desde espacios públicos, concursos de belleza, festividades, situaciones en restaurantes, o en aeropuertos, en consultorios, en el transporte público, entre muchísimos más. No sólo la diversidad cultural celebratoria se capta en algunas de las etnografías, sino también casos de racismo, exclusión y discriminación, como reflejo de la diversidad en la ciudad y zonas aledañas. También ha sido extraordinario observar el empeño de los jóvenes puesto en la realización de la Etnografía y su presentación.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Desde 2011, he llevado a cabo esta actividad con las distintas generaciones. No están aquí las etnografías de los primeros años después de 2011. Miguel que ha sido mi asistente de profesor en los últimos años, ha tenido una labor muy valiosa para recopilar las Etnografías y organizar entre los alumnos la presentación en clase. De tal manera que ahora ya estamos mejor organizados para enriquecer la colección, pues Miguel ha llevado un seguimiento de las Etnografías y sus autores, por lo general, se presentan en equipo, pero también hay registros individuales. Hemos convertido las etnografías a pdf y algunas tienen ilustraciones.</p>
        </section>
        <section className="md:py-5">
          <h2>Recursos</h2>
          <table className="table-fixed border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="w-2/5 border border-green-600">Título etnografía</th>
                <th className="w-2/5 border border-green-600">Formato</th>
                <th className="w-1/5 border border-green-600">Descarga</th>
              </tr>
            </thead>
            <tbody>
              {
                etno.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-green-600 text-justify">{item.nombre}</td>
                    <td className="border border-green-600 text-center">{item.formato}</td>
                    <td className="border border-green-600 text-center"><a target="_blank" rel="noopener noreferrer" href={item.enlace}>Descargar</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
        <section className="md:py-5">
          <h2>Etnografías de "Estado y diversidad cultural" 4° semestre 2019-2</h2>
          <table className="table-fixed border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="w-2/5 border border-green-600">Título etnografía</th>
                <th className="w-2/5 border border-green-600">Formato</th>
                <th className="w-1/5 border border-green-600">Descarga</th>
              </tr>
            </thead>
            <tbody>
              {
                etno2.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-green-600 text-justify">{item.nombre}</td>
                    <td className="border border-green-600 text-center">{item.formato}</td>
                    <td className="border border-green-600 text-center"><a target="_blank" rel="noopener noreferrer" href={item.enlace}>Descargar</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
        <section className="md:py-5">
          <h2>Etnografías de “Estado y Diversidad Cultural en México”, semestre 2021-2</h2>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En el contexto de la pandemia de COVID declarada en marzo de 2020, la UNAM abrió la educación en línea a través de sus aulas virtuales.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Estamos muy contentos de incluir las etnografías solicitadas en los semestres 2 de los años 2020 y 2021 porque incluyen una novedad: las y los alumnos presentaron etnografías con temas relacionados a la pandemia.</p>
          <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Nuevamente las etnografías fueron asombrosas, pues ahí plasmaron diversas experiencias de vida cotidiana, de relaciones familiares, de solidaridad, de nostalgia. De tal manera que hemos ampliado la colección de estas etnografías con temas muy originales, y sin precedente, por mencionar algunos: el abandono de mascotas, la experiencia del uso de la Internet en adultos mayores, los cambios en la alimentación, los nuevos sonidos de las calles, las nuevas actividades de estudiantes para obtener ingresos, la expansión de los videojuegos a mujeres, entre muchos más. También el mundo virtual ha sido propicio para la creatividad y la innovación, por ejemplo, la reflexión que amerita la cámara digital y la realidad o irrealidad del color de piel, o la confección del bordado, tradicionalmente en tela e hilo, a una textura digital.</p>
          <table className="table-fixed border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="w-2/5 border border-green-600">Título etnografía</th>
                <th className="w-2/5 border border-green-600">Formato</th>
                <th className="w-1/5 border border-green-600">Descarga</th>
              </tr>
            </thead>
            <tbody>
              {
                etnoComplemento.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-green-600 text-justify">{item.nombre}</td>
                    <td className="border border-green-600 text-center">{item.formato}</td>
                    <td className="border border-green-600 text-center"><a target="_blank" rel="noopener noreferrer" href={item.enlace}>Descargar</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
        <section className="md:py-5">
          <h2>Presentaciones</h2>
          <table className="table-fixed border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="w-2/5 border border-green-600">Título</th>
                <th className="w-2/5 border border-green-600">Autor(es)</th>
                <th className="w-1/5 border border-green-600">Descarga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600 text-justify">Cultura y etnicidad en el siglo del reconocimiento</td>
                <td className="border border-green-600 text-center">Gutiérrez Chong Natividad</td>
                <td className="border border-green-600 text-center"><a target="_blank" rel="noopener noreferrer" href="/doc/cultura-etnicidad.pdf">Descargar</a></td>
              </tr>
              <tr>
                <td className="border border-green-600 text-justify">La influencia de la etnicidad en la identidad nacional de México y en la unidad del Estado chino</td>
                <td className="border border-green-600 text-center">Gutiérrez Chong Natividad</td>
                <td className="border border-green-600 text-center"><a target="_blank" rel="noopener noreferrer" href="/doc/mex_china.pdf">Descargar</a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

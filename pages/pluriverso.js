import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function pluriverso() {
  return (
    <>
      <Head>
        <title>Pluriverso | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Información acerca de la metodologia utilizada para la creación de Pluriverso Digital la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-3xl">Pluriverso</h1>
      </header>
      <main className="mx-12 md:mx-2">
        <section>
          <h2>Acerca del proyecto</h2>
          <Tabs>
            <TabList>
              <Tab>Descripción</Tab>
              <Tab>Historia</Tab>
              <Tab>Objetivos</Tab>
              <Tab>Justificación</Tab>
              <Tab>Metodología</Tab>
              <Tab>Financiamiento</Tab>
              <Tab>Agradecimientos</Tab>
            </TabList>

            <TabPanel>
              <section>
                <h2>Descripción</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">La enseñanza y aprendizaje de la cultura se ha complejizado desde las últimas décadas del siglo XX como resultado del reconocimiento oficial y legal a minorías de distintas identidades. Los pueblos indígenas y afrodescendientes, las identidades sexuales diversas, la articulación de identidades sexuales, con marcadores de raza y etnia, adquieren cada vez mayor visibilidad. Hay cierto ambiente favorable para la expresión de las identidades, ello debido a un activismo consciente, y a sus intelectuales, maestros, poetas, comunicadores, mujeres y hombres, dispuestos a entablar negociación con otros actores y que están contribuyendo a la transformación de los estados-nación. Los estados-nación transitan de una hegemonía monocultural y lingüística, a un reconocimiento de la diversidad. Este reconocimiento no es ideológico, sino que está inscrito en las cartas constitucionales de México, y de muchos otros países. No obstante, su materialización es aún incipiente. Tal reconocimiento ha dado lugar al diseño e implementación de diversas políticas públicas que buscan construir naciones incluyentes, y respetuosas de los derechos humanos, y de las identidades diversas. Las naciones están dejando de ser integracionistas y asimilacionistas para construir sociedades multiculturales e interculturales.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En la actualidad, los términos de interculturalidad, interculturalismo, multiculturalidad, multiculturalismo, interseccionalidad e identidad se usan ampliamente en el discurso cotidiano, político, académico, educativo, mediático, diplomático y cultural. Sin embargo, como ocurre frecuentemente, a mayor utilización de estos conceptos, menor claridad sobre sus significados, semejanzas, diferencias o interconexiones. En PLURIVERSO DIGITAL buscamos intervenir de manera innovadora e interactiva en los conceptos aludidos, recurriendo a las actuales redes socio-digitales de información, de comunicación, y del lenguaje audiovisual.</p>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Historia</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">La idea de PLURIVERSO DIGITAL surgió en el aula de clases. La experiencia docente de la coordinadora por más de 20 años ha puesto como foco de atención, en el proceso enseñanza-aprendizaje, que el estudio de la cultura se ha diversificado, ampliado y complejizado.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Ello por lo menos en los siguientes planos epistemológicos y metodológicos: 1. Políticas públicas multiculturales o interculturales, 2. Construcción de identidades, 3. Complejidad de las identidades, por ejemplo, la interseccionalidad (género, raza, etnia, clase, generación). Por lo tanto, se ha producido nacionalmente e importado del extranjero una vasta literatura que contiene diferentes escuelas, autores, geografías, metodologías, entre otros elementos, los cuales prevalecen dispersos. De ahí que el estudio de la cultura esté desorganizado desde el rigor científico. Tal desestructuración ha generado en consecuencia confusión entre conceptos y términos claves, como son: la interculturalidad, el interculturalismo, el multiculturalismo, la multiculturalidad; la construcción de identidades desde el simbolismo, el etno simbolismo, instrumentalismo, esencialismo, el esencialismo estratégico: La interseccionalidad como metodología para el estudio específico de las identidades complejas, junto con los intersticios, espacios entre identidades, son propuestas teóricas desde el sub continente indio, América, y Europa, conocidas a partir de los años ochenta.</p>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Objetivos</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Crear un espacio en línea, de acceso abierto y gratuito, a todos los interesados en temas de identidades y culturas.</p>
                <ul className="list-disc">
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Ordenar y sistematizar las fuentes documentales y testimoniales (escritas, sonoras, visuales y audiovisuales) que existen sobre los temas de cultura, reconocimiento, identidades e interseccionalidad, utilizando tecnología de la información.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Trazar los estados del arte de los ejes de la propuesta, proporcionando: escuelas de pensamiento, autores, aportaciones, geografías, entre otros.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Construir descripciones de los materiales presentados de manera breve.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Crear recursos didácticos innovadores en contenido epistemológico y metodológico.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Aplicar tecnología de la información a los recursos didácticos innovadores.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Producir materiales audiovisuales, visuales o auditivos (dependiendo de los requerimientos) introductorios y actualizadores en la materia.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Recabar y presentar los productos generados por los alumnos de la licenciatura, dándoles un espacio en el repositorio.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Propiciar la retroalimentación a través del foro creado con ese objetivo.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Articular trabajo de campo propio que indague en casos de identidades complejas a manera de ejemplo y actualización de los temas.</li>
                  <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Generar difusión constante sobre la página en distintos canales, tanto por redes socio-digitales como al extender la invitación a los académicos que imparten asignaturas de ciencias sociales y humanidades, para que tanto ellos como sus alumnos obtengan provecho de la plataforma interactiva.</li>
                </ul>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Justificación</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">El estudio de la cultura se ha complejizado como resultado del reconocimiento a las minorías, y del surgimiento de más identidades. Es por ello que la tecnología de la información es un recurso accesible y actual para contribuir a la sistematización de datos de los conceptos empleados en las temáticas de cultura e identidad, cuya vasta y polémica bibliografía dificulta la identificación de las distintas escuelas de pensamiento con sus respectivas aportaciones. Por lo tanto, la tecnología de la información es una herramienta que contribuye al proceso enseñanza-aprendizaje por medio de la generación de productos innovadores, visuales y auditivos, de fácil acceso, y acorde con la formación digital que caracteriza a las jóvenes generaciones y su disponibilidad para acceder a contenidos de tipo e-learning (aprendizaje electrónico).</p>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Metodología</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Esta plataforma se hizo con un equipo de trabajo interdisciplinario. Han participado jóvenes titulados, y egresados de las carreras de Gestión y Desarrollo Interculturales, Sociología, Ciencias de la Comunicación, Diseño y Comunicación Visual, Ingeniería en Computación.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En conjunto hemos estado realizando investigación de gabinete y de campo con la coordinación de la doctora Natividad Gutiérrez Chong.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">La investigación en gabinete nos ha permitido rastrear y seleccionar el material que queremos presentarles, en cuanto a referencias de autores y bibliografías las hemos trabajado en matrices de contenido y mapas mentales. Incluímos algunas etnografías que voluntariamente fueron aportadas por los alumnos de la materia Estado y Diversidad Cultural, Cuarto Semestre, de la carrera de Gestión y Desarrollo Interculturales de la Facultad de Filosofía y Letras, impartido por la coordinadora de PLURIVERSO DIGITAL. También lanzamos una convocatoria para recopilar imágenes, es una colección en desarrollo que puede ser apreciada en la galería de este sitio.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En cuanto al trabajo de campo, decidimos producir nuestros propios contenidos. Por una parte, hicimos entrevistas a especialistas de diversos temas. Estas entrevistas nos facilitaron hacer una introducción a los conceptos eje de identidad y cultura. Las entrevistas a especialistas nos ayudaron a profundizar en algunos casos y a aclarar dudas, en otros.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Para complementar lo anterior, y no sólo quedarnos con estos temas de manera teórica, planeamos acercarnos a casos específicos de diversidad cultural. Así recopilamos voces, historias y experiencias que nos acercan a las narrativas, con sus conflictos, goces y tensiones que pueblan la diversidad cultural de México.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En todas las entrevistas que fueron realizadas, el equipo contactó al entrevistado, escribió y condujo los guiones así como el registro audiovisual y su postproducción.</p>
                <section>
                  <h2>Metodología general</h2>
                  <ul className="list-disc">
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Sistematización de conceptos y teorías a través de criterios tales como: escuelas de pensamiento, autores, propuestas, influencias y geografías. Para el trabajo de gabinete se tomaron en cuenta los materiales que ya existían sobre los temas, como son: artículos, libros, revistas, ensayos, informes, imágenes, fotos, infografías, videos, prezi columnas, reportajes, notas periodísticas y monografías.</li>
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Exploración empírica del tema al realizar videos explicativos a través de entrevistas a teóricos y a sujetos que portan identidades complejas.</li>
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Utilización de otros recursos digitales, tales como prezis, infografías, power points, entre otros, que permitan hacer un tratamiento a conceptos que se toman como similares, para su diferenciación.</li>
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Ejemplo: etnia-nación-pueblo, multiculturalidad-multiculturalismo-interculturalidad-interculturalismo.</li>
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Sistematización de etnografías realizadas por los alumnos en semestres pasados, las cuales se dividirán según el tema y el espacio público referenciado.</li>
                  </ul>
                </section>
                <section>
                  <h2>Metodología de producción de videos</h2>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Es indispensable tomar en consideración los recursos tecnológicos de registro, ya que, en gran medida la historia del siglo XX hasta la actualidad son contextos que necesitan recurrir a los recursos audiovisuales para complementar las explicaciones. Además de tener valor agregado por el simple hecho de registrar un determinado fenómeno, y mejor aún, darle un sentido explicativo mediante la exploración del lenguaje audiovisual y sus diversas implicaciones para las nuevas plataformas digitales.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Asimismo, conviene aclarar que el método de registro audiovisual es pertinente e incluso inherente para la investigación de fenómenos sociales o antropológicos.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Los métodos son ajustables de acuerdo con los objetivos de los productos audiovisuales. La corriente metodológica proviene de la tradición del cine documental, no por nada en la década de los años 60 y 70 del siglo pasado, era necesario comenzar a utilizar las ventajas tecnológicas para poner en práctica el método de observación, es por eso vasto el contenido generado en relación con temas de relevancia actual como lo es el fenómeno de la diversidad cultural.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">El ingreso a una plataforma de difusión de contenidos académicos es un ámbito digital donde se pueden aprovechar y explorar los alcances de los contenidos de tipo e-learning (aprendizaje electrónico), ajustados y adecuados a un lenguaje que trasciende, y brinda otro tipo de experiencia estética en el aprendizaje del alumno de bachillerato o universitario.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">En los tiempos actuales, la creación de estos materiales genera en la comunidad estudiantil, iniciativas para a realizar estos registros, gracias a las ventajas tecnológicas de registro, producción y difusión.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Pluriverso DIGITAL permite adecuar contenidos bibliográficos o de soportes análogos a un formato digital de fácil acceso con el fin de complementar contenidos relacionados con la materia de Estado y Diversidad Cultural, pero que sin duda apoya el programa de la licenciatura en Desarrollo y Gestión Interculturales de la Facultad de Filosofía y Letras de la UNAM.</p>
                  <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Hemos creado contenido propio y actualizado para esta plataformam multimedia, en dos vías:</p>
                  <ul className="list-disc">
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Explicación de temas o fenómenos sociales haciendo entrevistas a especialistas para actualizar el debate. Cada entrevista tuvo un tratamiento audiovisual para que sea dinámico para los alumnos. Asimismo, se crearon algunos reportajes de corta duración que muestran los casos o testimonios de coyunturas que sucedieron, por ejemplo, conferencias sobre afrodescendientes, o sobre la fundación de la licenciatura en Desarrollo y Gestión Interculturales de la Facultad de Filosofía y Letras, o la marcha de la comunidad LGTTT en la Ciudad de México. Lo anterior implicó un tratamiento documental en la realización de los videos. Como resultados obtuvimos gran riqueza de aporte audiovisual en tanto que tenemos la posibilidad de mostrar casos para que la comunidad estudiantil pueda tener una imagen más concreta de la realidad a la quiere estudiar y conocer mejor.</li>
                    <li className="font-medium text-gray-700 mb-2 md:text-base md:text-justify">Desarrollo de contenidos gráficos animados (animación audiovisual cuyo valor radica en la dinamización de elementos visuales que ayudan a explicar o contar una historia mediante las configuraciones discursivas del audiovisual) o estáticos (carteles, infografías, presentaciones virtuales en formato prezi o power point para su fácil transporte y consulta) cuyo contenido de valor radicará en la creación de videos explicativos de conceptos, definiciones, términos, tipologías, corrientes de pensamiento, paradigmas con relación al temario, y a la curación de los contenidos.</li>
                  </ul>
                </section>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Financiamiento</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">El equipo de Pluriverso DIGITAL extiende su profundo agradecimiento a todos los colaboradores de este espacio, quienes fueron prestadores de servicio social, becarios y proveedores externos a este proyecto. Además, a todos aquellos que dieron su consentimiento para incorporar sus materiales etnográficos y fotográficos sobre los temas, a los funcionarios universitarios que nos dieron facilidades para la grabación de las cápsulas con investigadores, y por supuesto, al profesorado que gratamente participó en las entrevistas y en las grabaciones compartiendo sus conocimientos.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Un reconocimiento especial a todas las personas que nos permitieron conocer de cerca sus experiencias de vida para comprender mejor la diversidad cultural, así como la utilización de los espacios, estos son: Universidad Intercultural del Estado de Puebla, el Centro de Estudios Superiores Indígenas KGOYOM, especialmente a las maestras, Jazmín Carrasco Hernández, y a Diana de Gaona Barrientos, a José Luis Enciso de la Librería del Fondo de Cultura Económica, Rosario Castellanos, al Dr. Florentino Badial Hernández, Director de la Clínica Especializada Condesa Iztapalapa.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">A los egresados de la carrera de la Licenciatura en Gestión y Desarrollo Intercultural por su generosa contribución con los materiales etnográficos del repositorio, así como por sus imágenes para la galería de fotos. Ha sido muy valioso el apoyo de la Dirección General de Cómputo y de Tecnologías de Información y Comunicación, especialmente, de la maestra Rebeca Gaytan. En el Instituto de Investigaciones Sociales, nos hemos beneficiado del apoyo y experiencia del Departamento de Computo, de su jefa, la maestra Sofía Ake e indudablemente, de la atinada observación crítica del ingeniero en programación Pathros Ibarra. La Biblioteca del IISUNAM siempre ha estado atenta a nuestras numerosas solicitudes, muchas gracias a sus técnicos académicos: Leticia Limón, Edgar Guzmán y Andrés Ramírez. El doctor Miguel Armando López Leyva, director del IISUNAM, sede del proyecto, nos ha proporcionado todo el apoyo necesario por lo que aprovechamos la oportunidad para dejar constancia de nuestro agradecimiento que hacemos extensivo a las secretarías académicas, técnica y administrativa.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Con entusiasta agradecimiento reconocemos el apoyo brindado a los coordinadores de la Licenciatura en Gestión y Desarrollo Intercultural, en la Facultad de Filosofía y Letras, al maestro Alí Albarrán, a Rubén Torres, con quien siempre estamos en deuda. En el Centro Peninsular en Humanidades y Ciencias Sociales, a los doctores, Adrián Curiel y Ricardo Santillán, director y secretario académico.</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Finalmente, nuestro aprecio a todos los profesores-investigadores que generosamente han opinado sobre la relevancia de esta obra conjunta, y cuyas palabras enriquecen la página de inicio de Pluriverso DIGITAL.</p>
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                <h2>Agradecimientos</h2>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">Clave de proyecto PE404617 Programa de Apoyo a Proyectos para la Innovación y Mejoramiento de la Enseñanza (PAPIME) Dirección General de Asuntos del Personal Académico (DGAPA) Instituto de Investigaciones Sociales (IIS) de la UNAM Universidad Nacional Autónoma de México (UNAM).</p>
              </section>
            </TabPanel>
          </Tabs>
        </section>
      </main>
    </>
  )
}

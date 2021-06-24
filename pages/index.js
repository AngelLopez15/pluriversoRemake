// import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header className="w-full h-screen imagen-fondo">
        <div className="flex w-full h-screen justify-center items-center md:px-2 sm:px-1">
          <div className="w-1/2 md:w-full md:text-center">
            <h1 className="text-7xl text-white font-bold md:text-5xl sm:text-4xl">Pluriverso Digital</h1>
            <p className="my-8 text-3xl text-white font-medium md:text-2xl sm:text-xl">La Plataforma Digital sobre Estudios de la Diversidad Cultural en México</p>
            <a className="py-3 px-24 rounded-full border-2 border-white text-2xl sm:text-lg sm:px-20 text-white font-medium transition duration-300 ease-in-out hover:bg-subtitle" href="#ejes">Ir a ejes tematicos</a>
          </div>
        </div>
      </header>
      <main className="mx-12 md:mx-2">
        <section className="md:mb-0">
          <h2>Acerca de Pluriverso</h2>
          <div className="flex w-full mb-12 md:flex-wrap">
            <div className="w-1/3 overflow-hidden rounded-xl md:w-full">
              <img className="rounded-xl transition duration-500 ease-in-out transform hover:scale-110" src="/images/home/imagenHome2.webp" alt="pintura muralista de la UNAM" />
            </div>
            <div className="flex w-2/3 items-center px-12 md:w-full md:px-2 md:mt-4 md:text-justify">
              <p className="font-medium text-xl text-gray-700">La Plataforma Digital sobre Estudios de la Diversidad Cultural en México, a la que hemos llamado Pluriverso DIGITAL, es un Proyecto financiado por el Programa de Apoyo a Proyectos para la Innovación y Mejoramiento de la Enseñanza PAPIME PE404617, abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas. Estos ejes son: identidad, interseccionalidad, interculturalidad, interculturalismo, multiculturalidad y multiculturalismo.</p>
            </div>
          </div>
          <div className="flex w-full mb-12 md:flex-wrap">
            <div className="flex w-2/3 items-center px-12 md:w-full md:px-2 md:mt-4 md:text-justify md:order-2">
              <p className="font-medium text-xl text-gray-700">Pluriverso DIGITAL es una herramienta digital que ofrece un panorama de la complejidad de la cultura y sus interconexiones de esos seis conceptos o ejes. Cada uno de estos incluye un mapa mental, bibliografía, imágenes y vídeos. En la elaboración de Pluriverso DIGITAL han participado egresados de la Licenciatura en Gestión y Desarrollo Intercultural, de la Facultad de Filosofía y Letras, quienes han contribuido con su experiencia y creatividad. En tanto que cada eje tuvo su propio abordaje, se incluyen los testimonios metodológicos de sus autores.</p>
            </div>
            <div className="w-1/3 overflow-hidden rounded-xl md:w-full">
              <img className="rounded-xl transition duration-500 ease-in-out transform hover:scale-110" src="/images/home/imagenHome1.webp" alt="pintura muralista de la UNAM" />
            </div>
          </div>
          <div className="flex w-full md:flex-wrap">
            <div className="w-1/3 overflow-hidden rounded-xl md:w-full">
              <img className="rounded-xl transition duration-500 ease-in-out transform hover:scale-110" src="/images/home/imagenHome3.webp" alt="pintura muralista de la UNAM" />
            </div>
            <div className="flex w-2/3 items-center px-12 md:w-full md:px-2 md:pt-4">
              <div className="md:text-justify">
                <p className="font-medium text-xl text-gray-700">La Licenciatura en Gestión y Desarrollo Intercultural, se imparte en la Facultad de Filosofía y Letras, en el Centro Peninsular en Humanidades en Ciencias Sociales y en la Escuela Nacional de Estudios Superiores Unidad León.</p>
                <p className="font-medium text-xl text-gray-700">La Dra. Natividad Gutiérrez Chong, investigadora del Instituto de Investigaciones Sociales, y profesora de la Licenciatura en Gestión y Desarrollo Intercultural, es la responsable y coordinadora de esta obra conjunta.</p>
                <p className="font-medium text-xl text-gray-700">Pluriverso Digital habrá de incorporarse a la RUA (Red Universitaria de Aprendizaje). Esta plataforma está hecha en la Universidad Nacional Autónoma de México.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex w-full h-screen justify-center items-center relative my-24 md:my-3 md:static md:flex-wrap md:h-auto">
          <div className="w-96 p-4 bg-green-100 rounded-lg shadow-md absolute top-0 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">Celebramos el emeritazgo del profesor Gilberto Giménez, brillante teórico de las culturas y las identidades.</p>
          </div>
          <div className="w-96 p-4 bg-blue-200 rounded-lg shadow-md absolute left-8 top-32 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">Recordamos al relator especial en cuyo mandato se aprobo la declaración de las Naciones Unidas sobre los Derechos de los Pueblos Indígenas, el Dr. Rodolfo Stavenhagen.</p>
          </div>
          <div className="w-96 p-4 bg-red-200 rounded-lg shadow-md absolute right-8 top-32 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">Los sentidos visuales y auditivos son potenciados con recursos técnicos que ayudan a reforzar y desarrollar procesos de enseñanza-aprendizaje. Te invitamos a compartir nuestra experiencia.</p>
          </div>
          <div className="w-96 md:hidden">
            <img className="transition duration-500 ease-in-out transform hover:scale-150" src="/images/home/book.svg" alt="ilustración tipo caricatura de una mujer leyendo un libro" />
          </div>
          <div className="w-96 p-4 bg-pink-200 rounded-lg shadow-md absolute left-8 bottom-32 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">La UNAM nos ha formado. Hemos aplicado nuestro conocimiento de manera interdisciplinaria: gestión y desarrollo intercultural, sociología, antropoligía, comunicación, diseño y comunicación visual, computación.</p>
          </div>
          <div className="w-96 p-4 bg-yellow-100 rounded-lg shadow-md absolute right-8 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl bottom-36 md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">Hemos recopilado diferentes materiales de interes. Tenemos libros y artículos para quienes les gusta leer, vídeos y fotografías para quienes son más visuales, y los comentarios y opiniones de investigadores y especialistas en el tema.</p>
          </div>
          <div className="w-96 p-4 bg-green-200 rounded-lg shadow-md absolute bottom-0 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl md:static md:w-full md:my-2">
            <p className="font-medium text-justify mb-0">Nuestra experiencia creativa ha sido la interdisciplinariedad aplicada al estudio de la diversidad cultural.</p>
          </div>
        </div>
        <div className="imagen-paralax w-full md:hidden"></div>
        <section id="ejes">
          <h2>Ejes temáticos</h2>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:w-full">
            <div className="flex justify-center items-center w-full h-80 bg-red-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/identidad">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Identidad</h3>
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-80 bg-blue-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/interculturalidad">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Interculturalidad</h3>
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-80 bg-green-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/interculturalismo">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Interculturalismo</h3>
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-80 bg-yellow-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/interseccionalidad">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Interseccionalidad</h3>
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-80 bg-pink-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/multiculturalismo">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Multiculturalismo</h3>
                </a>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-80 bg-purple-500 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-y-110 hover:bg-secondary hover:shadow-2xl md:h-40">
              <Link href="/ejes/multiculturalidad">
                <a>
                  <h3 className="text-white text-3xl font-extrabold">Multiculturalidad</h3>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h2>Investigación audiovisual</h2>
          <div className="flex justify-around mb-20 md:flex-wrap md:mb-10">
            <div className="mx-8 w-96 rounded-lg overflow-hidden md:w-full md:mx-0 md:my-2">
              <img className="w-full rounded-lg transition duration-500 ease-in-out transform hover:scale-110" src="/images/portadas/Thumb_Juana.png" alt="Dra. Juana Martínez Reséndiz" />
            </div>
            <div className="mx-8 w-96 rounded-lg overflow-hidden md:w-full md:mx-0 md:my-2">
              <img className="w-full rounded-lg transition duration-500 ease-in-out transform hover:scale-110" src="/images/portadas/Thumb_Hernan.png" alt="Dr. Hernan Salas Quintanal" />
            </div>
            <div className="mx-8 w-96 rounded-lg overflow-hidden md:w-full md:mx-0 md:my-2">
              <img className="w-full rounded-lg transition duration-500 ease-in-out transform hover:scale-110" src="/images/portadas/aniv.png" alt="10° Aniversario de la Licenciatura en Desarrollo y Gestión Interculturales" />
            </div>
          </div>
          <div className="text-center">
            <Link href="/audiovisuales">
              <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 sm:px-12">Ir a la sección de videos</a>
            </Link>
          </div>
        </section>
        <section>
          <h2>Hecho en</h2>
          <p className="font-medium text-xl text-gray-700 md:text-sm md:text-justify md:mx-2">Hecho en México por la Universidad Nacional Autónoma de México (UNAM), 2019. Plataforma Digital sobre estudios de la diversidad cultural en México Pluriverso Digital, financiado por PAPIME y llevado a cabo en el Instituto de Investigaciones Sociales (IIS- UNAM) con total apego a lo dispuesto en el Acuerdo por el que se establecen los Lineamientos Generales para la Política de Acceso Abierto de la Universidad Nacional Autónoma de México, la Legislación Universitaria, la Ley Federal de Derechos de Autor y cualquier otro ordenamiento en materia de propiedad intelectual aplicable.</p>
          <div className="flex justify-center md:mb-5">
            <div className="w-60 mx-10 transition duration-500 ease-in-out transform hover:rotate-360">
              <img className="w-full rounded-lg" src="/images/home/unam.svg" alt="Logo UNAM" />
            </div>
            <div className="flex items-center w-96 mx-10">
              <img src="/images/home/logo_iis_horizontal.png" alt="Logo UNAM" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

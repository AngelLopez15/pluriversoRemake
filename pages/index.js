// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header className="w-full h-screen imagen-fondo">
        <div className="flex w-full h-screen justify-center items-center">
          <div className="w-1/2">
            <h1 className="text-7xl text-white font-bold">Pluriverso Digital</h1>
            <p className="my-8 text-3xl text-white font-medium">La Plataforma Digital sobre Estudios de la Diversidad Cultural en México</p>
            <a className="py-3 px-24 rounded-full border-2 border-white text-2xl text-white font-medium transition duration-300 ease-in-out hover:bg-subtitle" href="#ejes">Ir a ejes tematicos</a>
          </div>
        </div>
      </header>
      <main>
        <div className="flex w-full h-screen justify-center items-center relative my-24">
          <div className="w-96 p-4 bg-green-100 rounded-lg shadow-xl absolute top-0">
            <p className="font-medium text-justify mb-0">Celebramos el emeritazgo del profesor Gilberto Giménez, brillante teórico de las culturas y las identidades.</p>
          </div>
          <div className="w-96 p-4 bg-blue-200 rounded-lg shadow-xl absolute left-8 top-32">
            <p className="font-medium text-justify mb-0">Recordamos al relator especial en cuyo mandato se aprobo la declaración de las Naciones Unidas sobre los Derechos de los Pueblos Indígenas, el Dr. Rodolfo Stavenhagen.</p>
          </div>
          <div className="w-96 p-4 bg-red-200 rounded-lg shadow-xl absolute right-8 top-32">
            <p className="font-medium text-justify mb-0">Los sentidos visuales y auditivos son potenciados con recursos técnicos que ayudan a reforzar y desarrollar procesos de enseñanza-aprendizaje. Te invitamos a compartir nuestra experiencia.</p>
          </div>
          <div className="w-96">
            <img src="/images/home/book.svg" alt="ilustración tipo caricatura de una mujer leyendo un libro" />
          </div>
          <div className="w-96 p-4 bg-pink-200 rounded-lg shadow-xl absolute left-8 bottom-32">
            <p className="font-medium text-justify mb-0">La UNAM nos ha formado. Hemos aplicado nuestro conocimiento de manera interdisciplinaria: gestión y desarrollo intercultural, sociología, antropoligía, comunicación, diseño y comunicación visual, computación.</p>
          </div>
          <div className="w-96 p-4 bg-yellow-100 rounded-lg shadow-xl absolute right-8 bottom-36">
            <p className="font-medium text-justify mb-0">Hemos recopilado diferentes materiales de interes. Tenemos libros y artículos para quienes les gusta leer, vídeos y fotografías para quienes son más visuales, y los comentarios y opiniones de investigadores y especialistas en el tema.</p>
          </div>
          <div className="w-96 p-4 bg-green-200 rounded-lg shadow-xl absolute bottom-0">
            <p className="font-medium text-justify mb-0">Nuestra experiencia creativa ha sido la interdisciplinariedad aplicada al estudio de la diversidad cultural.</p>
          </div>
        </div>
        <section>
          <h2>Acerca de Pluriverso</h2>
          <p>La Plataforma Digital sobre Estudios de la Diversidad Cultural en México, a la que hemos llamado Pluriverso DIGITAL, es un Proyecto financiado por el Programa de Apoyo a Proyectos para la Innovación y Mejoramiento de la Enseñanza PAPIME PE404617, abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas. Estos ejes son: identidad, interseccionalidad, interculturalidad, interculturalismo, multiculturalidad y multiculturalismo.</p>
          <p>Pluriverso DIGITAL es una herramienta digital que ofrece un panorama de la complejidad de la cultura y sus interconexiones de esos seis conceptos o ejes. Cada uno de estos incluye un mapa mental, bibliografía, imágenes y vídeos. En la elaboración de Pluriverso DIGITAL han participado egresados de la Licenciatura en Gestión y Desarrollo Intercultural, de la Facultad de Filosofía y Letras, quienes han contribuido con su experiencia y creatividad. En tanto que cada eje tuvo su propio abordaje, se incluyen los testimonios metodológicos de sus autores.</p>
          <p>La Licenciatura en Gestión y Desarrollo Intercultural, se imparte en la Facultad de Filosofía y Letras, en el Centro Peninsular en Humanidades en Ciencias Sociales y en la Escuela Nacional de Estudios Superiores Unidad León.</p>
          <p>La Dra. Natividad Gutiérrez Chong, investigadora del Instituto de Investigaciones Sociales, y profesora de la Licenciatura en Gestión y Desarrollo Intercultural, es la responsable y coordinadora de esta obra conjunta.</p>
          <p>Pluriverso Digital habrá de incorporarse a la RUA (Red Universitaria de Aprendizaje). Esta plataforma está hecha en la Universidad Nacional Autónoma de México.</p>
        </section>
        <section id="ejes">
          <h2>Ejes temáticos</h2>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            <div className="flex justify-center items-center w-full h-32 bg-red-300 rounded-lg">
              <h3 className="text-white text-3xl">Identidad</h3>
            </div>
            <div className="flex justify-center items-center w-full h-32 bg-blue-300 rounded-lg">
              <h3 className="text-white text-3xl">Interculturalidad</h3>
            </div>
            <div className="flex justify-center items-center w-full h-32 bg-green-300 rounded-lg">
              <h3 className="text-white text-3xl">Interculturalismo</h3>
            </div>
            <div className="flex justify-center items-center w-full h-32 bg-yellow-300 rounded-lg">
              <h3 className="text-white text-3xl">Interseccionalidad</h3>
            </div>
            <div className="flex justify-center items-center w-full h-32 bg-pink-300 rounded-lg">
              <h3 className="text-white text-3xl">Multiculturalismo</h3>
            </div>
            <div className="flex justify-center items-center w-full h-32 bg-purple-300 rounded-lg">
              <h3 className="text-white text-3xl">Multiculturalidad</h3>
            </div>
          </div>
        </section>
        <section>
          <h2>Investigación audiovisual</h2>
        </section>
        <section>
          <h2>Hecho en</h2>
          <p>Hecho en México por la Universidad Nacional Autónoma de México (UNAM), 2019. Plataforma Digital sobre estudios de la diversidad cultural en México Pluriverso Digital, financiado por PAPIME y llevado a cabo en el Instituto de Investigaciones Sociales (IIS- UNAM) con total apego a lo dispuesto en el Acuerdo por el que se establecen los Lineamientos Generales para la Política de Acceso Abierto de la Universidad Nacional Autónoma de México, la Legislación Universitaria, la Ley Federal de Derechos de Autor y cualquier otro ordenamiento en materia de propiedad intelectual aplicable.</p>
        </section>
      </main>
    </div>
  )
}

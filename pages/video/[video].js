import { useRouter } from 'next/router'
import Link from 'next/link'
import infovideo from '../../data/infovideo.json'

export default function video() {

  const router = useRouter()
  const video = router.query.video

  function buscarInformacion(idInfo) {
    return idInfo.id === video;
  }

  const informacion = infovideo.find(buscarInformacion);

  return (
    <main className="max-h-full">
      {
        informacion != undefined
          ?
          <div className="flex justify-center m-20 md:m-2 md:flex-wrap">
            <div className="w-full">
              <iframe src={`https://player.vimeo.com/video/${video}?color=c9ff23&title=0&byline=0&portrait=0`} className="md:w-full" width="640" height="360"></iframe>
            </div>
            <div className="flex justify-center items-center md:flex-wrap">
              <div className="w-3/4 2xl:w-full 2xl:mx-4 md:w-full">
                <p className="text-xl font-semibold md:text-sm"><span className="font-extrabold text-subtitle">Palabras clave:</span> {informacion.palabras}</p>
                <p className="font-medium text-lg text-gray-700 md:text-base md:text-justify">{informacion.texto}</p>
                <div className="flex justify-center mb-8">
                  <Link href="/audiovisuales">
                    <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 2xl:text-sm md:text-sm sm:px-10">Regresar a la galeria de videos</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="flex justify-center mb-8">
            <div className="w-3/4">
              <p className="text-6xl font-extrabold text-subtitle my-20 text-center">Lo sentimos pero no hay informacion de ese video</p>
              <div className="flex justify-center mb-8">
                <Link href="/audiovisuales">
                  <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300 sm:text-sm">Ir a galeria de videos</a>
                </Link>
              </div>
            </div>
          </div>
      }
    </main>
  )
}

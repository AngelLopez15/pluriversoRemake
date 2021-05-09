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

  console.log(informacion)

  return (
    <main className="max-h-full">
      {
        informacion != undefined
          ?
          <div className="flex justify-center m-20">
            <div>
              <iframe src={`https://player.vimeo.com/video/${video}?color=c9ff23&title=0&byline=0&portrait=0`} width="640" height="360"></iframe>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3/4">
                <p className="text-xl font-semibold"><span className="font-extrabold text-subtitle">Palabras clave:</span> {informacion.palabras}</p>
                <p className="text-lg">{informacion.texto}</p>
              </div>
            </div>
          </div>
          :
          <div className="flex justify-center mb-8">
            <div className="w-3/4">
              <p className="text-6xl font-extrabold text-subtitle my-20 text-center">Lo sentimos pero no hay informacion de ese video</p>
              <div className="flex justify-center mb-8">
                <Link href="/audiovisuales">
                  <a className="bg-action py-4 px-20 rounded-md shadow-lg text-white text-xl font-medium transition duration-300 ease-in-out hover:bg-yellow-300">Ir a galeria de videos</a>
                </Link>
              </div>
            </div>
          </div>
      }
    </main>
  )
}

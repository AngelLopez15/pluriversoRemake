import { useRouter } from 'next/router'
import infovideo from '../../data/infovideo.json'

export default function video() {

  const router = useRouter()
  const video = router.query.video
  console.log(video)

  function buscarInformacion(idInfo) {
    return idInfo.id === video;
  }

  const informacion = infovideo.find(buscarInformacion);
  console.log(informacion)

  return (
    <div>
      {
        video != undefined
          ?
          <>
            <div>
              <iframe src={`https://player.vimeo.com/video/${video}?color=c9ff23&title=0&byline=0&portrait=0`} width="640" height="360"></iframe>
            </div>
            <p>Palabras clave: {informacion.palabras}</p>
            <p>{informacion.texto}</p>
          </>
          :
          <p>Espera</p>
      }
    </div>
  )
}

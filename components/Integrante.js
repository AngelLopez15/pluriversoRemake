export default function Integrante({nombre, descripcion, correo, links}) {
  return (
    <div>
      <p>{nombre}</p>
      <p>{descripcion}</p>
      <p>{correo}</p>
      {
        links && <div><p>{links[0]}</p><p>{links[1]}</p></div>
      }
    </div>
  )
}

export default function Integrante({ nombre, descripcion, correo, links }) {
  return (
    <figure className="w-96 bg-gray-100 rounded-xl p-2 m-2">
      {/* <img class="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" /> */}
      <div className="pt-6 text-center space-y-4">
        <blockquote className="overflow-y-auto h-60">
          <p>
            {descripcion}
          </p>
          {
            links && <ul className="flex justify-center"><li className="mx-2"><a href={links[0]}>SICETNO</a></li><li className="mx-2"><a href={links[1]}>Juventidades</a></li></ul>
          }
        </blockquote>
        <figcaption>
          <div className="text-lg font-semibold">
            <h3>{nombre}</h3>
          </div>
          <div className="text-gray-500">
            <p>{correo}</p>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

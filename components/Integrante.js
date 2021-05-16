export default function Integrante({foto, nombre, descripcion, correo, links }) {
  return (
    <figure className="w-96 bg-blue-50 shadow-xl rounded-xl p-2 m-8 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <img class="w-32 h-32 rounded-full mx-auto" src={foto} alt={nombre} width="384" height="512" />
      <div className="pt-6 text-center space-y-4">
        <blockquote className="overflow-y-auto h-60">
          <p className="text-gray-900 font-medium px-4 text-justify">
            {descripcion}
          </p>
          {
            links && <ul className="flex justify-center"><li className="mx-2"><a className="font-bold text-subtitle" href={links[0]} target="_blank" rel="noopener noreferrer">SICETNO</a></li><li className="mx-2"><a className="font-bold text-action" href={links[1]} target="_blank" rel="noopener noreferrer">Juventidades</a></li></ul>
          }
        </blockquote>
        <figcaption>
          <div>
            <h3 className="text-2xl font-bold">{nombre}</h3>
          </div>
          <div>
            <p className="text-blue-800">{correo}</p>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

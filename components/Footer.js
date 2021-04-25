export default function Footer() {

  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-green-200">
      <div className="flex w-full px-6">
        <div className="w-1/4">
          <h3>Contáctanos</h3>
        </div>
        <div className="w-3/4">
          <p>Logos</p>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div>
          <p>©PAPIME Clave PE404617. Todos los derechos reservados. {onlyYear}</p>
        </div>
        <div>
          <p>Manual de Usuario</p>
        </div>
        <div>
          <p>Términos y condiciones</p>
        </div>
      </div>
    </footer>
  )
}

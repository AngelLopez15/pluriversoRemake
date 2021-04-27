export default function Footer() {

  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-green-200">
      <div className="flex w-full px-6">
        <div className="flex w-full justify-around">
          <div>
            <img src='/images/unam.png' alt="Logo UNAM" />
          </div>
          <div>
            <img src='/images/dgapa.png' alt="Logo DGAPA" />
          </div>
          <div>
            <img src='/images/logoIIS.png' alt="Logo IIS" />
          </div>
          <div>
            <img src='/images/ffl.png' alt="Logo FFyL" />
          </div>
          <div>
            <img src='/images/dygi.png' alt="Logo DYGI" />
          </div>
          <div>
            <img src='/images/cephcis.png' alt="Logo CEPHCIS" />
          </div>
        </div>
      </div>
      <div>
        <ul className="flex w-full justify-evenly py-4">
          <li>
            <p>Instituto de Investigaciones Sociales</p>
          </li>
          <li>
            <a href="tel:5556227400"><p>5556227400 ext. 280</p></a>
          </li>
          <li>
            <a href="mailto:pluriversodigital@unam.mx"><p>pluriversodigital@unam.mx</p></a>
          </li>
        </ul>
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

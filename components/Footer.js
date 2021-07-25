export default function Footer() {

  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-green-200">
      <div className="flex w-full px-6">
        <div className="flex w-full justify-around md:flex-wrap">
          <div className="md:w-1/2">
            <img src='/images/unam.png' alt="Logo UNAM" />
          </div>
          <div className="md:w-1/2">
            <img src='/images/dgapa.png' alt="Logo DGAPA" />
          </div>
          <div className="md:w-1/2">
            <img src='/images/logoIIS.png' alt="Logo IIS" />
          </div>
          <div className="md:w-1/2">
            <img src='/images/ffl.png' alt="Logo FFyL" />
          </div>
          <div className="md:w-1/2">
            <img src='/images/dygi.png' alt="Logo DYGI" />
          </div>
          <div className="md:w-1/2">
            <img src='/images/cephcis.png' alt="Logo CEPHCIS" />
          </div>
        </div>
      </div>
      <div>
        <ul className="flex w-full justify-evenly py-2 md:flex-col md:text-center">
          <li>
            <p className="font-medium text-lg text-gray-700">Instituto de Investigaciones Sociales</p>
          </li>
          <li>
            <a href="tel:5556227400"><p className="font-medium text-lg text-gray-700">5556227400 ext. 280</p></a>
          </li>
          <li>
            <a href="mailto:pluriversodigital@gmail.com"><p className="font-medium text-lg text-gray-700">pluriversodigital@gmail.com</p></a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex w-full justify-evenly py-2">
          <li>
            <a href="https://www.facebook.com/PluriversoDigital/" target="_blank" rel="noopener noreferrer"><img className="w-8 mx-8 md:mx-4" src="/images/redes/facebook.svg" alt="logo facebook" /></a>
          </li>
          <li>
            <a href="https://twitter.com/PluriversoDig" target="_blank" rel="noopener noreferrer"><img className="w-8 mx-8 md:mx-4" src="/images/redes/twitter.svg" alt="logo twitter" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/pluriversodigital/" target="_blank" rel="noopener noreferrer"><img className="w-8 mx-8 md:mx-4" src="/images/redes/instagram.svg" alt="logo instagram" /></a>
          </li>
        </ul>
      </div>
      <div className="flex w-full justify-around md:flex-col md:text-center">
        <div>
          <p className="font-medium text-lg text-gray-700">©PAPIME Clave PE404617. Todos los derechos reservados. {onlyYear}</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="/doc/ManualUsuario.pdf" className="font-medium text-lg text-gray-700">Manual de Usuario</a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="/doc/TerminosPluriversoDigital.pdf" className="font-medium text-lg text-gray-700">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}

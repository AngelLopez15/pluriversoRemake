import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

  const pages = [
    {
      id: '1',
      title: 'Pluriverso',
      link: 'pluriverso',
    },
    {
      id: '2',
      title: 'Creadores',
      link: 'creadores',
    },
    {
      id: '3',
      title: 'Audiovisuales',
      link: 'audiovisuales',
    },
    {
      id: '4',
      title: 'Recursos',
      link: 'recursos',
    },
    {
      id: '5',
      title: 'Galeria',
      link: 'galeria',
    },
  ]

  const ejes = [
    {
      id: '1',
      title: 'Identidad',
      link: 'identidad',
    },
    {
      id: '2',
      title: 'Interculturalidad',
      link: 'interculturalidad',
    },
    {
      id: '3',
      title: 'Interculturalismo',
      link: 'interculturalismo',
    },
    {
      id: '4',
      title: 'Interseccionalidad',
      link: 'interseccionalidad',
    },
    {
      id: '5',
      title: 'Multiculturalidad',
      link: 'multiculturalidad',
    },
    {
      id: '6',
      title: 'Multiculturalismo',
      link: 'multiculturalismo',
    },
  ]

  const [ejesToggle, setEjesToggle] = useState(false)

  const toggleEjes = () => {
    setEjesToggle(!ejesToggle)
  }

  const [menu, setMenu] = useState(false)
  const [burger, setBurger] = useState(false)

  const firstBar = "first-bar"
  const secondBar = "second-bar"
  const thirdBar = "third-bar"

  const showFirstBar = "show-first-bar"
  const showSecondBar = "show-second-bar"
  const showThirdBar = "show-third-bar"

  const desplegarMenu = () => {
    setMenu(!menu)
    setBurger(!burger)
  }

  return (
    <nav className="flex w-full justify-between p-4 shadow-xl sticky top-0 z-10 bg-blue-100 md:flex md:flex-col">
      <div className="md:flex md:w-full md:justify-between md:px-4">
        <Link href="/">
          <a>
            <img src='/images/Logo.png' alt="Logo Pluriverso" />
          </a>
        </Link>
        <button className="md:block hidden" onClick={desplegarMenu}>
          <div className="toggle-menu-icon">
            <div className={burger ? showFirstBar : firstBar}></div>
            <div className={burger ? showSecondBar : secondBar}></div>
            <div className={burger ? showThirdBar : thirdBar}></div>
          </div>
        </button>
      </div>
      <div className="self-center" className={menu ? "md:block" : "md:hidden"}>
        <ul className="flex justify-end w-full md:flex md:flex-col md:my-5">
          <li className="px-4 font-semibold text-xl cursor-pointer md:py-4" onMouseEnter={toggleEjes} onMouseLeave={toggleEjes}>
            Ejes
            <ul className={ ejesToggle ? 'absolute bg-red-100 rounded-lg' : 'absolute bg-red-100 rounded-lg hidden'}>
              {
                ejes.map((item) => (
                  <li key={item.id} className="px-2 py-3" onClick={desplegarMenu}>
                    <Link href={`/ejes/${item.link}`}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
          {
            pages.map((item) => (
              <li key={item.id} className="px-4 font-semibold text-xl md:py-4" onClick={desplegarMenu}>
                <Link href={`/${item.link}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

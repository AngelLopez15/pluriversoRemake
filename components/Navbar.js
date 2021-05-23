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

  return (
    <nav className="flex w-full justify-between p-4 shadow-xl sticky top-0 z-10 bg-blue-100">
      <div>
        <Link href="/">
          <a>
            <img src='/images/Logo.png' alt="Logo Pluriverso" />
          </a>
        </Link>
      </div>
      <div className="self-center">
        <ul className="flex justify-end w-full">
          <li className="px-4 font-semibold text-xl cursor-pointer" onMouseEnter={toggleEjes} onMouseLeave={toggleEjes}>
            Ejes
            <ul className={ ejesToggle ? 'absolute bg-red-100 rounded-lg' : 'absolute bg-red-100 rounded-lg hidden'}>
              {
                ejes.map((item) => (
                  <li key={item.id} className="p-2">
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
              <li key={item.id} className="px-4 font-semibold text-xl">
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

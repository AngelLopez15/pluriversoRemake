import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Filosofia from '../../data/multiculturalismo/multiculturalismoFilosofia.json'
import Antropologia from '../../data/multiculturalismo/multiculturalismoAntropologia.json'
import Politica from '../../data/multiculturalismo/multiculturalismoCPoliticas.json'
import Sociologia from '../../data/multiculturalismo/multiculturalismoSociologia.json'

export default function bibliografiaMulticulturalismo() {
  return (
    <>
      <Head>
        <title>Bibliografía Multiculturalismo | Pluriverso Digital</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Bibliografía Multiculturalismo Eje Multiculturalismo. Pluriverso Digital es la plataforma digital sobre estudios de la diversidad cultural en México que abarca seis ejes relacionados con el estudio de las culturas, la era del reconocimiento a minorías, y las políticas públicas." />
        <link rel="icon" href="/prismaicon.ico" />
      </Head>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-xl">Bibliografía Multiculturalismo</h1>
      </header>
      <main className="mx-12 mt-6 md:mx-3 md:mt-2">
        <Tabs>
          <TabList>
            <Tab>Filosofía</Tab>
            <Tab>Antropología</Tab>
            <Tab>Ciencias Políticas</Tab>
            <Tab>Sociología</Tab>
          </TabList>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Filosofía</h2>
              <table className="table-fixed border-collapse border border-green-800">
                <thead>
                  <tr>
                    <th className="w-1/2 border border-green-600">Ficha y autor</th>
                    <th className="w-1/4 border border-green-600">Disponibilidad</th>
                    <th className="w-1/4 border border-green-600">Palabra clave</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Filosofia.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-green-600">{item.ficha}</td>
                        <td className="border border-green-600">{item.disponibilidad}</td>
                        <td className="border border-green-600">{item.palabras}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Antropología</h2>
              <table className="table-fixed border-collapse border border-green-800">
                <thead>
                  <tr>
                    <th className="w-1/2 border border-green-600">Ficha y autor</th>
                    <th className="w-1/4 border border-green-600">Disponibilidad</th>
                    <th className="w-1/4 border border-green-600">Palabra clave</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Antropologia.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-green-600">{item.ficha}</td>
                        <td className="border border-green-600">{item.disponibilidad}</td>
                        <td className="border border-green-600">{item.palabras}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Ciencias Políticas</h2>
              <table className="table-fixed border-collapse border border-green-800">
                <thead>
                  <tr>
                    <th className="w-1/2 border border-green-600">Ficha y autor</th>
                    <th className="w-1/4 border border-green-600">Disponibilidad</th>
                    <th className="w-1/4 border border-green-600">Palabra clave</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Politica.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-green-600">{item.ficha}</td>
                        <td className="border border-green-600">{item.disponibilidad}</td>
                        <td className="border border-green-600">{item.palabras}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Sociología</h2>
              <table className="table-fixed border-collapse border border-green-800">
                <thead>
                  <tr>
                    <th className="w-1/2 border border-green-600">Ficha y autor</th>
                    <th className="w-1/4 border border-green-600">Disponibilidad</th>
                    <th className="w-1/4 border border-green-600">Palabra clave</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Sociologia.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-green-600">{item.ficha}</td>
                        <td className="border border-green-600">{item.disponibilidad}</td>
                        <td className="border border-green-600">{item.palabras}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </section>
          </TabPanel>
        </Tabs>
      </main>
    </>
  )
}

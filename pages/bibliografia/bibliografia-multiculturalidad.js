import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Filosofia from '../../data/multiculturalidad/multiculturalidadFilosofia.json'
import Antropologia from '../../data/multiculturalidad/multiculturalidadAntropologia.json'
import Politica from '../../data/multiculturalidad/multiculturalidadCPolitica.json'
import Derecho from '../../data/multiculturalidad/multiculturalidadDerecho.json'

export default function bibliografiaMulticulturalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso">
        <h1 className="text-7xl text-white font-bold">Bibliografía Multiculturalidad</h1>
      </header>
      <main className="mx-12 mt-6">
        <Tabs>
          <TabList>
            <Tab>Filosofía</Tab>
            <Tab>Antropología</Tab>
            <Tab>Ciencias Políticas</Tab>
            <Tab>Derecho</Tab>
          </TabList>
          <TabPanel>
            <section>
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
            <section>
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
            <section>
              <h2>Ciencia Política</h2>
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
            <section>
              <h2>Derecho</h2>
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
                    Derecho.map((item) => (
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

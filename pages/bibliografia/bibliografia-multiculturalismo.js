import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Filosofia from '../../data/multiculturalismo/multiculturalismoFilosofia.json'
import Antropologia from '../../data/multiculturalismo/multiculturalismoAntropologia.json'
import Politica from '../../data/multiculturalismo/multiculturalismoCPoliticas.json'
import Sociologia from '../../data/multiculturalismo/multiculturalismoSociologia.json'

export default function bibliografiaMulticulturalismo() {
  return (
    <main>
      <h1>Bibliografía Multiculturalismo</h1>
      <Tabs>
        <TabList>
          <Tab>Filosofía</Tab>
          <Tab>Antropología</Tab>
          <Tab>Ciencias Políticas</Tab>
          <Tab>Sociología</Tab>
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
          <section>
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
  )
}

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Filosofia from '../../data/interculturalismo/interculturalismoFilosofia.json'
import Politicas from '../../data/interculturalismo/interculturalismoPoliticas.json'
import Publica from '../../data/interculturalismo/interculturalismoPublica.json'

export default function bibliografiaInterculturalismo() {
  return (
    <main>
      <h1>Bibliografía Interculturalismo</h1>
      <Tabs>
        <TabList>
          <Tab>Política pública</Tab>
          <Tab>Ciencias políticas</Tab>
          <Tab>Filosofía</Tab>
        </TabList>
        <TabPanel>
          <section>
            <h2>Política pública</h2>
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
                  Publica.map((item) => (
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
            <h2>Ciencias políticas</h2>
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
                  Politicas.map((item) => (
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
      </Tabs>
    </main>
  )
}

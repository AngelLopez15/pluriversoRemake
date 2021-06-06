import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Psicologia from '../../data/identidad/identidadPsicologia.json'
import Epidemologia from '../../data/identidad/identidadEpidemologia.json'
import Sociologia from '../../data/identidad/identidadSociologia.json'
import Filosofia from '../../data/identidad/identidadFilosofia.json'
import Antropologia from '../../data/identidad/identidadAntropologia.json'
import ASocial from '../../data/identidad/identidadASocial.json'
import EPC from '../../data/identidad/identidadEPC.json'
import LF from '../../data/identidad/identidadLF.json'


export default function bibliografiaIdentida() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-xl">Bibliografía Identidad</h1>
      </header>
      <main className="mx-12 mt-6 md:mx-3 md:mt-2">
        <Tabs>
          <TabList>
            <Tab>Psicología</Tab>
            <Tab>Epidemología</Tab>
            <Tab>Sociología</Tab>
            <Tab>Filosofía</Tab>
            <Tab>Antropología</Tab>
            <Tab>Antropología Social</Tab>
            <Tab>Estudios y Políticas Culturales</Tab>
            <Tab>Lingüística y Feminismo</Tab>
          </TabList>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Psicología</h2>
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
                    Psicologia.map((item) => (
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
              <h2>Epidemología</h2>
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
                    Epidemologia.map((item) => (
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
              <h2>Antropoligía</h2>
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
              <h2>Antropoligía Social</h2>
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
                    ASocial.map((item) => (
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
              <h2>Estudios y Políticas Culturales</h2>
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
                    EPC.map((item) => (
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
              <h2>Lingüística y Feminismo</h2>
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
                    LF.map((item) => (
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

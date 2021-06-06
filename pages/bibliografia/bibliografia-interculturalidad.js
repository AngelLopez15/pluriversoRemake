import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Antropologia from '../../data/interculturalidad/antropologia.json'
import Comunicacion from '../../data/interculturalidad/comunicacion.json'
import EstudiosCulturales from '../../data/interculturalidad/ECI.json'
import Economia from '../../data/interculturalidad/economia.json'
import Educacion from '../../data/interculturalidad/educacion.json'
import EstudiosDiscriminacion from '../../data/interculturalidad/ESD.json'
import Feminismo from '../../data/interculturalidad/FEG.json'
import Mediacion from '../../data/interculturalidad/mediacion.json'
import Metodologia from '../../data/interculturalidad/mi.json'
import Salud from '../../data/interculturalidad/salud.json'

export default function bibliografiaInterculturalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-xl">Bibliografía Interculturalidad</h1>
      </header>
      <main className="mx-12 mt-6 md:mx-3 md:mt-2">
        <Tabs>
          <TabList>
            <Tab>Estudios culturales e interdisciplinarios</Tab>
            <Tab>Educación</Tab>
            <Tab>Antropoligía</Tab>
            <Tab>Mediación</Tab>
            <Tab>Comunicación</Tab>
            <Tab>Economía</Tab>
            <Tab>Metodología de investigación</Tab>
            <Tab>Feminismo y estudios de género</Tab>
            <Tab>Estudios sobre discriminación</Tab>
            <Tab>Salud</Tab>
          </TabList>
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Estudios culturales e interdisciplinarios</h2>
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
                    EstudiosCulturales.map((item) => (
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
              <h2>Educación</h2>
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
                    Educacion.map((item) => (
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
              <h2>Mediación</h2>
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
                    Mediacion.map((item) => (
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
              <h2>Comunicación</h2>
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
                    Comunicacion.map((item) => (
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
              <h2>Economía</h2>
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
                    Economia.map((item) => (
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
              <h2>Metodología de investigación</h2>
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
                    Metodologia.map((item) => (
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
              <h2>Feminismo y estudios de género</h2>
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
                    Feminismo.map((item) => (
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
              <h2>Estudios sobre discriminación</h2>
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
                    EstudiosDiscriminacion.map((item) => (
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
              <h2>Salud</h2>
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
                    Salud.map((item) => (
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

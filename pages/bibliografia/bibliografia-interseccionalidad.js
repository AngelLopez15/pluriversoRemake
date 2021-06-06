import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Psicologia from '../../data/interseccionalidad/interseccionalidadPsicologia.json'
import SociologiaCPoliticas from '../../data/interseccionalidad/interseccionalidadSCP.json'
import Filosofia from '../../data/interseccionalidad/interseccionalidadFilosofia.json'
import Antropologia from '../../data/interseccionalidad/interseccionalidadAntropologia.json'
import Derechos from '../../data/interseccionalidad/interseccionalidadDH.json'
import CienciasPSociales from '../../data/interseccionalidad/interseccionalidadCPS.json'
import EstudiosCulturales from '../../data/interseccionalidad/interseccionalidadEC.json'
import Pedagogia from '../../data/interseccionalidad/interseccionalidadPedagogia.json'
import PPublica from '../../data/interseccionalidad/interseccionalidadPP.json'
import SPublica from '../../data/interseccionalidad/interseccionalidadSP.json'
import Historia from '../../data/interseccionalidad/interseccionalidadHistoria.json'
import Literatura from '../../data/interseccionalidad/interseccionalidadLiteratura.json'
import Derecho from '../../data/interseccionalidad/interseccionalidadDerecho.json'
import Epidemiologia from '../../data/interseccionalidad/interseccionalidadEpidemiologia.json'
import EducacionInfantil from '../../data/interseccionalidad/interseccionalidadEID.json'

export default function bibliografiaInterseccionalidad() {
  return (
    <>
      <header className="w-full text-center py-24 imagen-fondo-pluriverso md:py-6">
        <h1 className="text-7xl text-white font-bold md:text-xl">Bibliografía Interseccionalidad</h1>
      </header>
      <main className="mx-12 mt-6 md:mx-3 md:mt-2">
        <Tabs>
          <TabList>
            <Tab>Psicología</Tab>
            <Tab>Sociología y ciencias políticas</Tab>
            <Tab>Filosofía</Tab>
            <Tab>Antropología</Tab>
            <Tab>Derechos humanos</Tab>
            <Tab>Ciencias políticas y sociales</Tab>
            <Tab>Estudios culturales</Tab>
            <Tab>Pedagogía</Tab>
            <Tab>Politica pública</Tab>
            <Tab>Salúd pública</Tab>
            <Tab>Historia</Tab>
            <Tab>Literatura</Tab>
            <Tab>Derecho</Tab>
            <Tab>Epidemiologia</Tab>
            <Tab>Educación infantil y derecho</Tab>
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
              <h2>Sociología y ciencias políticas</h2>
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
                    SociologiaCPoliticas.map((item) => (
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
              <h2>Derechos humanos</h2>
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
                    Derechos.map((item) => (
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
              <h2>Ciencias políticas y sociales</h2>
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
                    CienciasPSociales.map((item) => (
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
              <h2>Estudios culturales</h2>
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
              <h2>Pedagogía</h2>
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
                    Pedagogia.map((item) => (
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
              <h2>Politica pública</h2>
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
                    PPublica.map((item) => (
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
              <h2>Salúd pública</h2>
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
                    SPublica.map((item) => (
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
              <h2>Historia</h2>
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
                    Historia.map((item) => (
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
              <h2>Literatura</h2>
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
                    Literatura.map((item) => (
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
          <TabPanel>
            <section className="md:overflow-x-scroll">
              <h2>Epidemiologia</h2>
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
                    Epidemiologia.map((item) => (
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
              <h2>Educación infantil y derecho</h2>
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
                    EducacionInfantil.map((item) => (
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

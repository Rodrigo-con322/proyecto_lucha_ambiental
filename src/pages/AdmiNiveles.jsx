import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Admi() {
  const navigate = useNavigate();

  const irAEstructura = () => navigate('/Login/Admi/Estructura');
  const irAEmpleado = () => navigate('/Login/Admi/Empleados');
  const irAArea = () => navigate('/Login/Admi/Areas');

  const [datosTabla, setDatosTabla] = useState([]);
  // Simulados (luego estos se reemplazan por datos del backend)
  const datosBasica = [
    { id: 1, nombre: "Juan Pérez", puesto: "Supervisor", calificacion: "Alta" },
    { id: 2, nombre: "María López", puesto: "Asistente", calificacion: "Media" },
    { id: 3, nombre: "Luis Gómez", puesto: "Técnico", calificacion: "Baja" },
    { id: 4, nombre: "Ana Torres", puesto: "Coordinadora", calificacion: "Alta" },
    { id: 5, nombre: "Carlos Ríos", puesto: "Analista", calificacion: "Pendiente" },
  ];

  const datosIntermedia = [
    { id: 6, nombre: "Sofía Herrera", puesto: "Diseñadora", calificacion: "Media" },
    { id: 7, nombre: "José Díaz", puesto: "Programador", calificacion: "Media" },
    { id: 8, nombre: "Lucía Romero", puesto: "Secretaria", calificacion: "Media" },
  ];

  const datosAvanzada = [
    { id: 9, nombre: "Pedro Ruiz", puesto: "Ingeniero", calificacion: "Alta" },
    { id: 10, nombre: "Elena Vargas", puesto: "Jefa de Área", calificacion: "Alta" },
  ];

  const datosPendiente = [
    { id: 11, nombre: "Daniel Bravo", puesto: "Asistente", calificacion: "Pendiente" },
    { id: 12, nombre: "Fernanda Soto", puesto: "Técnico", calificacion: "Pendiente" },
    { id: 14, nombre: "Miguel Ángel", puesto: "Gerente", calificacion: "Pendiente" },
    { id: 15, nombre: "Laura Martínez", puesto: "Analista", calificacion: "Pendiente" },
    { id: 16, nombre: "Andrés Castillo", puesto: "Supervisor", calificacion: "Pendiente" },
    { id: 17, nombre: "Claudia Fernández", puesto: "Coordinadora", calificacion: "Pendiente" },
    { id: 18, nombre: "Roberto Salazar", puesto: "Programador", calificacion: "Pendiente" },
    { id: 19, nombre: "Patricia Jiménez", puesto: "Diseñadora", calificacion: "Pendiente" },
    { id: 20, nombre: "Javier Morales", puesto: "Ingeniero", calificacion: "Pendiente" },
  ];

  const datosExonerada = [
    { id: 13, nombre: "Oscar Palma", puesto: "Administrador", calificacion: "Exonerada" },
  ];

  const cargarDatosBasica = () => setDatosTabla(datosBasica);
  const cargarDatosIntermedia = () => setDatosTabla(datosIntermedia);
  const cargarDatosAvanzada = () => setDatosTabla(datosAvanzada);
  const cargarDatosPendiente = () => setDatosTabla(datosPendiente);
  const cargarDatosExonerada = () => setDatosTabla(datosExonerada);

  return (
    <Fondo>
      <Panel>
        <Contenido>
          <SeccionIzquierda>
            <Menu>
              <img src="/admi.png" alt="admi" className="Admi" />
                  <Marco>
                    <button className="slice" onClick={irAEstructura}>
                      <span className="text">EXAMEN</span>
                    </button>
                  </Marco>
              <div className="card">
                <p onClick={irAEmpleado}><span>STAFF</span></p>
                <p onClick={irAArea}><span>ÁREA</span></p>
                <p>NIVEL</p>
              </div>
            </Menu>
          </SeccionIzquierda>

          <LineaVertical />

          <SeccionDerecha>
            <Subpanel>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '10px' }}>
                <TituloExamen>NIVELES DE CAPACITACIÓN</TituloExamen>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
                  <TipoNivel><button onClick={cargarDatosBasica}>BÁSICA</button></TipoNivel>
                  <TipoNivel><button onClick={cargarDatosIntermedia}>INTERMEDIA</button></TipoNivel>
                  <TipoNivel><button onClick={cargarDatosAvanzada}>AVANZADA</button></TipoNivel>
                  <TipoNivel><button onClick={cargarDatosPendiente}>PENDIENTE</button></TipoNivel>
                  <TipoNivel><button onClick={cargarDatosExonerada}>EXONERADA</button></TipoNivel>
                </div>
                  <div style={{ marginTop: '20px', width: '100%' }}>
                    <TablaEditable datos={datosTabla} />
                  </div>
              </div>
            </Subpanel>
          </SeccionDerecha>
        </Contenido>
      </Panel>
    </Fondo>
  );
}

const TablaEditable = ({ datos }) => {
  return (
    <ContenedorTabla>
      <Tabla>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>NOMBRE</Th>
            <Th>PUESTO</Th>
            <Th>CALIFICACIÓN</Th>
          </tr>
        </thead>
        <tbody>
          {datos.length === 0 ? (
            // Mostrar 5 filas vacías
            [...Array(5)].map((_, index) => (
              <tr key={index}>
                <Td>-</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
            ))
          ) : (
            datos.map((fila) => (
              <tr key={fila.id}>
                <Td>{fila.id}</Td>
                <Td>{fila.nombre}</Td>
                <Td>{fila.puesto}</Td>
                <Td>{fila.calificacion}</Td>
              </tr>
            ))
          )}
        </tbody>
      </Tabla>
    </ContenedorTabla>
  );
};

const ContenedorTabla = styled.div`
  max-height: 300px;  /* Ajusta el alto máximo según lo que quieras */
  overflow-y: auto;
  border: 2px solid #0a1f44;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
`;

const Tabla = styled.table`
  width: 100%;
  border-collapse: separate;   /* ← separa las celdas */
  border-spacing: 0 6px;       /* ← espacio vertical entre filas */
  text-align: center;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid white;     /* ← líneas blancas entre columnas */
  background-color: #0a1f44;   /* azul oscuro */
  color: white;
`;

const Td = styled.td`
  padding: 8px;
  color: #0a1f44;  /* ← Cambia este color según tu diseño */
  border: 1px solid #ccc; /* Para que también tenga separación visual */
`;

const TituloExamen = styled.h2`
  color: #0a1f44;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const TipoNivel = styled.div`
  button {
    font-size: 12px;
    letter-spacing: 0,5px;
    text-transform: uppercase;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    padding: 0.7em 2em;
    border: 3px solid #0a1f44;
    border-radius: 2px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
    color: #0a1f44;
    text-decoration: none;
    transition: 0.3s ease all;
    z-index: 1;
  }

  button:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #0a1f44;
    z-index: -1;
  }

  button:hover, button:focus {
    color: white;
  }

  button:hover:before, button:focus:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
  }

  button:active {
    transform: scale(0.9);
  }`;

const Fondo = styled.div`
  min-height: 100vh;
  color: white;
  padding: 2rem;
  background: linear-gradient(150deg, #130b37, rgb(15, 4, 47), rgb(46, 3, 74));
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Panel = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 1000px;
  min-height: 525px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subpanel = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 575px;
  min-height: 450px;
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contenido = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SeccionIzquierda = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const SeccionDerecha = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const LineaVertical = styled.div`
  width: 5px;
  min-height: 525px;
  background-color: #0a1f44;
  margin: 0 1rem;
`;

const Marco = styled.div`
  .slice {
    --c1: #ffffff;
    --c2: #0a1f44;
    --size-letter: 16px;
    padding: 0.5em 1em;
    font-size: var(--size-letter);

    background-color: transparent;
    border: calc(var(--size-letter) / 6) solid var(--c2);
    border-radius: 0.2em;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);

    margin-right: 4px;

    & > .text {
      font-weight: 700;
      color: var(--c2);
      position: relative;
      z-index: 1;
      transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
    }
  }

  .slice::after {
    content: "";

    width: 0;
    height: calc(300% + 1em);

    position: absolute;
    translate: -50% -50%;
    inset: 50%;
    rotate: 30deg;

    background-color: var(--c2);
    transition: 1000ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  .slice:hover {
    & > .text {
      color: var(--c1);
    }
    &::after {
      width: calc(120% + 1em);
    }
  }

  .slice:active {
    scale: 0.98;
    filter: brightness(0.9);
  }`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .Admi {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    margin-right: 8px;
    margin-top: -60px;
  }

  .card {
    width: 210px;
    height: 230px;
    border-radius: 4px;
    background: #ffffff;
    display: flex;
    gap: 5px;
    padding: .4em;
    margin-top: 20px;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    background: #FF8C00;
    border: 1px solid #0a1f44;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #0a1f44;
    letter-spacing: .1em;
    font-weight: bold;
  }

  .card p:hover span {
    transform: rotate(0);
  }
`;

export default Admi;
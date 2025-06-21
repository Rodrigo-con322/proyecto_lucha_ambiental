import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function Admi() {
  const navigate = useNavigate();
  const [mostrarCirculos, setMostrarCirculos] = useState(false);
  const [examenSeleccionado, setExamenSeleccionado] = useState('examen1');

  // Datos simulados para Examen 1 y Examen 2
  const datosExamen1 = [
    { nombre: "CURSO 1", buenas: 10, malas: 5, blancas: 5 },
    { nombre: "CURSO 2", buenas: 4, malas: 12, blancas: 4 },
    { nombre: "CURSO 3", buenas: 15, malas: 3, blancas: 2 },
    { nombre: "CURSO 4", buenas: 6, malas: 6, blancas: 8 },
    { nombre: "CURSO 5", buenas: 2, malas: 5, blancas: 13 },
  ];

  const datosExamen2 = [
    { nombre: "CURSO 1", buenas: 3, malas: 10, blancas: 7 },
    { nombre: "CURSO 2", buenas: 8, malas: 6, blancas: 6 },
    { nombre: "CURSO 3", buenas: 5, malas: 10, blancas: 5 },
    { nombre: "CURSO 4", buenas: 12, malas: 2, blancas: 6 },
    { nombre: "CURSO 5", buenas: 7, malas: 3, blancas: 10 },
  ];

  const datosMostrar = examenSeleccionado === 'examen1' ? datosExamen1 : datosExamen2;

  const irAEstructura = () => navigate('/Login/Admi/Estructura');
  const irAArea = () => navigate('/Login/Admi/Areas');
  const irANivel = () => navigate('/Login/Admi/Niveles');

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
                <p>STAFF</p>
                <p onClick={irAArea}><span>ÁREA</span></p>
                <p onClick={irANivel}><span>NIVEL</span></p>
              </div>
            </Menu>
          </SeccionIzquierda>

          <LineaVertical />

          <SeccionDerecha>
            <Subpanel>
              <BuscarWrapper>
                <Buscar>
                  <div className="input-group">
                    <input type="text" className="input" placeholder="Ricardo Mendoza" />
                    <button className="button--submit" onClick={() => setMostrarCirculos(true)}>
                      BUSCAR
                    </button>
                  </div>
                </Buscar>
              </BuscarWrapper>

              {mostrarCirculos && (
                <>
                  <BotonDividido>
                    <Opcion activa={examenSeleccionado === 'examen1'} onClick={() => setExamenSeleccionado('examen1')}>
                      Examen 1
                    </Opcion>
                    <Opcion activa={examenSeleccionado === 'examen2'} onClick={() => setExamenSeleccionado('examen2')}>
                      Examen 2
                    </Opcion>
                  </BotonDividido>

                  <ContenedorGeneral>
                    <Fila>
                      {datosMostrar.slice(0, 3).map((item, i) => (
                        <CirculoEstadistica key={i} {...item} />
                      ))}
                    </Fila>
                    <Fila style={{ marginTop: '25px' }}>
                      {datosMostrar.slice(3, 5).map((item, i) => (
                        <CirculoEstadistica key={i} {...item} />
                      ))}
                    </Fila>
                  </ContenedorGeneral>
                </>
              )}
            </Subpanel>
          </SeccionDerecha>
        </Contenido>
      </Panel>
    </Fondo>
  );
}

const BotonDividido = styled.div`
  display: flex;
  margin-bottom: -0.5rem;
  border: 2px solid #0a1f44;
  border-radius: 6px;
  overflow: hidden;
`;

const Opcion = styled.button`
  background-color: ${({ activa }) => (activa ? '#0a1f44' : '#fff')};
  color: ${({ activa }) => (activa ? '#fff' : '#0a1f44')};
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;

  &:hover {
    background-color: #06142e;
    color: white;
  }
`;

const ContenedorGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fila = styled.div`
  display: flex;
  gap: 12px;
`;

const Colores = {
  correcto: "#4CAF50", // verde
  incorrecto: "#f44336", // rojo
  blanco: "#cccccc" // gris
};

const CirculoEstadistica = ({ nombre, buenas, malas, blancas }) => {
  const data = [
    { name: 'Correctas', value: buenas, color: Colores.correcto },
    { name: 'Incorrectas', value: malas, color: Colores.incorrecto },
    { name: 'En blanco', value: blancas, color: Colores.blanco }
  ];

  return (
    <div style={{ textAlign: 'center', margin: '0 10px' }}>
      <PieChart width={140} height={140}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={65}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <TextoCirculo>{nombre}</TextoCirculo>
    </div>
  );
};

const TextoCirculo = styled.span`
  font-size: 12px;
  color: #0a1f44;
  font-weight: bold;
  text-align: center;
`;

const BuscarWrapper = styled.div`
  margin-bottom: -0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Buscar = styled.div`

  .input-group {
    display: flex;
    align-items: center;
  }

  .input {
    min-height: 50px;
    width: 375px; /* <-- Aumentado el ancho */
    padding: 0 1rem;
    color: #0a1f44;
    font-size: 15px;
    border: 1px solid #0a1f44;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
  }

  .button--submit {
    min-height: 50px;
    width: 100px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #0a1f44;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .button--submit:hover {
    background-color: #06142e;
  }

  .input:focus,
  .input:focus-visible {
    border-color: #0a1f44;
    outline: none;
  }
`;

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
  flex-direction: column;  /* apilar elementos */
  align-items: center;     /* centrar horizontalmente */
  justify-content: flex-start; /* alinear arriba */
  gap: 1.5rem;              /* espacio entre buscador y círculos */
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
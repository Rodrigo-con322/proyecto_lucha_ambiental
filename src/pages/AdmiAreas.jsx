import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Admi() {
  const navigate = useNavigate();

  const irAEstructura = () => navigate('/Login/Admi/Estructura');
  const irAEmpleado = () => navigate('/Login/Admi/Empleados');
  const irANivel = () => navigate('/Login/Admi/Niveles');

  const [mostrarGraficoDeBarras, setMostrarGraficoDeBarras] = useState(false);

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
                <p>ÁREA</p>
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
                    <input
                      type="text"
                      className="input"
                      id="Name"
                      name="Name"
                      placeholder="Ingrese el área..."
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className="button--submit"
                      onClick={() => {
                        console.log("Buscando...");
                        setMostrarGraficoDeBarras(true); // activa la grafica de barras
                      }}
                    >
                      BUSCAR
                    </button>
                  </div>
                </Buscar>
              </BuscarWrapper>
{mostrarGraficoDeBarras && (
  <div style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
    <GraficoBarrasCursos />
  </div>
)}
            </Subpanel>
          </SeccionDerecha>
        </Contenido>
      </Panel>
    </Fondo>
  );
}

const GraficoBarrasCursos = () => {
  const datos = [
    { curso: 'CURSO 1', buenas: 25, malas: 5 },
    { curso: 'CURSO 2', buenas: 18, malas: 12 },
    { curso: 'CURSO 3', buenas: 22, malas: 8 },
    { curso: 'CURSO 4', buenas: 27, malas: 3 },
    { curso: 'CURSO 5', buenas: 20, malas: 10 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <XAxis dataKey="curso" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="buenas" stackId="a" fill="#28a745" name="Buenas" />
        <Bar dataKey="malas" stackId="a" fill="#dc3545" name="Malas" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const BuscarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 0; /* quitar margen para alinear mejor */
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* para que el input esté arriba */
  gap: 30px; /* espacio entre input y gráfico */
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
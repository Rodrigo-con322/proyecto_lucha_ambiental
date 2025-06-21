import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Admi() {
  const navigate = useNavigate();

  const irAEmpleado = () => navigate('/Login/Admi/Empleados');
  const irAArea = () => navigate('/Login/Admi/Areas');
  const irANivel = () => navigate('/Login/Admi/Niveles');

  const [totalPreguntas, setTotalPreguntas] = React.useState(20);
  const [faciles, setFaciles] = React.useState(0);
  const [intermedias, setIntermedias] = React.useState(0);
  const [dificiles, setDificiles] = React.useState(0);

  // Calcular máximo por tipo según total y número de cursos
  const maxPorTipo = Math.floor(totalPreguntas / 5);
  const opcionesPorTipo = Array.from({ length: maxPorTipo + 1 }, (_, i) => i);

  return (
    <Fondo>
      <Panel>
        <Contenido>
          <SeccionIzquierda>
            <Menu>
              <img src="/admi.png" alt="admi" className="Admi" />
              <Marco>
                <button className="slice">
                  <span className="text">EXAMEN</span>
                </button>
              </Marco>
              <div className="card">
                <p onClick={irAEmpleado}><span>STAFF</span></p>
                <p onClick={irAArea}><span>ÁREA</span></p>
                <p onClick={irANivel}><span>NIVEL</span></p>
              </div>
            </Menu>
          </SeccionIzquierda>

          <LineaVertical />

          <SeccionDerecha>
            <Subpanel>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <TituloExamen>ESTRUCTURA DEL EXAMEN</TituloExamen>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <ContenedorSelector>
                    <TextoFijo>NÚMERO DE PREGUNTAS  </TextoFijo>
                    <Desplegable
                      value={totalPreguntas}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setTotalPreguntas(val);
                        setFaciles(0);
                        setIntermedias(0);
                        setDificiles(0);
                      }}
                    >
                      {[20, 25, 30, 35, 40, 45, 50].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </Desplegable>
                  </ContenedorSelector>

                  <ContenedorSelector>
                    <TextoFijo>PREGUNTAS FÁCILES           </TextoFijo>
                    <Desplegable value={faciles} onChange={(e) => setFaciles(parseInt(e.target.value))}>
                      {opcionesPorTipo.map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </Desplegable>
                  </ContenedorSelector>

                  <ContenedorSelector>
                    <TextoFijo>PREGUNTAS INTERMEDIAS</TextoFijo>
                    <Desplegable value={intermedias} onChange={(e) => setIntermedias(parseInt(e.target.value))}>
                      {opcionesPorTipo.map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </Desplegable>
                  </ContenedorSelector>

                  <ContenedorSelector>
                    <TextoFijo>PREGUNTAS DIFÍCILES         </TextoFijo>
                    <Desplegable value={dificiles} onChange={(e) => setDificiles(parseInt(e.target.value))}>
                      {opcionesPorTipo.map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </Desplegable>
                  </ContenedorSelector>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <BotonConfirmar
                    onClick={() => {
                      console.log("Confirmado:");
                      console.log("Total:", totalPreguntas);
                      console.log("Fáciles:", faciles);
                      console.log("Intermedias:", intermedias);
                      console.log("Difíciles:", dificiles);
                    }}
                  >
                    CONFIRMAR
                  </BotonConfirmar>
                </div>
              </div>
            </Subpanel>
          </SeccionDerecha>
        </Contenido>
      </Panel>
    </Fondo>
  );
}

const BotonConfirmar = styled.button`
  padding: 10px 30px;
  background-color: #0a1f44;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #09213f;
  }

  &:active {
    transform: scale(0.97);
    background-color: #06172d;
  }
`;

const TituloExamen = styled.h2`
  color: #0a1f44;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const ContenedorSelector = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #0a1f44;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #f4f4f4;
  color: #0a1f44;
  font-weight: bold;
  font-size: 16px;
`;

const TextoFijo = styled.div`
  margin-right: 15px;
  white-space: pre;
`;

const Desplegable = styled.select`
  padding: 6px 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #0a1f44;
  color: #0a1f44;
  background-color: white;
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function FinExamen() {
  const navigate = useNavigate();

  const manejarInicio = () => {
    navigate('/Login/Usuario/Examen/Fin/Retroalimentacion');
  };

  return (
    <Fondo>
      <StyledWrapper>
        <div className="card">
          <div className="card-overlay" />
          <div className="card-inner">
            <div style={{ textAlign: 'center' }}>
              <p>EXAMEN TERMINADO</p>
              <p>FELICIDADES</p>
              <p>DURACIÓN:</p>
              <p>RESULTADO:</p>
              <p>PROMEDIO/NOTA:</p>
              <p>RETROALIMENTACIÓN...</p>

              <button className="boton" onClick={manejarInicio}>
                INICIAR
              </button>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </Fondo>
  );
}

export default FinExamen;

// 🎨 Estilos
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

const StyledWrapper = styled.div`
  .card {
    --bg: #e8e8e8;
    --contrast: #e2e0e0;
    --grey: #93a1a1;
    position: relative;
    padding: 9px;
    background-color: var(--bg);
    border-radius: 35px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-conic-gradient(var(--bg) 0.0000001%, var(--grey) 0.000104%)
      60% 60%/600% 600%;
    filter: opacity(10%) contrast(105%);
  }

  .card-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 400px;
    min-height: 400px;
    padding: 40px;
    background-color: var(--contrast);
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    text-align: center;
    font-family: sans-serif;
    flex-direction: column;
  }

  .card-inner p {
    margin: 6px 0;
  }

  .boton {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .boton:hover {
    background-color: #FF8C00;
    color: white;
  }
`;
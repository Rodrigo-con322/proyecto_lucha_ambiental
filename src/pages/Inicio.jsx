import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Inicio() {
  
  return (
    <div
      style={{
        background: 'linear-gradient(150deg,rgb(17, 9, 48), rgb(28, 6, 93), rgb(95, 44, 130))',
        minHeight: '100vh',
        color: 'white',
        padding: '1rem',
      }}
    >
      <div style={{ marginLeft: '350px' }}>
        <Card />
      </div>  

      <div style={{ marginLeft: '800px', marginTop: '-300px' }}>
        <CardUsu />
      </div>

      <div style={{ marginLeft: '800px', marginTop: '-300px' }}>
        <CardSuper />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              
              <img src="/image.png" alt="Foto de fondo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">"💡"</small>
              <div className="description">
                <div className="title">
                  <p className="title"><strong>"Nuestro compromiso con la energía también es un compromiso con la vida. En cada operación, trabajamos por un futuro más limpio, impulsando el desarrollo con responsabilidad ambiental."</strong></p>
                  <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" /></g></svg>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 350px;
    height: 620px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .back::before {
    position: absolute;
    content: ' ';
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

 .back-content {
  position: absolute;
  width: 98%;
  height: 98%;
  background-color: #5a5d90;
  border-radius: 5px;
  overflow: hidden; 
}

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color:rgba(0, 0, 0, 0.44);
    padding: 10px 10px;
    border-radius: 20px;
    backdrop-filter: blur(30px);
    width: fit-content;
    font-size: 20px;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    padding: 70px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color:rgb(230, 30, 30);
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color:rgb(238, 71, 24);
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color:rgb(34, 31, 222);
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }
`;

const CardSuper = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  };

  return (
    <StyledWrapperSuper>
      <div className="subscribe">
        <p>SUPERVISOR</p>
        
        <br />
        <div className="submit-btn" onClick={handleClick} >INGRESAR</div>
      </div>
    </StyledWrapperSuper>
  );
}

const StyledWrapperSuper = styled.div`
  .subscribe {
    position: relative;
    height: 60px;
    width: 240px;
    padding: 20px;
    background-color: #93a1a1;
    border-radius: 4px;
    color: #000000;
    box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.97);
  }

  .subscribe:after {
    position: absolute;
    content: "";
    right: -10px;
    bottom: 18px;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1a044e;
  }

  .subscribe p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 4px;
    line-height: 28px;
  }

  .subscribe input {
    position: absolute;
    bottom: 30px;
    border: none;
    border-bottom: 1px solid #d97a20;
    padding: 10px;
    width: 82%;
    background: transparent;
    transition: all .25s ease;
  }

  .subscribe input:focus {
    outline: none;
    border-bottom: 1px solid #0d095e;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
  }

  .subscribe .submit-btn {
    position: absolute;
    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background-color: #d97a20;
    color: #FFF;
    padding: 12px 25px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 5px;
    right: -10px;
    bottom: -20px;
    cursor: pointer;
    transition: all .25s ease;
    box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
  }

  .subscribe .submit-btn:hover {
    background-color: #07013d;
    box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
  }`;

const CardUsu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  };
  return (
    <StyledWrapperUsu>
      <div className="subscribe">
        <p>USUARIO</p>
        
        <br />
        <div className="submit-btn" onClick={handleClick}>INGRESAR</div>
      </div>
    </StyledWrapperUsu>
  );
}

const StyledWrapperUsu = styled.div`
  .subscribe {
    position: relative;
    height: 60px;
    width: 240px;
    padding: 20px;
    background-color: #93a1a1;
    border-radius: 4px;
    color: #000000;
    box-shadow: 0px 0px 60px 5px rgb(0, 0, 0);
  }

  .subscribe:after {
    position: absolute;
    content: "";
    right: -10px;
    bottom: 18px;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1a044e;
  }

  .subscribe p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 4px;
    line-height: 28px;
  }

  .subscribe input {
    position: absolute;
    bottom: 30px;
    border: none;
    border-bottom: 1px solidrgb(209, 117, 146);
    padding: 10px;
    width: 82%;
    background: transparent;
    transition: all .25s ease;
  }

  .subscribe input:focus {
    outline: none;
    border-bottom: 1px solid #0d095e;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
  }

  .subscribe .submit-btn {
    position: absolute;
    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background-color: #d97a20;
    color: #FFF;
    padding: 12px 25px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 5px;
    right: -10px;
    bottom: -20px;
    cursor: pointer;
    transition: all .25s ease;
    box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
  }

  .subscribe .submit-btn:hover {
    background-color: #07013d;
    box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
  }`;

export default Inicio;

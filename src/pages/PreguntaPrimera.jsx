import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PreguntaPrimera() {
  return (
    <div style={styles.container}>
      
      <CardPregunta />
      <div style={{ marginTop: '35rem' }}>
        <ButtonSiguiente />
      </div>
      
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'flex-start',
    paddingTop: '3rem',
    paddingLeft: '17rem',
    paddingRight: '2rem',
    background: 'linear-gradient(150deg, #130b37, rgb(15, 4, 47), rgb(46, 3, 74))',
    color: 'white',
  },
};

const CardPregunta = () => {
  return (
    <StyledWrapperPregunta>
      <div className="card">
        <div className="gradient" />
        <p className="title">CURSO: Medio Ambiente 🌱</p>
        <p className="title1">Pregunta 1</p>
        <p className="label">
          Tras un derrame masivo de petróleo en un ecosistema marino costero, múltiples estudios científicos han documentado efectos tanto inmediatos como de largo plazo sobre la biodiversidad. Considerando los hallazgos de investigaciones realizadas años después de eventos como el derrame del Exxon Valdez (1989) o el Deepwater Horizon (2010), ¿cuál de las siguientes consecuencias ha demostrado ser una de las más persistentes y difíciles de revertir, incluso décadas después del incidente?
        </p>

        <div className="radio-group">
          <label className="liquid-radio">
            <input type="radio" name="options" defaultValue="option1" defaultChecked />
            <span className="radio-visual" />
            <span className="radio-label">A.- Incremento prolongado en la temperatura superficial del mar debido a la reducción de la evaporación.</span>
          </label>
          <label className="liquid-radio variant-coral">
            <input type="radio" name="options" defaultValue="option2" />
            <span className="radio-visual" />
            <span className="radio-label">B.- Disminución sostenida en la diversidad genética de organismos bentónicos por afectación directa de su hábitat.</span>
          </label>
          <label className="liquid-radio variant-mint">
            <input type="radio" name="options" defaultValue="option3" />
            <span className="radio-visual" />
            <span className="radio-label">C.- Recuperación acelerada de los niveles de pesca comercial debido a la migración de nuevas especies.</span>
          </label>
          <label className="liquid-radio variant-sky">
            <input type="radio" name="options" defaultValue="option4" />
            <span className="radio-visual" />
            <span className="radio-label">D.- Eliminación total de compuestos hidrocarbonados en la arena y los sedimentos costeros en un plazo menor a dos años.</span>
          </label>
        </div>





      </div>
    </StyledWrapperPregunta>
  );
};

const StyledWrapperPregunta = styled.div`
  .card {
    font-family: "Poppins", sans-serif;
    width: 1000px;
    height: 600px;
    border-radius: 8px;
    background-color: rgb(212, 205, 205);
    padding: 1px 32px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(153, 141, 141, 0.91);
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
    color:rgb(6, 6, 6);
    margin-bottom: -28px;
    transition: transform 0.3s ease;
  }
  
  .title1 {
    font-size: 32px;
    font-weight: 550;
    color:rgb(6, 6, 6);
    margin-bottom: 12px;
    transition: transform 0.3s ease;
  }

  .label {
    font-size: 18px;
    color:rgb(16, 16, 16);
    opacity: 0-9;
    line-height: 1.4;
    font-weight: 400;
    margin-bottom: 2.5rem;
    transition: transform 0.3s ease;
  }
  .card:hover .radio-group,
  .card:hover .title,
  .card:hover .title1,
  .card:hover .label {
    transform: translateX(20px);
  }

  .card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-image: linear-gradient(to bottom,rgb(215, 21, 0),rgb(255, 193, 92));
    border-radius: 8px 0 0 8px;
    transition: width 0.3s ease;
  }

  .card:hover::before {
    width: 10px;
  }

  .gradient {
    position: absolute;
    top: -200px;
    left: -200px;
    width: 600px;
    height: 600px;
    background: #ffffff;
    border-radius: 50%;
    filter: blur(200px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover .gradient {
    opacity: 0.04;
  }
  
  


  .lgc-radio-wrapper {
    margin: 0;
    padding: 2rem;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .liquid-radio {
    --primary-hue: 280;
    --secondary-hue: 320;
    --tertiary-hue: 200;
    --saturation: 45%;
    --lightness: 85%;
    --border-radius: 2em;
    --transition-duration: 0.4s;
    --scale-factor: 1;

    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    user-select: none;
    transition: all var(--transition-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .liquid-radio:hover {
    --scale-factor: 1.03;
    transform: scale(var(--scale-factor)) translateZ(5px);
  }

  .liquid-radio input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .liquid-radio .radio-visual {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.75em;
    border-radius: var(--border-radius);
    background: linear-gradient(
      135deg,
      hsl(var(--primary-hue), var(--saturation), var(--lightness)),
      hsl(var(--secondary-hue), var(--saturation), var(--lightness)),
      hsl(var(--tertiary-hue), var(--saturation), var(--lightness))
    );
    border: 0.125em solid
      hsla(
        var(--primary-hue),
        var(--saturation),
        calc(var(--lightness) - 20%),
        0.4
      );
    transition: all var(--transition-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow:
      0 0.25em 0.5em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 40%),
          0.15
        ),
      0 0.125em 0.25em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 30%),
          0.2
        ),
      0 0.0625em 0.125em hsla(0, 0%, 0%, 0.1),
      inset 0 0.125em 0.25em hsla(0, 0%, 100%, 0.6),
      inset 0 -0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(
                --lightness
              ) - 15%), 0.3);
    transform-style: preserve-3d;
  }

  .liquid-radio .radio-visual::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      hsl(
        var(--primary-hue),
        calc(var(--saturation) + 25%),
        calc(var(--lightness) - 25%)
      ),
      hsl(
        var(--secondary-hue),
        calc(var(--saturation) + 20%),
        calc(var(--lightness) - 35%)
      ),
      hsl(
        var(--primary-hue),
        calc(var(--saturation) + 15%),
        calc(var(--lightness) - 45%)
      )
    );
    transform: translate(-50%, -50%) scale(0) translateZ(2px);
    transition: all var(--transition-duration)
      cubic-bezier(0.68, -0.25, 0.265, 1.25);
    opacity: 0;
    box-shadow:
      0 0.0625em 0.125em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 50%),
          0.4
        ),
      inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.4);
  }

  .liquid-radio .radio-visual::after {
    content: "";
    position: absolute;
    top: -0.1875em;
    left: -0.1875em;
    right: -0.1875em;
    bottom: -0.1875em;
    border-radius: calc(var(--border-radius) + 0.0625em);
    background: radial-gradient(
      ellipse at top left,
      hsla(var(--primary-hue), var(--saturation), var(--lightness), 0.6),
      hsla(var(--secondary-hue), var(--saturation), var(--lightness), 0.4),
      hsla(var(--tertiary-hue), var(--saturation), var(--lightness), 0.2)
    );
    opacity: 0;
    transition: all var(--transition-duration)
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
    filter: blur(0.125em);
  }

  .liquid-radio:hover .radio-visual {
    --saturation: 55%;
    --lightness: 88%;
    transform: translateY(-0.125em) rotateX(5deg) translateZ(3px);
    box-shadow:
      0 0.5em 1em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 40%),
          0.2
        ),
      0 0.25em 0.5em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 30%),
          0.25
        ),
      0 0.125em 0.25em hsla(0, 0%, 0%, 0.15),
      inset 0 0.1875em 0.375em hsla(0, 0%, 100%, 0.7),
      inset 0 -0.0625em 0.125em hsla(var(--primary-hue), var(--saturation), calc(var(
                --lightness
              ) - 15%), 0.4);
  }

  .liquid-radio:hover .radio-visual::after {
    opacity: 1;
    transform: translateZ(-1px) scale(1.1);
  }

  .liquid-radio input[type="radio"]:focus + .radio-visual {
    outline: 0.125em solid
      hsl(var(--primary-hue), var(--saturation), calc(var(--lightness) - 40%));
    outline-offset: 0.125em;
  }

  .liquid-radio input[type="radio"]:checked + .radio-visual {
    --saturation: 65%;
    --lightness: 80%;
    background: radial-gradient(
      ellipse at top left,
      hsl(var(--primary-hue), var(--saturation), calc(var(--lightness) + 5%)),
      hsl(var(--secondary-hue), var(--saturation), var(--lightness)),
      hsl(var(--tertiary-hue), var(--saturation), calc(var(--lightness) - 5%))
    );
    border-color: hsl(
      var(--primary-hue),
      calc(var(--saturation) + 10%),
      calc(var(--lightness) - 30%)
    );
    box-shadow:
      0 0.375em 0.75em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 40%),
          0.25
        ),
      0 0.1875em 0.375em
        hsla(
          var(--primary-hue),
          var(--saturation),
          calc(var(--lightness) - 30%),
          0.3
        ),
      0 0.0625em 0.125em hsla(0, 0%, 0%, 0.2),
      inset 0 0.1875em 0.375em hsla(0, 0%, 100%, 0.8),
      inset 0 -0.0625em 0.1875em hsla(var(--primary-hue), var(--saturation), calc(var(
                --lightness
              ) - 20%), 0.4);
    transform: translateZ(2px);
  }

  .liquid-radio input[type="radio"]:checked + .radio-visual::before {
    transform: translate(-50%, -50%) scale(1) translateZ(2px);
    opacity: 1;
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .liquid-radio input[type="radio"]:active + .radio-visual {
    transform: scale(0.96) translateY(0.0625em) rotateX(-2deg);
    transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @keyframes pulseGlow {
    0%,
    100% {
      box-shadow:
        0 0.0625em 0.125em
          hsla(
            var(--primary-hue),
            var(--saturation),
            calc(var(--lightness) - 50%),
            0.4
          ),
        inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.4);
    }
    50% {
      box-shadow:
        0 0.0625em 0.1875em
          hsla(
            var(--primary-hue),
            var(--saturation),
            calc(var(--lightness) - 50%),
            0.6
          ),
        0 0 0.25em
          hsla(
            var(--primary-hue),
            calc(var(--saturation) + 20%),
            calc(var(--lightness) - 30%),
            0.3
          ),
        inset 0 0.0312em 0.0625em hsla(0, 0%, 100%, 0.6);
    }
  }

  .liquid-radio .radio-label {
    font-size: 16px;
    color: hsl(var(--primary-hue), 25%, 45%);
    font-weight: 500;
    transition: color var(--transition-duration) ease;
  }

  .liquid-radio:hover .radio-label {
    color: hsl(var(--primary-hue), 35%, 35%);
  }

  .liquid-radio input[type="radio"]:checked ~ .radio-label {
    color: hsl(var(--primary-hue), 40%, 30%);
  }

  /* Variant colors */
  .liquid-radio.variant-coral {
    --primary-hue: 15;
    --secondary-hue: 45;
    --tertiary-hue: 340;
  }

  .liquid-radio.variant-mint {
    --primary-hue: 150;
    --secondary-hue: 180;
    --tertiary-hue: 120;
  }

  .liquid-radio.variant-sky {
    --primary-hue: 200;
    --secondary-hue: 220;
    --tertiary-hue: 260;



`;

const ButtonSiguiente = () => {
  const navigate = useNavigate();
  
    const siguiente = () => {
      navigate('/Login/Usuario/Examen/PreguntaIntermedia');
    };
  return (
    <StyledWrapperSiguiente>
      <button type="button" className="btn" onClick={siguiente}>
        <strong>SIGUIENTE ➡️</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapperSiguiente>
  );
}


const StyledWrapperSiguiente = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    overflow: hidden;
    height: 3rem;
    background-size: 300% 300%;
    cursor: pointer;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  strong {
    z-index: 2;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    letter-spacing: 3px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }`;

export default PreguntaPrimera;


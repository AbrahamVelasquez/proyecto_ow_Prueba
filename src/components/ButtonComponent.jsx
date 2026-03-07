import './ButtonComponent.css';
import { useState, useEffect } from 'react';

function ButtonComponent() {
  
  const [count, setCount] = useState(-1); // Usamos -1 para saber que no ha empezado

  const startTimer = () => {
    if (count > 0) return;
    setCount(10);
  };

  useEffect(() => {
    let interval = null;

    if (count > 0) {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else if (count === 0) {
      // Cuando llega a cero, esperamos un instante para que el navegador 
      // pinte el "0" antes de bloquear todo con el alert.
      setTimeout(() => {
        alert("hola");
        setCount(-1); // Reiniciamos para que el botón vuelva a su estado original
      }, 100);
    }

    // Limpieza: muy importante para evitar que los alerts se acumulen
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div style={{ textAlign: 'center' }}>
      <button className="button" onClick={startTimer}>
        {count > 0 ? 'Contando...' : 'Iniciar cuenta atrás'}
      </button>

      {/* Mostramos el contador si es 0 o más */}
      {count >= 0 && (
        <div className="countdown-timer">
          {count}
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;
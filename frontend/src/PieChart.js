import React from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios'; // Importa Axios

const PieChart = ({ xganadas, oganadas, empates }) => {
  // Función para reiniciar resultados y recargar la página
  const reiniciarYRecargar = () => {
    axios.post('https://backend-g4uf37rhhq-rj.a.run.app/reiniciar-resultados')
      .then(() => {
        // Recarga la página
        window.location.reload();
      })
      .catch(error => {
        console.error('Error al reiniciar resultados:', error);
      });
  };
  if (xganadas === 0 && oganadas === 0 && empates === 0) {
    const divStyle = {
      width: '700px',
      height: '500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',  // Tamaño de fuente personalizable
      fontFamily: 'Arial, sans-serif',  // Cambia la fuente aquí
      textAlign: 'center',
    };

    return (
      <div style={divStyle}>
        <p>
          Para jugar al Ta-te-ti, sigue estos pasos:
          <ol>
            <li>Elige un jugador para ser "X" y otro para ser "O".</li>
            <li>El jugador "X" comienza y coloca su ficha en un espacio vacío del tablero.</li>
            <li>Los jugadores se turnan para colocar sus fichas en los espacios vacíos.</li>
            <li>Gana el jugador que forme una línea horizontal, vertical o diagonal con sus fichas.</li>
            <li>Si todos los espacios se llenan y nadie forma una línea, se considera un empate.</li>
            <li>¡Diviértete!</li>
          </ol>
        </p>
      </div>
    );
  }
  const data = [
    ['Resultado', 'Cantidad'],
    ['Ganador X', xganadas],
    ['Ganador O', oganadas],
    ['Empate', empates],
  ];

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        data={data}
        options={{
          is3D: true,
          legend: 'none',
          chartArea: { top: 10, width: '90%', height: '90%' },
        }}
      />
<div style={buttonStyle}>
        <button className="bg-zinc-300 hover:bg-zinc-400 text-white font-bold py-2 px-4 border-b-4 border-zinc-600 hover:border-zinc-500 rounded" onClick={reiniciarYRecargar}>Reiniciar Resultados</button>
      </div>    </div>
  );
};

export default PieChart;

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
const port = 8080;

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Ruta para registrar un resultado de juego
app.get('/registrar-resultado', (req, res) => {
  const { ganador } = req.query;

  if (ganador === 'X') {
    db.query('UPDATE contador SET ganador_X = ganador_X + 1', (err, result) => {
      if (err) {
        console.error('Error al actualizar el contador de ganador X:', err);
        res.status(500).json({ error: 'Error al actualizar el contador de ganador X' });
      } else {
        console.log('Contador de ganador X actualizado');
        res.status(200).json({ message: 'Contador de ganador X actualizado' });
      }
    });
  } else if (ganador === 'O') {
    db.query('UPDATE contador SET ganador_O = ganador_O + 1', (err, result) => {
      if (err) {
        console.error('Error al actualizar el contador de ganador O:', err);
        res.status(500).json({ error: 'Error al actualizar el contador de ganador O' });
      } else {
        console.log('Contador de ganador O actualizado');
        res.status(200).json({ message: 'Contador de ganador O actualizado' });
      }
    });
  } else {
    db.query('UPDATE contador SET empate = empate + 1', (err, result) => {
      if (err) {
        console.error('Error al actualizar el contador de empate:', err);
        res.status(500).json({ error: 'Error al actualizar el contador de empate' });
      } else {
        console.log('Contador de empate actualizado');
        res.status(200).json({ message: 'Contador de empate actualizado' });
      }
    });
  }
});

// Ruta para obtener los resultados actuales
app.get('/obtener-resultados', (req, res) => {
    db.query('SELECT ganador_X, ganador_O, empate FROM contador', (err, result) => {
      if (err) {
        console.error('Error al obtener resultados:', err);
        res.status(500).json({ error: 'Error al obtener resultados' });
      } else {
        const [row] = result;
        const resultados = {
          ganador_X: row.ganador_X,
          ganador_O: row.ganador_O,
          empate: row.empate,
        };
        console.log('Mostrar Resultados');
        res.status(200).json(resultados);
      }
    });
  });

// Ruta para reiniciar los resultados (poner todo a 0)
app.post('/reiniciar-resultados', (req, res) => {
    db.query('UPDATE contador SET ganador_X = 0, ganador_O = 0, empate = 0', (err, result) => {
      if (err) {
        console.error('Error al reiniciar los resultados:', err);
        res.status(500).json({ error: 'Error al reiniciar los resultados' });
      } else {
        console.log('Resultados reiniciados');
        res.status(200).json({ message: 'Resultados reiniciados' });
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});

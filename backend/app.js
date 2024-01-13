import express from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 8080;

// const pool = createPool({
//   user: `root`,
//   password: `pedro123`,
//   database: `perros`,
//   socketPath: `/cloudsql/tateti-404421:us-central1:prueba`,
//  });

// // // Configura la conexión a la base de datos MySQL
// // const pool = createPool({
// //   host: 'localhost', //pruebo en entorno local con DB_HOST=localhost npx mocha
// //   user: 'root',
// //   password: 'root',
// //   database: 'mydb',
// //   port: 3306
// // });

let pool;

if (process.env.NODE_ENV === 'local') {
  // NODE_ENV=local node app.js
  pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb',
    port: 3306,
  });
} else {
  // Configura la conexión a la base de datos MySQL en la nube
  pool = createPool({
    user: `root`,
    password: `pedro123`,
    database: `perros`,
    socketPath: `/cloudsql/tateti-404421:us-central1:prueba`,
  });
}

app.get("/", async (req, res) => {
res.json({ status: "Backend Tateti Funcionando! Version 3.5" });
});

// Ruta para registrar un resultado de juego
app.get('/registrar-resultado', async (req, res) => {
  const { ganador } = req.query;

  try {
    if (ganador === 'X') {
      await pool.query('UPDATE contador SET ganador_X = ganador_X + 1');
      console.log('Contador de ganador X actualizado');
      res.status(200).json({ message: 'Contador de ganador X actualizado' });
    } else if (ganador === 'O') {
      await pool.query('UPDATE contador SET ganador_O = ganador_O + 1');
      console.log('Contador de ganador O actualizado');
      res.status(200).json({ message: 'Contador de ganador O actualizado' });
    } else {
      await pool.query('UPDATE contador SET empate = empate + 1');
      console.log('Contador de empate actualizado');
      res.status(200).json({ message: 'Contador de empate actualizado' });
    }
  } catch (err) {
    console.error('Error al actualizar el contador:', err);
    res.status(500).json({ error: 'Error al actualizar el contador' });
  }
});

// Ruta para obtener los resultados actuales
app.get('/obtener-resultados', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT ganador_X, ganador_O, empate FROM contador');
    const row = result[0];
    const resultados = {
      ganador_X: row.ganador_X,
      ganador_O: row.ganador_O,
      empate: row.empate,
    };
    console.log('Mostrar Resultados');
    res.status(200).json(resultados);
  } catch (err) {
    console.error('Error al obtener resultados:', err);
    res.status(500).json({ error: 'Error al obtener resultados' });
  }
});

// Ruta para reiniciar los resultados (poner todo a 0)
app.post('/reiniciar-resultados', async (req, res) => {
  try {
    await pool.query('UPDATE contador SET ganador_X = 0, ganador_O = 0, empate = 0');
    console.log('Resultados reiniciados');
    res.status(200).json({ message: 'Resultados reiniciados' });
  } catch (err) {
    console.error('Error al reiniciar los resultados:', err);
    res.status(500).json({ error: 'Error al reiniciar los resultados' });
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});

export default app;
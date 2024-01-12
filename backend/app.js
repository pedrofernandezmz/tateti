// import express from 'express';
// import { createPool } from 'mysql2/promise';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// const port = 8080;

// // Configura la conexión a la base de datos MySQL
// const pool = createPool({
//   host: process.env.DB_HOST || 'database', //pruebo en entorno local con DB_HOST=localhost npx mocha
//   user: 'root',
//   password: 'root',
//   database: 'mydb',
//   port: 3306
// });

// // Ruta para registrar un resultado de juego
// app.get('/registrar-resultado', async (req, res) => {
//   const { ganador } = req.query;

//   try {
//     if (ganador === 'X') {
//       await pool.query('UPDATE contador SET ganador_X = ganador_X + 1');
//       console.log('Contador de ganador X actualizado');
//       res.status(200).json({ message: 'Contador de ganador X actualizado' });
//     } else if (ganador === 'O') {
//       await pool.query('UPDATE contador SET ganador_O = ganador_O + 1');
//       console.log('Contador de ganador O actualizado');
//       res.status(200).json({ message: 'Contador de ganador O actualizado' });
//     } else {
//       await pool.query('UPDATE contador SET empate = empate + 1');
//       console.log('Contador de empate actualizado');
//       res.status(200).json({ message: 'Contador de empate actualizado' });
//     }
//   } catch (err) {
//     console.error('Error al actualizar el contador:', err);
//     res.status(500).json({ error: 'Error al actualizar el contador' });
//   }
// });

// // Ruta para obtener los resultados actuales
// app.get('/obtener-resultados', async (req, res) => {
//   try {
//     const [result] = await pool.query('SELECT ganador_X, ganador_O, empate FROM contador');
//     const row = result[0];
//     const resultados = {
//       ganador_X: row.ganador_X,
//       ganador_O: row.ganador_O,
//       empate: row.empate,
//     };
//     console.log('Mostrar Resultados');
//     res.status(200).json(resultados);
//   } catch (err) {
//     console.error('Error al obtener resultados:', err);
//     res.status(500).json({ error: 'Error al obtener resultados' });
//   }
// });

// // Ruta para reiniciar los resultados (poner todo a 0)
// app.post('/reiniciar-resultados', async (req, res) => {
//   try {
//     await pool.query('UPDATE contador SET ganador_X = 0, ganador_O = 0, empate = 0');
//     console.log('Resultados reiniciados');
//     res.status(200).json({ message: 'Resultados reiniciados' });
//   } catch (err) {
//     console.error('Error al reiniciar los resultados:', err);
//     res.status(500).json({ error: 'Error al reiniciar los resultados' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Aplicación escuchando en el puerto ${port}`);
// });

// export default app;



// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// const port = 8080;

// // Ruta para obtener datos de la API de Pokémon
// app.get('/obtener-datos-pokemon', async (req, res) => {
//   try {
//     console.log('Recibida solicitud para obtener datos de Pokémon');

//     // Hacer la solicitud a la API de Pokémon
//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');

//     // Extraer los datos relevantes
//     const pokemonData = {
//       name: response.data.name,
//       id: response.data.id,
//       types: response.data.types.map(type => type.type.name),
//       abilities: response.data.abilities.map(ability => ability.ability.name),
//       height: response.data.height,
//       weight: response.data.weight,
//     };

//     // Configurar encabezados CORS
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//     // Enviar los datos como respuesta
//     res.json(pokemonData);
//     console.log('Datos de Pokémon enviados con éxito');
//   } catch (error) {
//     console.error('Error al obtener datos de la API de Pokémon:', error.message);
//     res.status(500).send('Error en el servidorpokemon');
//   }
// });

// // Iniciar el servidor
// app.listen(port, () => {
//   console.log(`Servidor iniciado en http://localhost:${port}`);
// });


const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());
const port = 8080;
app.listen(port, () => {
console.log(`BarkBark Rest API listening on port ${port}`);
});

app.get("/", async (req, res) => {
res.json({ status: "Bark bark! Ready to rPENESSSSoll!" });
});

app.get("/razas", async (req, res) => {
  const query = 'SELECT * FROM contador';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener razas de perros:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(results);
    }
  });
});

app.get("/contador", async (req, res) => {
  const query = 'SELECT * FROM contador';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener razas de contador:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(results);
    }
  });
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
    console.log('Mostrar Resultado PENEEEs');
    res.status(200).json(resultados);
  } catch (err) {
    console.error('Error al obtener resultados PENEEES:', err);
    res.status(500).json({ error: 'Error al obtener resultado PENNEEE' });
  }
});

const pool = mysql.createPool({
  user: `root`,
  password: `pedro123`,
  database: `perros`,
  socketPath: `/cloudsql/tateti-404421:us-central1:prueba`,
 });
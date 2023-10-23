const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public')); // Para servir archivos estáticos

app.use(express.json()); // Parsear el cuerpo de las solicitudes JSON

app.post('/agregarCliente', (req, res) => {
  const cliente = req.body;
  fs.appendFile('clientes.txt', JSON.stringify(cliente) + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al agregar el cliente.');
    } else {
      res.status(200).send('Cliente agregado exitosamente.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});




const express = require('express');
const cors = require('cors');
const tareas = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/agregar-tarea', (req, res) => {
  const { tarea } = req.body;
  if (!tarea || tarea.trim() === "") {
    return res.status(400).json({ message: "Tarea inválida" });
  }
  tareas.push(tarea);
  res.json({ message: `Tarea guardada: ${tarea}` });
});

app.listen(3000, () => {
  console.log("Backend ejecutándose en puerto 3000");
});

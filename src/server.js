const express = require('express')
const app = express()
const port = 3002;
const inicioApp  =  require('./controllers/inicio-control');
const tarefasController = require('./controllers/tarefas-control');
const usuarioController = require('./controllers/usuario-control');



inicioApp(app);
usuarioController(app);
tarefasController(app);

app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})
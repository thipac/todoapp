//imports
const express = require('express')
//configs
const app = express()
const port = 3002;

//imports Router
const inicioApp  =  require('./controllers/inicio-control');
const tarefasController = require('./controllers/tarefas-control');
const usuarioController = require('./controllers/usuario-control');

//Import Models n DB
const User = require('./models/UserModel')
const Task = require('./models/TaskModel')
const db = require('./infra/db')

//Middlewares
app.use(express.json())

//Usando Rotas
inicioApp(app);
usuarioController(app);
tarefasController(app);

//Listen 
app.listen(port, () => {
  console.log(`Porta que está sendo executada: http://localhost:${port}`)
})
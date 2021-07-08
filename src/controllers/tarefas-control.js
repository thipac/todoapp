const tarefasController = (app) => {
    app.get('/tarefas', (req, resp) => {
        resp.send(`Rota ativada com GET e recurso tarefas:
        valores de tarefas devem ser retornados`)
    })
    app.post('/tarefas',(req,res)=>{
        res.send('Rota POST de Tarefas ativada: Tarefa adicionada ao banco de dados!')
    })
}

module.exports = tarefasController
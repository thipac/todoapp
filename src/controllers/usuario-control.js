const usuarioController = (app) => {
    app.get('/usuarios', (req, resp) => {
        resp.send(`Rota ativada com GET e recurso usuario:
        valores de tarefas devem ser retornados`)
    })
    app.post('/usuarios',(req,res)=>{
        res.send('Rota POST de usuario ativada: usuário adicionado ao banco de dados!')
    })
}

module.exports = usuarioController
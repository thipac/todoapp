const inicioApp = (app) => {
    app.get('/', (req, resp) => {
        resp.send(`Seja bem vindo ao To do List`)
    })
}
module.exports = inicioApp
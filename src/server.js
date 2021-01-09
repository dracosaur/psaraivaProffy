// servidor
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSucess} = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


// inicio e configuração do servidor
server
// receber os dados do req body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/views/pageLanding", pageLanding)
.get("/views/study", pageStudy)
.get("/views/give-classes.html", pageGiveClasses)
.post("/views/save-classes", saveClasses)


// start do servidor
.listen(5500)


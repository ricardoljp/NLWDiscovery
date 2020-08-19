const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "89898898988989898" ,
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." , 
        subject: "Química", 
        cost: 20.00, 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Diego Bolinha",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "89898898988989898" ,
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." , 
        subject: "Química", 
        cost: 20.00, 
        weekday: [1], 
        time_from: [], 
        time_to: [1220]
    }
]

const subjects = [
        "Artes",
        "Biologia",
        "Ciências",
        "Educação Física",
        "Geografia",
        "História",
        "Matemática",
        "Português",
        "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isnotEmpty = Object.keys(data).length > 0
    //if data is filled then add data to proffys object
    if (isnotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    } 
    
    //else show the page
    return res.render("give-classes.html", { subjects, weekdays })
}


const express = require('express')
const server = express()

//nunjucks configuration
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { 
    express: server,
    noCache: true
})

server
//Configuration for static files (css, scripts, images)
.use(express.static("public"))
//app routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

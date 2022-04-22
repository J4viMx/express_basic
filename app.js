
//Usando objeto express
const express = require('express')

//app de express
const app = express()

//Puerto en que vamos a ver nuestra app: localhost:9000
const port = 9000

//Path inicial, responderá a la url localhost:9000
app.get('/', (req, res) =>{
    res.send('Hello World!')
})


//Respondiendo en /launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchx')
})

//Regresar un objeto  en /explorersInNode
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})


//Recibir parametros por la url
// /explorers/${dato}
// req.params = {"explorerName":"carlo"}
app.get('/explorer/:explorerName', (req, res) =>{
    res.send(req.params)
})

//Con esto inicializamos esta app

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})




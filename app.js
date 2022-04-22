
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


//REspondiendo en /launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchx')
})


//Con esto inicializamos esta app

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})




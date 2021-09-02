const express = require('express');
const contenedor = require('./Clase-Docs.js');
const app = express();

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola este es mi primer servidor express' })
})


app.get('/productos', async (req, res) =>  {     
        try { 
            const objeto = await contenedor.getAll();
            res.send(objeto)
                }
        catch (error){
            return('no se puede resolver', error)
        }    
})

app.get('/productoRandom', async (req, res) =>  {     
        try { 
        const array = await contenedor.getAll(); 
        const aleatorio = Math.floor(Math.random()*(array.length));
        const seleccion = array[aleatorio];
        res.send(seleccion)
        }
        catch (error){
            return('no se puede mostrar', error)
        } 
    })
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`el servidor http esta escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`error en servidor ${error}`));




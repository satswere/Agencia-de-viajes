import express from 'express';
import router from './routes/index.js';

const app = express();

//definir los puertos
const port = process.env.PORT || 4000;

//definir las rutas del sitio
app.use(`/`,router);

//agregar la carpeta publica
app.use (express.static('public'));

//definir las vistas
app.set('view engine', 'pug');

app.listen(port, () =>{
    console.log(`El serivodor esta funcionando en el puerto ${port}`);
});
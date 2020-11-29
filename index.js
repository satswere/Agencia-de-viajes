import express, { request } from 'express';
import router from './routes/index.js';

const app = express();

//definir los puertos
const port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

//obtener el año actual
//req es para poder solictar informacion al servidor
//res la respuesta que te manda el servidor de esa consulta
//next manda a la siguiente middlewere
app.use( (req , res , next) => {
    const year = new Date();    //la fecha actual, año, mes, dia, hora, minutos, segundos
    res.locals.new_year = year.getFullYear();
    res.locals.name_site = "Agencia de viajes"; // nombre del sitio
    // console.log(res.locals.new_year); // el año acutal
    next();
});



//agregar la carpeta publica
app.use (express.static('public'));

//definir las rutas del sitio
app.use(`/`,router);


app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
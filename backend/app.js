const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const myConnection = require('express-myconnection');
const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000",
                    credentials: true
                }
            ]
        }
    }
};

app.use(cors(
    config.application.cors.server
));

// IMPORTAR RUTAS BACKEND
const editorialRoute = require('./routes/editorialRoute');
const paisRoute = require('./routes/paisRoute');
const tipolibroRoute = require('./routes/tipolibroRoute');
const libroRoute = require('./routes/libroRoute');
const areaRoute = require('./routes/areaRoute');
const autorRoute = require('./routes/autorRoute');
const librosporareaRoute = require('./routes/librosporareaRoute');
const librosporautorRoute = require('./routes/librosporautorRoute');
const afiliadoRoute = require('./routes/afiliadoRoute');
const tipoprestamoRoute = require('./routes/tipoprestamoRoute');
const estadoRoute = require('./routes/estadoRoute');
const librosporexistenciaRoute = require('./routes/librosporexistenciaRoute');
const prestamoRoute = require('./routes/prestamoRoute');
const estadoporexistenciaRoute = require('./routes/estadoporexistenciaRoute');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'ContraProgra3MySQL2024',
    port:3306,
    database:'biblioteca'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// USAR RUTAS BACKEND
app.use('/api/editorial', editorialRoute);
app.use('/api/pais', paisRoute);
app.use('/api/tipolibro', tipolibroRoute);
app.use('/api/libro', libroRoute);
app.use('/api/area', areaRoute);
app.use('/api/autor', autorRoute);
app.use('/api/librosporarea', librosporareaRoute);
app.use('/api/librosporautor', librosporautorRoute);
app.use('/api/afiliado', afiliadoRoute);
app.use('/api/tipoprestamo', tipoprestamoRoute);
app.use('/api/estado', estadoRoute);
app.use('/api/librosporexistencia', librosporexistenciaRoute);
app.use('/api/prestamo', prestamoRoute);
app.use('/api/estadoporexistencia', estadoporexistenciaRoute);

app.use(express.static(path.join(__dirname,'public')));

// SERVER INIT
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});	

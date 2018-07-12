const express = require('express');
const https = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');//permite leer la data de las peticiones
//const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());//permite leer la data de las peticiones
app.use(bodyParser.urlencoded({extended: false}));//permite leer la data de las peticiones

app.get('/prueba', (req,res) => {
    res.send('Pasa a prueba');
});

app.post('/funcionalidades/enviaremail', (req, res) => {
    console.log("::::::::::::::::::::::::::::::");
    var smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'orcosystemsapp@gmail.com',
            pass:'orcosystemsangular'
        }
    });
    var mailOptions={
        from:req.body.nombrecorreo,
        to:'orlando_coca@yahoo.es',
        subject:req.body.asuntocorreo,
        html:"<h2>Correo enviado desde la pagina de Orco System's</h2><p>Nombre del cliente : "+req.body.nombrecorreo+"</p><p>Contenido del correo : </p><p>"+req.body.mensajecorreo+"</p><br><p>Email del cliente : "+req.body.emailcorreo+"</p>"
    };

    smtpTransport.sendMail(mailOptions, function(error,respuesta){
        if(error){
            console.log(error);
        }else{
            res.send("Correo enviado, responderemos pronto");
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', process.env.PORT || '3000');

const server = https.createServer(app);
server.listen(process.env.PORT || '3000', () => console.log('Running'));
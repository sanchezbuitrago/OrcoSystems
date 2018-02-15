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

app.post('/funcionalidades/enviaremail', (req, res) => {
    var smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'orcosystemsapp@gmail.com',
            pass:'orcosystemsangular'
        }
    });
    var mailOptions={
        from:req.body.nombrecorreo,
        to:'orcosystemsapp@gmail.com',
        subject:req.body.asuntocorreo,
        html:"<h1>El correo fuen enviado por : "+req.body.nombrecorreo+"</h1><p>"+req.body.mensajecorreo+"</p><br><h2>Puede responder a : "+req.body.emailcorreo+"</h2>"
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
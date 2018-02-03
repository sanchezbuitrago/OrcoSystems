const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.set('port',port);

const server = http.createServer(app);
server.listen(process.env.PORT || '3000', () => console.log('Running'));
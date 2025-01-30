const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/datas', express.static(path.join(__dirname, 'datas')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/experiences', (req, res) => {
    res.sendFile(path.join(__dirname, 'experiences.html'));
});

app.get('/angular', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

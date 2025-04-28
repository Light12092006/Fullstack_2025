const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => res.redirect('/projects.html'));

app.get('/cadastra', (req, res) => {
    res.sendFile(__dirname + '/public/cadastro.html');
});

app.post('/cadastra', (req, res) => {
    res.redirect('/login.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/Login.html');
});

app.post('/login', (req, res) => {
    const { login, senha } = req.body;
    const sucesso = (login === 'admin' && senha === '1234');
    res.render('resposta', { status: sucesso ? "Login realizado com sucesso!" : "Login falhou." });
});

app.listen(80, () => console.log('Servidor rodando'));

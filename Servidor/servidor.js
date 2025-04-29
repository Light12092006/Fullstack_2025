require("colors");
var http = require ("http");
var express = require ("express");
let bodyParser = require("body-parser")

var app = express ();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


app.get("/inicio",function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

// app.get("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.query.nome;
//     let login = requisicao.query.login;
//     let senha = requisicao.query.senha;
//     let nasc = requisicao.query.nascimento;

//     console.log(nome,login,senha,nasc)
    
// })




app.post("/cadastrar", function(requisicao,resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    console.log(nome,login,senha,nasc)

    var data = { db_nome: nome, db_login: login, db_senha: senha, db_nasc: nasc };

    usuarios.insertOne(data, function(err){
        console.log(err)
        if(err){
            resposta.render("resposta", {status: "Erro", nome, login, senha, nasc})
        }else{
            resposta.render("resposta", {status: "Sucesso", nome, login, senha, nasc})
        }
    })


    res.redirect("/login");
    
}) 

app.get("/for_ejs",function(requisicao,resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})

// ----------------------------------------------------------------------------------------------------------------

app.post("/cadastrolab", function(requisicao,resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    console.log(nome,login,senha,nasc)

    resposta.render("resposta",{nome,login,senha,nasc});
    
}) 

app.get("/for_ejs",function(requisicao,resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri ='mongodb+srv://jgcfabris12:tomate12@joao.5bzjezq.mongodb.net/?retryWrites=true&w=majority&appName=Joao';

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("Joao");
var usuarios = dbo.Collection("usuarios");

app.post('/logar'), function(requisicao,resposta){
    let login
}
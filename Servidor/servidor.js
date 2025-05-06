require("colors");
var http = require ("http");
var express = require ("express");
var mongodb = require("mongodb");
let bodyParser = require("body-parser")

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://jgcfabris12:zQm2hldztQL2kHug@joao.5bzjezq.mongodb.net/?retryWrites=true&w=majority&appName=Joao'
const client = new MongoClient(uri, { useNewUrlParser: true });
const path = require('path');

var dbo = client.db("Vini");
var usuarios = dbo.collection("usuarios");

var app = express ();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


// app.get("/inicio",function(requisicao,resposta){
//     resposta.redirect("exercicio/Home.html")
// })

// app.post("/inicio", function(requisicao,resposta){
//     resposta.redirect("exercicio/Home.html")
// })

// app.get("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.query.nome;
//     let login = requisicao.query.login;
//     let senha = requisicao.query.senha;
//     let nasc = requisicao.query.nascimento;

//     console.log(nome,login,senha,nasc)
    
// })




// app.post("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.body.Nome;
//     let login = requisicao.body.Login;
//     let senha = requisicao.body.Senha;
//     let nasc = requisicao.body.nascimento;

//     console.log(nome,login,senha,nasc);

//     var data = {db_nome: nome , db_login: login, db_senha: senha,db_nasci:nasc};

//     usuarios.insertOne(data, function(err){
//         console.log(err)
//         if(err){
//             resposta.render("resposta",{status: "Erro!" ,nome,login,senha,nasc});
//         }
//         else{
//             resposta.render("resposta",{status: "Sucesso!", nome,login,senha,nasc});
//         }
//     })

//     // resposta.render("resposta",{nome,login,senha,nasc});
    
// }) 

// app.get("/for_ejs",function(requisicao,resposta){
//     let valor = requisicao.query.valor;
//     resposta.render("exemplo_for",{valor});
// })

// ----------------------------------------------------------------------------------------------------------------
// Lista para armazenar usuários cadastrados
let pessoas = [];

app.get("/", function(req,res){
    res.redirect("exercicio/cadastro.html")
});

app.get("/cadastrar", function(req,res){
    res.redirect("exercicio/cadastro.html")
});

app.get("/login", function(req,res){
    res.redirect("exercicio/login.html")
});

// Cadastro de usuário
app.post("/cadastrar", function(req,res){
    let Nome = req.body.Nome;
    let User = req.body.User;
    let Senha = req.body.Senha;
    console.log("Cadastro:", Nome, User, Senha);

    // Adiciona o novo usuário
    pessoas.push({Nome, User, Senha});

    res.redirect("/login"); // Agora redireciona direto para a tela de login
});

// Login de usuário
app.post("/login", function(req,res){
    let User  = req.body.User;
    let Senha = req.body.Senha;
    console.log("Tentativa de login:", User, Senha);

    // Procura usuário na lista
    let encontrado = pessoas.find(u => u.User === User && u.Senha === Senha);

    if (encontrado) {
        // Login correto
        res.render("resposta", {nome: encontrado.Nome, user: encontrado.User, senha: encontrado.Senha, erro: null});
    } else {
        // Login errado
        res.render("resposta", {Nome: null, User: null, Senha: null, erro: "Usuário ou senha incorretos!"});
    }
});


//--------------------

// app.post('/logar', function(requisicao,resposta){
//     let login = requisicao.body.login;
//     let senha = requisicao.body.senha;
//     console.log(login,senha);

//     var data = {db_login: login, db_senha: senha}

//     usuarios.find(data).toArray(function(err,item){
//         console.log(item)
//         if(item.length == 0){
//             resposta.render("respostalogin",{status: "usuario/senha não encontrado"})
//         }else if(err){
//             resposta.render("respostalogin",{status: "erro ao logar"})
//         }else {
//             resposta.render("respostalogin",{status: "usuario logado"})
//         }
//     })
// })


//---------------------------------------------------------------------------------------------------------------------------------


var dbo = client.db("jgcfabris12");
var usuarios = dbo.collection("blog");

async function connectDB() {
  try {
    await client.connect();
    db = client.db('blog');
    postsCollection = db.collection('posts');
    console.log('Conectado ao MongoDB!');
    
    // Rotas
    app.get('/', (req, res) => {
      res.redirect('/exercicio/Projects.html'); // Redireciona para projetos
    });

    app.get('/blog', async (req, res) => {
      try {
        const posts = await postsCollection.find().sort({ createdAt: -1 }).toArray();
        res.render('blog', { posts }); // Página dinâmica com EJS
      } catch (err) {
        res.status(500).send('Erro ao carregar posts');
      }
    });

    app.get('/cadastrar_post', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'exercicio', 'cadastrar_post.html'));
    });

    app.post('/cadastrar-post', async (req, res) => {
      try {
        const { titulo, resumo, conteudo } = req.body;
        await postsCollection.insertOne({
          titulo,
          resumo,
          conteudo,
          createdAt: new Date()
        });
        res.redirect('/blog');
      } catch (err) {
        res.status(500).send('Erro ao cadastrar post');
      }
    });

    // Inicia servidor na porta 80
    app.listen(80, () => {
      console.log('Servidor rodando na porta 80');
    });
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
}

connectDB();
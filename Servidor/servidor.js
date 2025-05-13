// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://jgcfabris12:12092006@joao.5bzjezq.mongodb.net/?retryWrites=true&w=majority&appName=Joao`;

const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("bd_completo");
var usuarios = dbo.collection("usuarios");


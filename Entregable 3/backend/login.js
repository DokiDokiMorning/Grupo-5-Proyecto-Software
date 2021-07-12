var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

const crypto = require('crypto')
let salt = 'f844b09ff50c'
let alumn = "@uni.pe";
let profe = "@uni.edu.pe";
var connection = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b1c6c51602b5d2',
  password : 'b1cabd07',
  database : 'heroku_f2c1270e61b8075'
});

var app = express();
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/home', function(request, response) {
  if (request.session.loggedin) {
    response.sendFile(path.join(__dirname + '/Cursos.html'));
  } else {
    response.send('Please login to view this page!');
  }
});
app.get('/notas', function(request, response) {
  if (request.session.loggedin) {
    response.sendFile(path.join(__dirname + '/notas.html'));
  } else {
    response.send('Please login to view this page!');
  }
});
app.post('/reg', function(request, response) {
  let hash = crypto.pbkdf2Sync(request.body.passreg, salt,  
        1000, 64, `sha512`).toString(`hex`);
  let verAl = request.body.correoreg.indexOf(alumn);
  let verPr = request.body.correoreg.indexOf(profe);
  let tipo = "";
  if(verAl!=-1) tipo="Alumno";
  else if(verPr!=-1) tipo="Profesor";
  if (tipo!=""){
    var users={
          "Nombre":request.body.nombrereg,
          "Contrasenia":hash,
          "CorreoUNI":request.body.correoreg,
          "TipoUsuario":tipo
        }
        connection.query('INSERT INTO usuario SET ?',users, function (error, results, fields) {
          if (error) {
            response.send('El correo ya ha sido registrado u ocurrió un error interno.')
          } else {
            response.redirect('/');
            }
        });
    }
  else{
      response.redirect('/');
  }
});
/*app.post('/reg', function(request, response) {
    var nombre=request.body.nombrereg.toString();
    var passregi=request.body.passreg.toString();
    var correoregi=request.body.correoreg.toString();
    let verAl = correoregi.indexOf(alumn);
    let verPr = correoregi.indexOf(profe);
    let tipo = "";
    if(verAl!=-1) tipo="Alumno";
    else if(verPr!=-1) tipo="Profesor";
    else response.send('ÑO');
    var tipoUsuario=tipo;
    connection.query('insert into usuario(Nombre,Contrasenia,CorreoUNI,TipoUsuario) VALUE(nombre,passregi,correoregi,tipoUsuario)');
});*/
app.get('/logout', function(request, response, next) {
  if (request.session) {
    // delete session object
    request.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return response.redirect('/');
      }
    });
  }
});
app.post('/upload', function(request, response) {
  let idprovisional=5;
  var nuevaclase={
          "IdCurso":idprovisional,
          "NroSemana":request.body.nroSemana,
          "Contenido":request.body.linkclass,
          "Descripcion":request.body.classdescription,
          "nombre_clase":request.body.classname
        }
        connection.query('INSERT INTO clases SET ?',nuevaclase, function (error, results, fields) {
          if (error) {
            response.send({
              "code":400,
              "failed":"error ocurred"
            })
          } else {
            response.redirect('/home');
            }
        });
});
app.post('/auth', function(request, response) {
  var correo = request.body.correo;
  var password = crypto.pbkdf2Sync(request.body.password, salt,  
          1000, 64, `sha512`).toString(`hex`);
  if (correo && password) {
    connection.query('SELECT * FROM usuario WHERE CorreoUNI = ? AND Contrasenia = ?', [correo, password], function(error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.correo = correo;
        response.redirect('/home');
      } else {
        response.send('Incorrect Username and/or Password!');
      }     
     /* response.end();*/
    });
  } else {
    response.send('Please enter Username and Password!');
    /*response.end();*/
  }
});


app.listen(3000);
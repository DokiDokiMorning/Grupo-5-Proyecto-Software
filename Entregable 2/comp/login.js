window.addEventListener("resize", anchoPagina);
var contenedor_login_register = document.querySelector(".container_login_register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".back_box_login");
var caja_trasera_registro = document.querySelector(".back_box_register");

var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

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

app.post('/auth', function(request, response) {
	var username = request.body.correo;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);

function register(){
    if (window.innerWidth > 850){
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "410px";
      formulario_login.style.display = "none";
      caja_trasera_registro.style.opacity = "0";
      caja_trasera_login.style.opacity = "1";
    } else {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_login.style.display = "none";
      caja_trasera_registro.style.display = "none";
      caja_trasera_login.style.display = "block";
      caja_trasera_login.style.opacity = "1";
    }
}

function login(){
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function anchoPagina() {
  if (window.innerWidth > 850) {
    caja_trasera_login.style.display = "block";
    caja_trasera_registro.style.display = "block";
  } else {
    caja_trasera_registro.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
  }
}

/*function toMain() {
  var correo = document.getElementById("correo").value;
  var correoAl = /^[A-Za-z]*@uni.pe$/;
  var correoPro = /^[A-Za-z]*@uni.edu.pe$/;
  if(correo==""){
    return toProfe();
  } else {
    error();
  }
}

function error(){
  console.log("Correo no válido")
  window.alert("Correo no válido");
}

const history = useHistory();

const toProfe = () =>{
  history.push("ClaseProfesor")
}*/

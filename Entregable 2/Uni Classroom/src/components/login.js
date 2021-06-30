import React from "react";
import { useHistory } from "react-router-dom";
import "./css/login.css";

function Login() {
  window.addEventListener("resize", anchoPagina);

  function register(){
    if(document.getElementById("btn_register")!=null){
      var contenedor_login_register = document.querySelector(".container_login_register");
      var formulario_login = document.querySelector(".formulario_login");
      var formulario_register = document.querySelector(".formulario_register");
      var caja_trasera_login = document.querySelector(".back_box_login");
      var caja_trasera_registro = document.querySelector(".back_box_register");
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
  }

  function login(){
    if(document.getElementById("btn_login")!=null){
      var contenedor_login_register = document.querySelector(".container_login_register");
      var formulario_login = document.querySelector(".formulario_login");
      var formulario_register = document.querySelector(".formulario_register");
      var caja_trasera_login = document.querySelector(".back_box_login");
      var caja_trasera_registro = document.querySelector(".back_box_register");
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
  }

  function anchoPagina() {
    var contenedor_login_register = document.querySelector(".container_login_register");
    var formulario_login = document.querySelector(".formulario_login");
    var formulario_register = document.querySelector(".formulario_register");
    var caja_trasera_login = document.querySelector(".back_box_login");
    var caja_trasera_registro = document.querySelector(".back_box_register");
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

  function toMain() {
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
  }

  return(
    <div class="all_container">
    <div class="back_box">
      <div class="back_box_login">
        <h3>Ya tienes cuenta?</h3>
        <p>Inicia sesión para entrar en la página</p>
        <button id="btn_login" onClick={login}>Iniciar sesión</button>
      </div>
      <div class="back_box_register">
        <h3>Aún no tienes una cuenta?</h3>
        <p>Regístrate para que puedas iniciar sesión</p>
        <button id="btn_register" onClick={register}>Registrar</button>
      </div>
    </div>
    <div class="container_login_register">
      <form action="" class="formulario_login">
        <h2>Iniciar sesión</h2>
        <input id="correo" type="text" placeholder="Correo Electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={toMain}>Entrar</button>
      </form>
      <form action="" class="formulario_register">
        <h2>Registrarse</h2>
        <input type="text" placeholder="Nombre Completo" />
        <input type="text" placeholder="Correo Electrónico" />
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Registrarse</button>
      </form>
    </div>
    </div>
    );
}

export default Login;

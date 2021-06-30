import React from "react";
import "./css/main.css";

function MainAlumno(){
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.opacity = "0.6";
    document.getElementById("container").style.marginLeft = "250px";
    document.getElementById("container").style.backgroundColor = "rgba(237,210,21,0.7)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("container").style.backgroundColor = "rgba(237,251,21,0.5)";
  }

  const spanStyle = {
    fontSize: "30px",
    cursor: "pointer",
    color: "white",
    position: "left"
  };

  return(
    <div>
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a1>Menú</a1>
        <a href="#">Clase 1</a>
        <a href="#">Clase 2</a>
        <a href="#">Clase 3</a>
        <a1>-----------------------</a1>
        <a href="#">Notas</a>
      </div>
      <div class="topbar">
        <span style={spanStyle} id="Menu" onClick={openNav}>&#9776;Menú</span>
      </div>
      <div class="fondo" id="container">
        <div id="main">
          <h1>Bienvenido!</h1>
          <br />
          <a href="#">Clase 1</a>
          <a href="#">Clase 2</a>
          <a href="#">Clase 3</a>
        </div>
      </div>
    </div>
  );
}

export default MainAlumno;

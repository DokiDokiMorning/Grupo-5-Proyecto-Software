import React from "react";
import "./css/main.css";

function ClaseProfesor(){
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("top").style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.6";
    document.getElementById("container").style.backgroundColor = "rgba(237,210,21,0.7)";
    document.getElementById("top").style.width = "auto";
    document.getElementById("menu").style.color="lightGray";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("top").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("container").style.backgroundColor = "rgba(237,251,21,0.5)";
    document.getElementById("menu").style.color="white";
  }

  function driveNav() {
    var x = document.getElementById("mySidenav");
    var y = document.getElementById("main");
    if (x.style.width !== "250px" && y.style.marginLeft !== "250px" ) {
      openNav();
    } else {
      closeNav();
    }
  }

  function funcionClase(){
    var x= document.getElementById("clases").value;
    document.getElementById("materialClase").innerHTML = "Esta es la " + x;
  }

  function funcionEvaluacion(){
    var x= document.getElementById("evaluaciones").value;
    document.getElementById("evaluacionesPasadas").innerHTML = "Esta es la " + x;
  }

  const spanStyle = {
    fontSize: "30px",
    color: "white",
    cursor: "pointer"
  }

  const h1Style = {
    display:"inline-block",
    textDecoration:"none",
    color:"white",
    marginRight:"20px"
  }

  const aStyle = {
    display:"inline-block",
    textDecoration:"none",
    color:"#5F3A32",
    marginRight:"20px"
  }

  return(
    <div>
      <div id="mySidenav" class="sidenav">
        <a href="#" class="closebtn()" onClick={closeNav}>&times;</a>
        <a href="#">Curso</a>
        <a1>-----------------------</a1>
        <ul>
          <a href="#">Notas</a>
        </ul>
      </div>
      <div id="top" class="topbar">
        <span id="menu" style={spanStyle} onClick={driveNav}>&#9776; Menú</span>
      </div>
      <div class="fondo" id="container">
        <div id="main">
        <h1 style={h1Style}>Curso </h1>
        <a href="staff.html" style={aStyle}><h6>Editar</h6></a>
        <a href="staff.html" style={aStyle}><h6>Alumnos Matriculados</h6></a>
        <a href="#"><p>+ Crear Material</p></a>
        <a href="#"><p>+ Crear Evaluacion</p></a>
        <br />
        <select id="clases" name="select" onChange={funcionClase}>
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2" selected>Semana 2</option>
          <option value="Semana 3">Semana 3</option>
        </select>
        <a1 id="materialClase"></a1>
        <select id="evaluaciones" name="select" onChange={funcionEvaluacion}>
          <option value="Evaluacion 1">Evaluación 1</option>
          <option value="Evaluacion 2" selected>Evaluación 2</option>
          <option value="Evaluacion 3">Evaluación 3</option>
        </select>
        <a href="staff.html" style={aStyle}><h6>Calificar evaluaciones</h6></a>
        <a1 id="evaluacionesPasadas"></a1>
        </div>
      </div>
    </div>
  )
}

export default ClaseProfesor;

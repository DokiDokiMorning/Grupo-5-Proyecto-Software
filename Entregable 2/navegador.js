function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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
function funcionclase(){
  var x= document.getElementById("clases").value;
  document.getElementById("materialclase").innerHTML = "Esta es la " + x;
}
function funcionevaluacion(){
  var x= document.getElementById("evaluaciones").value;
  document.getElementById("evaluacionespasadas").innerHTML = "Esta es la " + x;
}
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

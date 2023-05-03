
function abrirMenu() {
    const aux = document.getElementById("contenedorMenu")
    aux.classList.toggle("mostrar")
  } 
  window.onclick = function(event) {
    if (!event.target.matches('#hamburguesa') && !event.target.matches('#hamburguesaLogo')) {
      var dropdowns = document.getElementsByClassName("contenedorMenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mostrar')) {
          openDropdown.classList.remove('mostrar');
        }
      }
    }
  } 

//Variables
var buscar = document.getElementById('buscar');
var busqueda = document.getElementById('busqueda');
var ul = document.getElementById('superLista');

var li = document.createElement('li');
var btn = document.createElement('button');

//Funciones
busqueda.addEventListener("click", function(){
  
  ul.appendChild(li);
  li.innerHTML = buscar.value;
  
  ul.appendChild(btn);
  btn.innerHTML = "Eliminar";
});

superLista.addEventListener("click", eliminarAccindental, eliminar); 

function eliminar(){

  ul.removeChild(li);
  ul.removeChild(btn);
}

function eliminarAccindental(){

  if (addEventListener) "click", eliminar 
    if (confirm("Desea eliminar el supermercado?")) {
      eliminar();
    }
  }
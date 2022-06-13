//Variables
var buscar = document.getElementById('buscar');
var busqueda = document.getElementById('busqueda');
var ul = document.getElementById('superLista');
var li = document.createElement('li');


//Funciones
busqueda.addEventListener("click", function(){
  
  var texto = buscar.value;
  if(texto){
    
    var li = document.createElement('li');
    var btn = document.createElement('button');
      btn.id = "btnEliminar";
    var textoLi = document.createTextNode(texto);
    var textoBtn = document.createTextNode("Eliminar");
    btn.appendChild(textoBtn);
    li.appendChild(textoLi);
    li.appendChild(btn);
    ul.appendChild(li);
    btn.innerHTML = "Eliminar";
  } else {
    alert(console.log("No hay nada"));
  }


  function eliminar(){
    ul.removeChild(li);
  }

  function eliminarAccindental(){
  
    if (addEventListener) "click", eliminar 
    if (confirm("Desea eliminar el supermercado?")) {
      eliminar();
    }
  }
  btn.addEventListener("click", eliminarAccindental);
});

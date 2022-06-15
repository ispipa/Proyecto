// cargar datos
var list_usuario = [];
const resultado_user_list = document.querySelectorAll('.resultado_user_list');
cargarDatos();
function cargarDatos()
{
    list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
    console.log(list_usuario)
    for (var i = 0; i < list_usuario.length; i++) 
        {
                resultado_user_list[0].innerHTML+='<a class="list-group-item list-group-item-action">'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class="bi bi-check-lg"></i></span>'+'</a>'+'</div>'
        }
}
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

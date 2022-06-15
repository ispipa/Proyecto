// cargar datos
var list_usuario = [];
var list_usuario_estilo = [];
const resultado_user_list = document.querySelectorAll('.resultado_user_list');
var recogerClases="";

cargarDatos();
function cargarDatos()
{
    list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
    list_usuario_estilo = JSON.parse(localStorage.getItem("list_usuario_estilo"));
    console.log(list_usuario)
    for (var i = 0; i < list_usuario.length; i++) 
        {
          resultado_user_list[0].innerHTML+='<a class="list-group-item list-group-item-action">'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class='+list_usuario_estilo[i]+'>'+'</i>'+'</span>'+'</a>'+'</div>'
        }
}
//cambiar lista estilo
const parent = document.querySelector("#parent");
    parent.addEventListener('click', (e) => 
    {   
        var class_name = e.target.childNodes[1].childNodes;
        console.log(class_name);
        for (let opcion of  class_name) 
        {
            opcion.classList.toggle('bi-check-lg');
            opcion.classList.toggle('bi-x-lg');
        }
        //guardar estilo
        recogerClases = parent.childNodes[1].childNodes;
        list_usuario_estilo =[];
        for (var i = 1; i < recogerClases.length  ; i++) 
        {
        
            list_usuario_estilo.push(recogerClases[i].childNodes[1].childNodes[0].className); 
        }
        //console.log(parent.childNodes[1].childNodes[1].childNodes[1].childNodes[0].className);
        console.log(list_usuario_estilo);
        localStorage.setItem("list_usuario_estilo", JSON.stringify(list_usuario_estilo)); 
    });
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

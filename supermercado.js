var buscar = document.getElementById('buscar');
var busqueda = document.getElementById('busqueda');

busqueda.addEventListener("click", supermercado);

function supermercado(){
  var ul = document.getElementById('superLista');
  var li = document.createElement('li');
  var btn = document.createElement('button');

  superLista.appendChild(li);
  superLista.appendChild(btn);
  li.innerHTML = buscar.value;
}
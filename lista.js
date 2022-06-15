//cargar llos datos
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
//
//cargar llos datos
var list_usuario = [];
var list_usuario_estilo = [];
var recogerClases="";


const resultado_user_list = document.querySelectorAll('.resultado_user_list');
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
        list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
        //console.log(document.getElementsByClassName(e.target.childNodes[1].childNodes[0].className));
        //var class_name = document.getElementsByClassName(e.target.childNodes[1].childNodes[0].className);
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



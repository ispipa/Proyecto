validarDatos();
  //limpiar el arrray object
  function cleanArray(actual) 
  {
      var newArray = [];
      for (var i = 0; i < actual.length; i++) 
      { 
              if (actual[i]) {
                  newArray.push(actual[i]);
                }
      }
      console.log(newArray);
      return newArray;
  }
function validarDatos()
{
    (function () {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('click', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()
}
//section coger la lista del usuario
const form_usuario = document.querySelector('.user_list');
const button_add_list = document.querySelector('.user_botton');
const resultado_user_list = document.querySelectorAll('.resultado_user_list');

console.log(resultado_user_list);

//lista de usuario
var list_usuario = [];
var list_usuario_estilo = [];
var recogerClases = "";

const cogerDatosList = () =>
{
    const texto = form_usuario.value.toLowerCase();
    if(texto)
    {
        resultado_user_list[0].innerHTML = '';
        resultado_user_list[1].innerHTML = '';
        list_usuario.push(texto);
        list_usuario_estilo.push('bi-x-lg');
        console.log(list_usuario.length);
        for (var i = 0; i < list_usuario.length; i++) 
            {
                resultado_user_list[1].innerHTML+='<a class="list-group-item list-group-item-action" onclick=delete_list()>'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class="bi-x-lg"></i></span>'+'</a>'+'</div>'
            }
    }
    else
    {
        alert("añade un producto a tu lista");
        console.log(list_usuario);
       
    }
    cleanArray(list_usuario);
    cleanArray(list_usuario_estilo);
    guardarDatos();
}
button_add_list.addEventListener('click',cogerDatosList)
function guardarDatos()
{
        localStorage.setItem("list_usuario", JSON.stringify(list_usuario));
        localStorage.setItem("list_usuario_estilo", JSON.stringify(list_usuario_estilo));  
}
if(localStorage.getItem("list_usuario") !== null)
    {
        list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
        list_usuario_estilo = JSON.parse(localStorage.getItem("list_usuario_estilo"));
        console.log(list_usuario)
        for (var i = 0; i < list_usuario.length; i++) 
            {
                resultado_user_list[1].innerHTML+='<a class="list-group-item list-group-item-action">'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class='+list_usuario_estilo[i]+'>'+'</i>'+'</span>'+'</a>'+'</div>'
            }
    }
    //eliminar un elemento del localsotorage y eliminar  un elemento de la lista
    const parent = document.querySelector("#parent");
    parent.addEventListener('click', (e) => 
    {   
        if (confirm("¿Desea eliminar el producto de tu lista?")) 
        {
            var items = JSON.parse(localStorage.getItem("list_usuario"));
            var items2 = JSON.parse(localStorage.getItem("list_usuario_estilo"));
            var text_list = e.target.textContent;
            console.log(text_list);
            console.log(e.target);
            e.target.remove(e.target);
            for (var i =0; i < items.length; i++) 
            {
                if (items[i].indexOf(text_list) !== -1) 
                {
                    items.splice(i, 1);
                    items2.splice(i, 1);
                }
                if (list_usuario[i].indexOf(text_list) !== -1) 
                {
                    list_usuario.splice(i, 1);
                    list_usuario_estilo.splice(i, 1);
                }
            }
            console.log(list_usuario);
            items = JSON.stringify(items);
            items2 = JSON.stringify(items2);
            localStorage.setItem("list_usuario", items);
            localStorage.setItem("list_usuario_estilo", items2);
        }
    });
    
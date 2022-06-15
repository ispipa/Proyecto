response();
function response()
{
    window.addEventListener('load', () => {
        fetch('https://ispipa.github.io/Proyecto/supermercados.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            pintarResultado(data);
        })
    })
}

validarDatos();
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
const supermercados =
    {
        dia :{
                    0:{
                        nombre:"Ensalada veggie tarrina 200grs",
                        url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                    1:{
                        nombre:"ensalada thai tarrina 200grs",
                        url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                        precio:"1,75€",
                        categoria:"platos_preparados"
                    },
                   
            },
    }
    //cambiar a partir de aqui
      
//convertir el Objeto a Json javasicript
var json = JSON.stringify(supermercados);
console.log(json);
//contenedor de los datos
var nombre = [];
var categorias_productos_nombre = [];
var categorias_productos_img = [];
var categorias_productos_precio = [];
var categorias_productos = [];
var lista_de_comprar_usuario = [];
//coger los valores del usuario
const formulario = document.querySelector('#validationCustom01');
const resultado = document.querySelector('#resultado')

//pintarResultado(supermercados);
function pintarResultado(data)
{
    console.log(data);
    for(let producto of Object.values(data))
    {
            nombre.push(producto);
    }
    console.log(nombre);
    filtrar();
}
      const filtrar = ()=>
      {
        for (var i = 0; i < nombre.length; i++) 
        {
            for (var j = 0; j < nombre.length; j++)
                {
                    //nombre del producto
                    categorias_productos_nombre.push(nombre[i].categorias.platos_preparados[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.despensa[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.mascotas[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bebe[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_para_el_hogar[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_personal[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.frutas_y_verduras[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.cuidado_para_el_hogar[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bebidas[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.bodega[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.congelados[j].nombre.toLowerCase());
                    categorias_productos_nombre.push(nombre[i].categorias.refrigerados[j].nombre.toLowerCase());
                    //imagen del producto
                    categorias_productos_img.push(nombre[i].categorias.platos_preparados[j].url);
                    categorias_productos_img.push(nombre[i].categorias.despensa[j].url);
                    categorias_productos_img.push(nombre[i].categorias.mascotas[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bebe[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_para_el_hogar[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_personal[j].url);
                    categorias_productos_img.push(nombre[i].categorias.frutas_y_verduras[j].url);
                    categorias_productos_img.push(nombre[i].categorias.cuidado_para_el_hogar[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bebidas[j].url);
                    categorias_productos_img.push(nombre[i].categorias.bodega[j].url);
                    categorias_productos_img.push(nombre[i].categorias.congelados[j].url);
                    categorias_productos_img.push(nombre[i].categorias.refrigerados[j].url);
                    //precio del producto
                    categorias_productos_precio.push(nombre[i].categorias.platos_preparados[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.despensa[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.mascotas[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bebe[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_para_el_hogar[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_personal[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.frutas_y_verduras[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.cuidado_para_el_hogar[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bebidas[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.bodega[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.congelados[j].precio.toLowerCase());
                    categorias_productos_precio.push(nombre[i].categorias.refrigerados[j].precio.toLowerCase());
                    //categoria del producto
                    categorias_productos.push(nombre[i].categorias.platos_preparados[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.despensa[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.mascotas[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bebe[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_para_el_hogar[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_personal[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.frutas_y_verduras[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.cuidado_para_el_hogar[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bebidas[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.bodega[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.congelados[j].categoria.toLowerCase());
                    categorias_productos.push(nombre[i].categorias.refrigerados[j].categoria.toLowerCase());
        
                    if(nombre[i].categorias.carniceria[j] && nombre[i].categorias.charcuteria[j] && nombre[i].categorias.pescaderia[j])
                    {
                        //nombre del producto
                        categorias_productos_nombre.push(nombre[i].categorias.carniceria[j].nombre.toLowerCase());
                        categorias_productos_nombre.push(nombre[i].categorias.charcuteria[j].nombre.toLowerCase());
                        categorias_productos_nombre.push(nombre[i].categorias.pescaderia[j].nombre.toLowerCase());
                        //imagen del producto
                        categorias_productos_img.push(nombre[i].categorias.carniceria[j].url);
                        categorias_productos_img.push(nombre[i].categorias.charcuteria[j].url);
                        categorias_productos_img.push(nombre[i].categorias.pescaderia[j].url);
                        //precio del producto
                        categorias_productos_precio.push(nombre[i].categorias.carniceria[j].precio.toLowerCase());
                        categorias_productos_precio.push(nombre[i].categorias.charcuteria[j].precio.toLowerCase());
                        categorias_productos_precio.push(nombre[i].categorias.pescaderia[j].precio.toLowerCase());
                        //categoria del producto
                        categorias_productos.push(nombre[i].categorias.carniceria[j].categoria.toLowerCase());
                        categorias_productos.push(nombre[i].categorias.charcuteria[j].categoria.toLowerCase());
                        categorias_productos.push(nombre[i].categorias.pescaderia[j].categoria.toLowerCase());
                    }
                }
        }
        cleanArray(categorias_productos_nombre);
        cleanArray(categorias_productos_img);
        cleanArray(categorias_productos_precio);
        cleanArray(categorias_productos);
    }
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
    const buscarDatos = ()=>
    {
        resultado.innerHTML = '';
        const texto = formulario.value.toLowerCase();
        console.log(texto);
        var cont = 0;
        console.log("estoy en buscar datos");
        console.log(categorias_productos_nombre.length);
        for (var i = 0; i < categorias_productos_nombre.length; i++) 
        {
            if((categorias_productos_nombre[i].indexOf(texto)!== -1) && (cont < 6))
            {
                resultado.innerHTML+='<div class="col" id='+categorias_productos[i]+'">'+'<div class="card h-100">'+'<img src='+categorias_productos_img[i]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+categorias_productos_nombre[i]+'</h5>'+'<p class="card-text">'+categorias_productos_precio[i]+ '</p>'+'</div>'+'<div class="card-footer">'+'<a href="#" class="btn btn-primary">'+'Comprar'+'</a>'+'</div>'+'</div>'+'</div>'
                cont++;
                console.log(cont);
            }
        }
        if( resultado.innerHTML === '' )
        {
            resultado.innerHTML+='<h1>Producto no encontrado</h1>'
        }
        else if(!texto)
        {
            resultado.innerHTML = '';
        }
    }
    //boton.addEventListener('click',filtrar)
    formulario.addEventListener('keyup',buscarDatos)

//section coger la lista del usuario
const form_usuario = document.querySelector('.user_list');
const button_add_list = document.querySelector('.user_botton');
const resultado_user_list = document.querySelectorAll('.resultado_user_list');

console.log(resultado_user_list);

//lista de usuario
var list_usuario = [];

const cogerDatosList = () =>
{
    const texto = form_usuario.value.toLowerCase();
    if(texto)
    {
        resultado_user_list[0].innerHTML = '';
        resultado_user_list[1].innerHTML = '';
        list_usuario.push(texto);
        console.log(list_usuario.length);
        for (var i = 0; i < list_usuario.length; i++) 
            {
                resultado_user_list[1].innerHTML+='<a class="list-group-item list-group-item-action" onclick=delete_list()>'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class="bi bi-check-lg"></i></span>'+'</a>'+'</div>'
            }
    }
    else
    {
        alert("añade un producto a tu lista");
        console.log(list_usuario);
       
    }
    cleanArray(list_usuario);
    guardarDatos();
}
button_add_list.addEventListener('click',cogerDatosList)
function guardarDatos()
{
        localStorage.setItem("list_usuario", JSON.stringify(list_usuario));  
}
if(localStorage.getItem("list_usuario") !== null)
    {
        list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
        console.log(list_usuario)
        for (var i = 0; i < list_usuario.length; i++) 
            {
                    resultado_user_list[1].innerHTML+='<a class="list-group-item list-group-item-action">'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class="bi bi-check-lg"></i></span>'+'</a>'+'</div>'
            }
    }
    //eliminar un elemento del localsotorage y eliminar  un elemento de la lista
    const parent = document.querySelector("#parent");
    parent.addEventListener('click', (e) => 
    {   
        var items = JSON.parse(localStorage.getItem("list_usuario"));
        var text_list = e.target.textContent;
        console.log(text_list);
        console.log(e.target);
        e.target.remove(e.target);
        for (var i =0; i < items.length; i++) 
        {
            if (items[i].indexOf(text_list) !== -1) 
            {
                items.splice(i, 1);
            }
            if (list_usuario[i].indexOf(text_list) !== -1) 
            {
                list_usuario.splice(i, 1);
            }
        }
        console.log(list_usuario);
        items = JSON.stringify(items);
        localStorage.setItem("list_usuario", items);
    });
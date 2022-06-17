//cargar los datos
var list_usuario = [];
var list_usuario_estilo = [];
var list_usuario_mercados = [];
var recogerClases="";
//nombres de los supermercados
var nombre_supermercado = [];
//cargar datos
const resultado_user_list = document.querySelectorAll('.resultado_user_list');
const resultado_user_list_supermercados = document.querySelector('.resultado_nombres_supermercado');
cargarDatos();
function cargarDatos()
{
    list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
    list_usuario_estilo = JSON.parse(localStorage.getItem("list_usuario_estilo"));
    list_usuario_mercados = JSON.parse(localStorage.getItem("list_usuario_mercados"));
    console.log(list_usuario)
    for (var i = 0; i < list_usuario.length; i++) 
        {
            resultado_user_list[0].innerHTML+='<a class="list-group-item list-group-item-action">'+'<i  class= "item_usuario">'+list_usuario[i]+'</i>'+'<span class="badge rounded-pill bg-primary float-end"><i class='+list_usuario_estilo[i]+'>'+'</i>'+'</span>'+'</a>'+'</div>'
        }
        cogerDatosSupermercados(list_usuario_mercados);
}

//cambiar lista estilo
const parent = document.querySelector("#parent");
    parent.addEventListener('click', (e) => 
    {   
        list_usuario = JSON.parse(localStorage.getItem("list_usuario"));
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
//section mercados y sus productos

//section buscar productos
response();
function response()
{
    window.addEventListener('load', () => {
        fetch('https://ispipa.github.io/Proyecto/supermercados.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cogerDatosProductos(data);
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
//coger datos supermercados
function cogerDatosSupermercados(data)
{
    console.log(typeof(data[0].supermercado));
        for(let producto of data)
        {
            nombre_supermercado.push(producto.supermercado);
        }
        cleanArray(nombre_supermercado);
    console.log(nombre_supermercado);
    pintarNombreSupermercados();
}
//pintamos los supermercados
function pintarNombreSupermercados()
{
    console.log(nombre_supermercado)
    for (var i = 0; i < nombre_supermercado.length; i++) 
            {
                resultado_user_list_supermercados.innerHTML+='<div class="form-check">'+'<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'+'<label class="form-check-label" for="flexCheckDefault">'+nombre_supermercado[i]+' </label>'+' </div>'
            }
}
//coger datos del Json
function cogerDatosProductos(data)
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
            if((categorias_productos_nombre[i].indexOf(texto)!== -1) && (cont < 8))
            {
                resultado.innerHTML+='<div data-aos="zoom-in-right" data-aos-delay=400  class="col" id='+categorias_productos[i]+'">'+'<div class="card h-100">'+'<img src='+categorias_productos_img[i]+' class="card-img-top" alt="...">'+'<div class="card-body">'+'<h5 class="card-title">'+categorias_productos_nombre[i]+'</h5>'+'<p class="card-text">'+categorias_productos_precio[i]+ '</p>'+'</div>'+'<div class="card-footer">'+'<a href="#" class="btn btn-primary">'+'Comprar'+'</a>'+'</div>'+'</div>'+'</div>'
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
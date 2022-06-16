//Variables

var btnAgregar = document.getElementById('btnAgregar');
var inputTexto = document.getElementById('inputTexto');
var tablaCompleta = document.getElementById('tablaCompleta');
var tablaSupers = document.getElementById("tablaSupermercados");
var supermercados = ["Dia", "Carrefour", "Lidl", "Alcampo", "Esclat", "AhorraMas", "Mercadona", "HiperCor", "El Corte Ingles", "Aldi"];

//Funciones

btnAgregar.addEventListener("click", function(){

    var texto = inputTexto.value;
    if(texto){
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td = document.createElement('td');
        var btn = document.createElement('button');
        var textoBtn = document.createTextNode("Eliminar");
        btn.appendChild(textoBtn);
        td.appendChild(btn);
        tr.appendChild(td);
        tablaCompleta.appendChild(tr);
        btn.innerHTML = "Eliminar";
    } else {
        alert(console.log("No hay nada"));
    }

    function eliminar(){
        tablaCompleta.removeChild(tr);
    }
});
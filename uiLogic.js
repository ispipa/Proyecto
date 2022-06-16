document.querySelector('#btnSaveMarket').addEventListener('click',saveMarket);
drawFriendsTable();


function saveMarket(){
 var  sSupermercado = document.querySelector('#supermercado').value,
 		sProducto = document.querySelector('#producto').value,
 		sPrecio = document.querySelector('#precio').value,
 		sCantidad = document.querySelector('#cantidad').value,
 		sImagen = document.querySelector('#imagen').value;

AddMarketToSystem(sSupermercado,sProducto,sPrecio,sCantidad,sImagen);
drawFriendsTable();
}
function drawFriendsTable()
{
 var list=getMarketList(),
 tbody=document.querySelector('#marketList tbody');
 tbody.innerHTML='';
 for(var i=0;i<list.length;i++){
   var row=tbody.insertRow(i);
   row.setAttribute("id",i);
   var supermercado=row.insertCell(0),
   producto=row.insertCell(1),
   precio=row.insertCell(2),
   cantidad=row.insertCell(3),
   imagen=row.insertCell(4),
   eliminar = row.insertCell(5)

    supermercado.innerHTML=list[i].supermercado;
    producto.innerHTML=list[i].producto;
    precio.innerHTML=list[i].precio;
    cantidad.innerHTML=list[i].cantidad;
    imagen.innerHTML=list[i].imagen;


    var inputSelect=document.createElement('Button');
    inputSelect.type='Button';
    inputSelect.innerText="Eliminar";
    inputSelect.setAttribute("class","btn btn-success");
    inputSelect.setAttribute("onclick","delete_row("+i+")");
    eliminar.appendChild(inputSelect);


   tbody.appendChild(row);
}
}
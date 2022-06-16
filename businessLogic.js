var marketList = [];

function AddMarketToSystem(psupermercado, pproducto, pprecio, pcantidad, pimagen) {

var newMarket = {
supermercado : psupermercado,
producto : pproducto,
precio : pprecio,
cantidad: pcantidad,
imagen : pimagen};

if (supermercado === "" || pproducto === "" || pprecio === "" || pcantidad === "") {
	alert("Por favor llene todos los campos, la imagen es opcional");
} else {
	console.log(newMarket);
	marketList.push(newMarket);
	guardarDatos(marketList);
}}

function getMarketList() 
{
	 var item = localStorage.getItem("list_usuario_mercados");
	if(item == null)
	{
		marketList = [];
	}
	else
	{
		marketList = JSON.parse(item);
	}
 	return marketList;
}
function guardarDatos(datos)
{
	localStorage.setItem("list_usuario_mercados",JSON.stringify(datos));
} 
function delete_row(index)
    {
		console.log(index);
        if (confirm("¿Desea eliminar el supermercado de tu tabla?"))
        {
        var items = JSON.parse(localStorage.getItem("list_usuario_mercados"));
		var fila = document.getElementById(index);
        console.log(items);
		console.log(marketList);
		console.log(fila);
		for (var i =0; i< items.length; i++) 
		{
				if (items[i] === items[index]) 
                {
                    items.splice(i, 1);

                }

				if (items[i] === items[index]) 
                {
					marketList.splice(i,1);

                }
        }
		console.log(items);
		console.log(marketList);
        items = JSON.stringify(items);
        localStorage.setItem("list_usuario_mercados", items);
		fila.remove();			
        }
    }

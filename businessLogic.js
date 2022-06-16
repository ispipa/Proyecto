var marketList = [];

function AddMarketToSystem(psupermercado, pproducto, pprecio, pcantidad, pimagen) {

var newMarket = {
supermercado : psupermercado,
producto : pproducto,
precio : pprecio,
cantidad: pcantidad,
imagen : pimagen
};
console.log(newMarket);
marketList.push(newMarket);
guardarDatos(marketList);
}

function getMarketList() 
{
	 
	if()
	{

	}
 	return marketList;
}
function guardarDatos(datos)
{
	localStorage.setItem("list_usuario_mercados",JSON.stringify(simdatos));
} 
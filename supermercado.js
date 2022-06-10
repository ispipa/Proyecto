function supermercado(){
    let input = document.getElementById("buscar").value;
    let busqueda = document.getElementById("busqueda");
    let ul = document.getElementById("listaSuper");
    let li = document.getElementById("itemLista");
    let supermercados = [""];

    for (let i = 0; i < supermercados.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(supermercados[i]));
        ul.appendChild(li);
    }
}
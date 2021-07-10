let productos=[
    {
        name:"producto1",
        precio:100.00
    },
    {
        name:"producto2",
        precio:80.00
    },
    {
        name:"producto3",
        precio:40.00
    },
    {
        name:"producto4",
        precio:94.00
    },
    {
        name:"producto5",
        precio:80.00
    },
    {
        name:"producto6",
        precio:40.00
    }
]

let objetos_en_carrito;


if(localStorage.getItem("productosCarrito")==null){
    // se ejecuta cuando no hay productos agregados
    objetos_en_carrito=[];

}else{
    // se ejecuta cuando si hay productos agregados
    objetos_en_carrito=JSON.parse(localStorage.getItem("productosCarrito"));
    pintarDetalleCarrito()
}


let temp="";
for(let [index,item] of productos.entries()){
temp=temp+`<div class="item">
<img src="https://via.placeholder.com/300x300" alt="">
<h2>${item.name}</h2>
<span>${item.precio}</span>
<span class="btn-agregar" onclick="agregar_carrito(${index})">Agregar al carrito</span>
</div>`
}
document.getElementById("listado").innerHTML=temp;

function agregar_carrito(indice){

    objetos_en_carrito.push(productos[indice]);
    localStorage.setItem("productosCarrito",JSON.stringify(objetos_en_carrito));
    pintarDetalleCarrito()
}

function pintarDetalleCarrito(){
    let temp="";
    for(let [indice,item] of objetos_en_carrito.entries()){
        temp=temp+`<div>${item.name} <strong>${item.precio}</strong><div><span onclick="eliminar(${indice})">Eliminar</span></div><br></div>`
    }
    document.getElementById("agregados").innerHTML=temp;
}

function eliminar(indice) {
    let arrg_temp = [];

    for (let [index, item] of objetos_en_carrito.entries()) {
        if (index != indice) {
            arrg_temp.push(item);
        }
    }

    objetos_en_carrito = arrg_temp;
    localStorage.setItem("productosCarrito",JSON.stringify(objetos_en_carrito));


    pintarDetalleCarrito();

}
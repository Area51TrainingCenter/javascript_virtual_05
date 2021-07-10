let obj=new Producto("Celular",40,10,"SKU0001",true);
//let obj=new Producto();

obj.nombre // Nombre
obj.precio // Precio
let igv=obj.obtener_igv()
console.log(igv)



if(obj.obtener_existencia()){

    pintarMensaje("Si hay estock disponbile para el producto 1","stock1")
}
else{
    pintarMensaje("Debes comprar neuvo stock para el producto 1","stock1")
}


console.log(obj.stock)
console.log(obj.estado)
/// vendemos 3 unidades
if(obj.realizar_venta(10)){
    pintarMensaje("Venta Realiza, Gracias","stock3")
}else{
    pintarMensaje("Hubo un error en la Venta, Stock no disponbile , actualmente solo contamos con "+obj.stock+" unidades disponibles","stock3")
}
console.log(obj.stock);
console.log(obj.estado)

let obj_neuvo=new Producto("Televisor",2990,10,"SKU0000",true);
//let obj=new Producto();

let igv_nuevo=obj_neuvo.obtener_igv()


if(obj_neuvo.obtener_existencia()){
    pintarMensaje("Si hay estock disponbile para el producto 2","stock2")
}
else{
    pintarMensaje("Debes comprar neuvo stock para el producto 2","stock2")
}



function pintarMensaje(mensaje,elemento){
    document.getElementById(elemento).innerHTML=mensaje;
}

/*
let texto=" asJuas asd asdasd asd as ssss     ";

let utilitario=new Util();

console.log(utilitario.limpiarEspacioEnBlanco(texto));
utilitario.limpiarFormulario(".formulario input");
utilitario.limpiarFormulario(".login input");
console.log(utilitario.obtenerFechaString());
*/
console.log(Util.obtenerFechaString());
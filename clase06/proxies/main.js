let producto={
    precio:0,
    nombre:"Producto1",
    sku:"sku0001"
}

console.log(producto.precio)

let handler={
    get(objeto,propiedad){  
       /*console.log(objeto)
        console.log(propiedad)*/
        return objeto[propiedad]
        
    },
    set(objeto,propiedad,value){
      
      if(propiedad=="precio"){
            if(typeof value=="number"){
            objeto[propiedad]=value;   
           }else{
               throw("El precio debe ser un numero no se soporta otro tipo de valor")
               // console.log("El precio debe ser un numero no se soporta otro tipo de valor")
           }
      }else if(propiedad=="nombre"){
         
         
        if(value.length>3){
            objeto[propiedad]=value;      
        }else{
            throw("El nombre debe tener mas de 3 digitos")
            // console.log("El nombre debe tener mas de 3 digitos")
        }
      }
    else {
        objeto[propiedad]=value;  
      }
      /**/
      //objeto[propiedad]=value;
    }
}


producto.precio // get
producto.precio=20 // set
let productoConProxie=new Proxy(producto,handler);

console.log(productoConProxie.precio); // GET 
console.log(productoConProxie.nombre); // GET 

productoConProxie.precio=50; // SET
productoConProxie.nombre="Nuevo producto";
console.log(productoConProxie.precio); // GET 
console.log(productoConProxie.nombre); // GET 

console.log(1+3);


// Persistencia continua 
localStorage


// Persistencia por session
sessionStorage

let numero1=1;
numero1=numero1+50;
console.log(numero1);


// obtengo un valor
/*
let codigo=sessionStorage.getItem("codigousuario");
console.log(codigo);

sessionStorage.setItem("codigousuario",1902);
sessionStorage.setItem("estadousuario","true")

codigo=sessionStorage.getItem("codigousuario");
console.log(codigo);
sessionStorage.setItem("codigousuario","c0009")
console.log(sessionStorage.getItem("codigousuario"));

sessionStorage.removeItem("codigousuario");

sessionStorage.clear();

sessionStorage.key("codigousuario");
*/

function crearNombre(){
    sessionStorage.setItem("nombre","Juan Carlos");

}
function crearCorreo(){
    sessionStorage.setItem("correo","jramos@gmail.com");
    
}
function limpiar(){
    sessionStorage.clear();
    
}
function ver_resultado(){
    console.log(sessionStorage.getItem("nombre"));
    console.log(sessionStorage.getItem("correo"));
    
}
//API document
let ele_titulo=document.getElementById("titulo");

//obtengo el valor del titulo
let texto_titulo=ele_titulo.innerText;
console.log(texto_titulo)

// actualizar el valor del título
//ele_titulo.innerText="Nuevo valor modificado por JS"

// manejo propiedades
//elemento.propiedad; // obtener
//elemento.propiedad="nuevo valor" // actualizar

function cambiarTitulo(){
    //console.log("le diste click al span cambiar título")
    ele_titulo.innerText="El Título acaba de ser modificado por JS"
}
function regresarTitulo(){
    //console.log("le diste click al span regresar título")
    ele_titulo.innerText=texto_titulo;
}
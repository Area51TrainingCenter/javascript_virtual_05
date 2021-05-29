console.log("manejo del DOM")

function tarea(){
    console.log("hizo click");
}

function tarea2(){
    console.log("hizo double click");
}
function tarea3(){
    console.log("hizo mouseover");
}

let ele=document.getElementById("elemento");
let ele2=document.getElementById("elemento2");

let caja=document.getElementById("caja")



// Propiedades
// innerText : acceder al contenidod de texto del  elemento seleccionado
// obtengo el valor de la propiedad innerText
let texto=ele.innerText;
console.log(texto)
// actualizando el valor de la propiedad
ele.innerText="<strong>Este valor fue modificado en la linea 24</strong>"



let html=ele2.innerHTML;
console.log(html);
ele2.innerHTML="<strong>elemento modificado en la linea 30</strong>"

//.innerHTML accede al contenido a nivel de HTML del elemento seleccionado




/*
.innerText
.innerHTML
.classList
.value

// metodos
.addEventeListener()
.add()
.remove()
*/





let objeto={
    nombre:"Diego"
}


// obtengo
objeto.nombre;

// actualizo
objeto.nombre="Juan Carlos"


function rojo(){
    console.log("debe cambiar el fondo por color rojo")
    caja.classList.add("fondo-rojo")
    caja.classList.remove("fondo-verde");
    //caja.classList.remove()
  /* let list=caja.classList
   console.log(list);
   console.log(list.value)
   list.value="caja-forma fondo-rojo"*/

    // obtener las clases asignadas al elemento
}
function verde(){
    caja.classList.add("fondo-verde");
    caja.classList.remove("fondo-rojo");
    /*let list=caja.classList
    console.log(list);
    console.log(list.value)
    list.value="caja-forma fondo-verde"
    console.log("debe cambiar el fondo por color verde")*/
}


let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let resultado=document.getElementById("resultado")
function sumar(){
    //.value sirve para obtener el valor del input seleccinoado
    let valor_num_1=num1.value;
    let valor_num_2=num2.value;
 
    let suma=parseInt(valor_num_1)+parseInt(valor_num_2);
    resultado.innerText="Resultado:" +suma;
}
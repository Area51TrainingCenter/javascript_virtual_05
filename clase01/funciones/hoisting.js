/*
HOISTING
let nombre;
var dato;

function sumar(){
    console.log("sumando numeros");
}
let resta;



*/



let nombre;
nombre="Jc"

dato=10;
console.log(dato);

sumar();


function sumar(){
    console.log("sumando numeros");
}

let resta=function(){
    console.log("restando numeros");
}


resta();


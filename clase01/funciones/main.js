/*sumar();
sumar();
resta(10,8)
resta(53,27)
resta(55,47)

suma(5,8,4)
suma(1,2,4)
suma(50,7,3)

igv(85)
igv(312564)
mostrarFecha()

igv_retorno(651)*/
// Estructura de una función
function sumar(/*decalaración parametros*/){
    /* ambito de funcion*/

    var num1=10;
    var num2=30;
    var suma=num1+num2;
    console.log(suma);
}

// funciona con parametros
function resta(a,b){
    let resta=a-b;
    console.log("|||||||||")
    console.log(resta);
}

function suma(a,b,c){
    let suma=a+b+c;
    console.log(":::::::::")
    console.log(suma)

}

function igv(monto){
    console.log("________")
    let igv=monto*0.18;
    console.log(igv)
}

function mostrarFecha(){
    console.log("22/05/2021");
}
function igv_retorno(monto){
    let igv=monto*0.18;
    return igv;
}


/** calculo de totales de compra **/
let sub_total=100;
let igv_;
let total_a_pagar;

igv_=igv_retorno(sub_total);//18
total_a_pagar=sub_total+igv_;
console.log(total_a_pagar);

parseInt("10") // 10

/*
let calcular=function(a,b){
    console.log(a*b);
}

function calcular(a,b){
    console.log(a*b);
}

calcular(6,5)

*/
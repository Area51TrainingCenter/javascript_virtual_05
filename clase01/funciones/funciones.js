/*funcion con parametro*/
function tarea1(par1){

}

/*funcion sin parametro*/
function tarea2(){

}

/*funcion con parametro sin retorno*/
function tarea3(par1){

}

/*funcion con parametro con retorno*/
function tarea4(par1){
    return true;
}

/*funcion sin parametro sin retorno*/
function tarea5(){

}
/*funcion sin parametro con retorno*/
function tarea6(){
 return true
}

/*
expresion de function
function nombre(){

}

asignacion 

let calc=function(){

}*/

// funcion de tipo flech:  ()=>{}
/*
let suma_flecha=(a,b)=>{
    return a+b;
}
*/

let suma_flecha=(a,b)=> a+b 

let igv_flecha= monto => monto*0.18
console.log(suma_flecha(15,8))
console.log(igv_flecha(50))
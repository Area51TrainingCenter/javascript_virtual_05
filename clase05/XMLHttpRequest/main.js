console.log("Linea1") // 10
console.log("Linea2") // 10
console.log("Linea3") // 20
console.log("Linea4") //10 
console.log("Linea5") //10
/*

let estado=consultarDNI() // 20

if(estado==true){
    console.log("Eres Mayor de edad")
}



let estado2=consultarDNI(); //20
console.log("Bienvenido a nuesrta plataforma") // ???*/
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
let objConsultar=new XMLHttpRequest();
let url="https://jsonplaceholder.typicode.com/users"
// GET 
// POST
// POST -> ACTUALIZAR  // UPDATE
// POST -> ELIMINAR  // DELETE

objConsultar.open("GET",url)
objConsultar.send()
/*console.log(objConsultar);
console.log(objConsultar.readyState)
objConsultar.responseText*/
objConsultar.onreadystatechange=function(){
    console.log(objConsultar.readyState)
    if(objConsultar.readyState==4){
        //console.log("MI PETICION TERMINO");
        //console.log(objConsultar.responseText)
       let respuesta=JSON.parse(objConsultar.responseText)
       console.log(respuesta);
       pintarHTML(respuesta);
       /*for(let item of respuesta){
           console.log(item.name)
       }*/
    }
    console.log("Cambio el estado de la propiedad readyState")
}





function pintarHTML(listado){
    let temp="";
    for(let item of listado){
        temp=temp+"<li>" + item.name+"</li>";
    }
    document.getElementById("nombres").innerHTML=temp;

}


console.log("BIEVENIDO")



function enviar(){
  /*  let nombre=document.getElementById("inp-nombre").value;
    let correo=document.getElementById("inp-correo").value;
    let mensaje=document.getElementById("inp-mensaje").value;
    
    // variable de datos que voy a enviar en una peticion
    let data={
        nombre,
        correo,
        mensaje
    }
    console.log(data);

    let datos=new FormData();
    datos.append("nombre",nombre)
    datos.append("correo",correo)
    datos.append("mensaje",mensaje)

    // varibale de datos que voy a enviar
    console.log(datos.get("nombre"));*/

    let form=document.getElementById("datosusuario");
    let datos=new FormData(form);
    console.log(datos.get("dni"));

    
}
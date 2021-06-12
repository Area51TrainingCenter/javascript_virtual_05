let nombre=document.getElementById("inp-nombre");
let correo=document.getElementById("inp-correo");
let telefono=document.getElementById("inp-telefono");
let facebook=document.getElementById("inp-facebook");
let registrar=document.getElementById("registrar");
let registro_usuarios=document.getElementById("registro_usuarios")
let busqueda_usuarios=document.getElementById("busqueda_usuarios")
let usuarios=[];
let arrg=[];
registrar.addEventListener("click",function(){
   
    let obj={
        nombre:nombre.value,
        correo:correo.value,
        telefono:telefono.value,
        facebook:facebook.value,
    }
    usuarios.push(obj);
    mostarUsuarios()
})

function mostarUsuarios(){
    let temp="";
    for(let [index,item] of usuarios.entries()){
 
       temp=temp+`<div>
                        <p>${item.nombre}</p>
                        <p>${item.correo}</p>
                        <p>${item.telefono}</p>
                        <p>${item.facebook}</p>
                        <button type="button" onclick="eliminar(${index})">Eliminar</button>
        
                   </div>`
    }

    registro_usuarios.innerHTML=temp;

}

function eliminar(indice_a_eliminar){
    let arreglo_temporal=[];
    //indice del elemento seleccionado

   // console.log(usuarios)
    for(let [index,item] of usuarios.entries()){
        //console.log(index)
        //console.log(item)
         /*if(index==indice_a_eliminar){
            // no se debe agregar el elemento al arreglo temporal
        }
        else{
            // si debo agregar el elemento al arreglo temporal
            arreglo_temporal.push(item);
        }*/
        if(index!=indice_a_eliminar){
            arreglo_temporal.push(item);
        }
        
        //if(index==)


    }
    usuarios=arreglo_temporal;

    mostarUsuarios()



   
}

let pruebas=[
    { nombre:"DieGo",
        correo:"Diego@gmail.com",
        telefono:"987987987",
        facebook:"asdasd"},
        { nombre:"Martin",
        correo:"Martin@gmail.com",
        telefono:"987987987",
        facebook:"asdasd"},
        { nombre:"Diego",
        correo:"Martin@gmail.com",
        telefono:"987987987",
        facebook:"asdasd"},
        { nombre:"Juan",
        correo:"Martin@gmail.com",
        telefono:"987987987",
        facebook:"asdasd"}

]

let nombre_buscar="Juan carlos";
let existe=nombre_buscar.includes("Juaa");
console.log("==========")
console.log(existe);
console.log("==========")

let buscar_palabra=document.getElementById("buscar_palabra");
let palabra=document.getElementById("busar-nombre");

palabra.addEventListener("keyup",function(){
    console.log(palabra.value)

    console.log(palabra.value.toLowerCase())
    let string="cadena";
    string.toLowerCase()
    console.log(":::::::")
    //console.log(pruebas);
    let item_encontrado;

    let items_encontrados=[];


    for(let [index,item] of usuarios.entries()){
    

        // Sirve para buscar la cadena completa
        /*if(item.nombre.toLowerCase()==palabra.value.toLowerCase()){
            items_encontrados.push(item);
           
        }*/
        // Sirve para buscar el texto como parte de la cadena
        if(item.nombre.toLowerCase().includes(palabra.value.toLowerCase())){
            items_encontrados.push(item);
        }else{

        }
        
    }
    console.log(items_encontrados);
    mostarUsuariosBusqueda(items_encontrados)



})

buscar_palabra.addEventListener("click",function(){
    console.log(":::::::")
    console.log(palabra.value.toLowerCase())
    let string="cadena";
    string.toLowerCase()
    console.log(":::::::")
    //console.log(pruebas);
    let item_encontrado;

    let items_encontrados=[];


    for(let [index,item] of usuarios.entries()){
    

        // Sirve para buscar la cadena completa
        /*if(item.nombre.toLowerCase()==palabra.value.toLowerCase()){
            items_encontrados.push(item);
           
        }*/
        // Sirve para buscar el texto como parte de la cadena
        if(item.nombre.toLowerCase().includes(palabra.value.toLowerCase())){
            items_encontrados.push(item);
        }else{

        }
        
    }
    console.log(items_encontrados);
    mostarUsuariosBusqueda(items_encontrados)
})

function buscador(){
    console.log(":::::::")
    console.log(palabra.value.toLowerCase())
    let string="cadena";
    string.toLowerCase()
    console.log(":::::::")
    //console.log(pruebas);
    let item_encontrado;

    let items_encontrados=[];


    for(let [index,item] of usuarios.entries()){
    

        // Sirve para buscar la cadena completa
        /*if(item.nombre.toLowerCase()==palabra.value.toLowerCase()){
            items_encontrados.push(item);
           
        }*/
        // Sirve para buscar el texto como parte de la cadena
        if(item.nombre.toLowerCase().includes(palabra.value.toLowerCase())){
            items_encontrados.push(item);
        }else{

        }
        
    }
    console.log(items_encontrados);
    mostarUsuariosBusqueda(items_encontrados)
}
function mostarUsuariosBusqueda(encontrados){
    let temp="";
    for(let [index,item] of encontrados.entries()){
 
       temp=temp+`<div>
                        <p>${item.nombre}</p>
                        <p>${item.correo}</p>
                        <p>${item.telefono}</p>
                        <p>${item.facebook}</p>
                        <button type="button" onclick="eliminar(${index})">Eliminar</button>
        
                   </div>`
    }

    busqueda_usuarios.innerHTML=temp;

}

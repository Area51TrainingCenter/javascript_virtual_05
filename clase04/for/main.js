
let arreglo=["Martin","Carlos","Diego",10]

let limite=arreglo.length;

for(let i=0;i<limite;i++){
    if(arreglo[i]=="Carlos"){
        console.log("carlos se encuentra en el indice")
        console.log(i)
    }
    console.log(arreglo[i]);
}

let persona={
    nombre:"Diego",
    edad:20,
    correo:"diego@gmail.com"
}

persona.nombre; // Diego
persona["nombre"] // Diego

// para recorrer arreglos
console.log(":::::")


/*for(let i=0;i<limite;i++){
    console.log(arreglo[i]);
}*/

for(let item of arreglo){
    console.log(item);
}
console.log("=========")

for(let [index,value] of arreglo.entries()){
    console.log(index)
    console.log(value)
}
/*
let persona={
    nombre:"Diego",
    edad:20,
    correo:"diego@gmail.com"
}
persona.nombre
persona["nombre"]
persona["edad"]
persona["correo"]

*/
console.log("///////")

for (let item in persona){
    console.log(item); 
    console.log(persona[item]);
    //console.log(persona["nombre"]);
}

let persona;
for(let pro in persona){
    if(pro=="rol"){
        let estado=persona.rol=="admin"
        if(estado){
            
        }
    }
}


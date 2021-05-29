console.log("Cargando desde JS")
let nombre="JUAN CARLOS";
let saldo=200.60;
let estado=true;


/** variables de tipo fecha **/
// Doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
let fecha="29/05/2021";
let nueva_fecha=new Date();

console.log("Día del mes: "+ nueva_fecha.getDate())
console.log("Mes :"+nueva_fecha.getMonth());
console.log("Año:"+ nueva_fecha.getFullYear());

console.log("Día Semana :"+nueva_fecha.getDay());

console.log("Horas: "+nueva_fecha.getHours())
console.log("Minutos: " + nueva_fecha.getMinutes())
console.log("Segundos: "+nueva_fecha.getSeconds())










/** Variable tipo Arreglo **/

listado_notas=[] // vacio;
// POS  1  2 3  4  5
notas=[10,20,15,10,20] // 5 elementos;
// IND  0  1 2  3  4
/*
console.log(listado_notas);
console.log(notas);
console.log(notas[0])
console.log(notas[1])
console.log(notas[2])
*/
/*console.log(notas[1])
/*console.log(notas[2])
/*console.log(notas[3])
/*console.log("la cantidad de elementos en el arreglo es:" + notas.length)

notas_nuevas=[5,10,5,10,20,999] 
/*console.log(notas_nuevas.length) //
let ind_ultimo=notas_nuevas.length-1;
/*console.log(ind_ultimo)


/*console.log(notas_nuevas);
console.log(notas_nuevas[0])
console.log(notas_nuevas[ind_ultimo])
*/


// agregar un elemento en un arreglo al final del arreglo
console.log(notas);
notas.push("nuevo valor")
notas.push(true)
console.log(notas)

// eliminar el ultimo elemento

notas.pop()
notas.pop()
notas.pop()
console.log(notas);

//agregar elemento al inicio del arreglo
notas.unshift("true");
notas.unshift(123);
notas.unshift(false);
console.log(notas);

// eliminar elemento del inicio del arreglo

notas.shift()
notas.shift()
notas.shift()
notas.shift()
notas.shift()
notas.shift()
console.log(notas);


// variable tipo objeto 
let nombre_cliente="";
let apellido_cliente="";
let correo="";
let telefono="";


let datos_cliente=["José","Perez","correo@gmail.com","987987987",true]

datos_cliente[0]
datos_cliente[2]

let cliente={
    nombre:"Juan",
    apellidos:"RT",
    correo:"correo@gmail.com",
    telefono:"123123123",
    estado:true,
    
}

console.log(cliente)
console.log(cliente.nombre)
console.log(cliente.apellidos)
console.log(cliente.correo)
console.log(cliente["telefono"])
console.log(cliente["estado"])

let cliente2 ={
    nombre:"Diego",
    apellidos:"RT",
    correo:"correo@gmail.com",
    telefono:"123123123",
    estado:true,
}
console.log(cliente2)
console.log(cliente2.nombre)
console.log(cliente2.apellidos)
console.log(cliente2.correo)




let cliente3 ={
    nombre:"Martin",
    apellidos:"RT",
    correo:"correo@gmail.com",
    telefono:"123123123",
    estado:true,
}



let listado_clientes=[cliente,cliente2,cliente3]
console.log(listado_clientes);
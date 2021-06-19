let usuario=["Juan Carlos", "jramos@gmail.com","987654321"]


let [ , ,telefono]=usuario;


console.log(telefono)
//t [name_complete,mail,phone]=["Juan Carlos", "jramos@gmail.com","987654321"];
/*
name_complete // Juan Carlos
mail // rjramos@gmail.com
phone // 97899879*/
/*
datos=["juan","carlos"]
datos.entries= [ [0,"juan"],[1,"Carlos"] ]

for(let item of datos){

}
for(let [index,item] of datos.entries()){
    [index,item]=[0,"juan"]
    console.log(index)

}*/
let usuario2=["Juan","Ramos","jramos@gmail.com","asd" ,"asd ","as", true]

registarUsuario(usuario2);


function registarUsuario([ , ,correo]){
    console.log(correo);
}
/*
[nombre,apellido] = usuario2
[nombre,apellido] =["Juan","Ramos","jramos@gmail.com"]
nombre="Juan"
apellido="ramos"
*/


let persona={
    nombre_persona:"Juan Carlos",
    correo:"jramos@gmail.com",
    pais:"Peru",
    dni:"4545451641"
}

let {pais,dni,correo}=persona;
console.log(pais)
console.log(dni)
console.log(correo)
let datos_persona={
    "nombre":"Diego",
    "edad":20,
    "telefono":"987897897",
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  registrarDatos(datos_persona)
function registrarDatos({nombre,edad,telefono}){
    console.log("se ha realizado un registro para:")
    console.log(nombre)
    console.log(edad)
    console.log(telefono)
}
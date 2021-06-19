objeto={
    nombre:"Juan Carlos",
    correo:"jramos@gmail.com",
    telefono:987987987
}
let arreglos;

arreglos=[
    {
        nombre:"Juan Carlos",
        correo:"jramos@gmail.com",
        telefono:987987987
    },
    {
        nombre:"Diego",
        correo:"jramos@gmail.com",
        telefono:987987987
    },
    {
        nombre:"Martins",
        correo:"jramos@gmail.com",
        telefono:987987987
    }
]
let nombre=["Juan","Diego","Martin"];
/*
for(let i=0;i<3;i++){
    console.log(arreglos[i].nombre)
}*/

for(let item of arreglos){
    console.log(item.nombre)
}
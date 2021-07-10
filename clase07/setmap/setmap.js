let datos=new Map()
datos.set("nombre","Juan Carlos");
datos.set("correo","jramos");
datos.set(1,"jramos");
for(let [index,item] of datos){
    console.log(index,item);
}


console.log(datos.size);

let obj={
    1:"codigo",
    nombre:"JC",
    correo:"jrmoas"
}

let data=new Set();
data.add("JC");
data.add("carlos")
data.add("Diego");
data.add("carlos")
data.add("Martin")
console.log(data);
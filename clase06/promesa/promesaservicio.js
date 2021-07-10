console.log("Tarea1")
let promesa=new Promise((resolve,reject)=>{
    let xhr=new XMLHttpRequest();
    let url="https://jsonplaceholder.typicode.com/users"
    xhr.open("GET",url)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                //Petición esta bien 
                // resolve();
                console.log(xhr)
                let respuesta=JSON.parse(xhr.responseText);
                let obj_respuesta={
                    estado:1,
                    payload:respuesta,
                    mensaje:"petición Exitosa"
                }
                resolve(obj_respuesta);
            }else{
                console.log("ERROR EN LA PETICION")
                let obj_respuesta={
                    estado:-1,
                    payload:[],
                    mensaje:"petición con error, revisa los datos de la petición"
                }
                reject(obj_respuesta);
                // Peticion esta mal
                //reject()
            }
        }
    }
})

promesa
.then((data)=>{
    if(data.estado==1){
        console.log(data.payload[0].name)

        
        

        
    }
})
.catch((data)=>{
    console.log("Se esta ejecutando el catch de la promesa")
    if(data.estado==-1){
        console.log(data.mensaje)
    }
})
console.log("Tarea2")
console.log("Tarea3")
console.log("Tarea4")
console.log("Tarea5")
console.log("Tarea6")
console.log("Tarea7")

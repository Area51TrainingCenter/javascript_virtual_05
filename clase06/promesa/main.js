let promise=new Promise((resolve,reject)=>{
    setTimeout(function(){
       let usuario=false;
       if(usuario){
            resolve("el usuario se regsitro de manera exitosa");
       }else{
            reject("Se encontro un ERROR, revisa tu codigo");
       }
    },500)
});

// se ejecuta cuando en la promesa se ejuecto el resolve
/*promise.then((data)=>{
    console.log(data)
    console.log("se ejecuta el then , por que en la promesa se ejecuto el resolve")
});

// se ejecuta cuando en la promesa se ejuecto el reject
promise.catch((data)=>{
    console.log(data);
   console.log("se ejecuta el catch, por que en la promesa se ejecuto el reject")
})
*/


promise.then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})






/*function promesa(exito,error){
    if(edad>20){
        exito()
    }else{
        error();
    }
}*/



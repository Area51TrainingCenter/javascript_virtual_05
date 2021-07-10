class Usuario{
    constructor(nombre,alias){
        this.nombre=nombre;
        this.alias=alias

    }
}
class Mensaje{
    constructor(mensaje,alias){
        let fecha=new Date();
        this.mensaje=mensaje;
        this.alias=alias;
        this.hora=fecha.getHours() + ":"+fecha.getMinutes()+":"+fecha.getSeconds();
        this.fecha=fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
    }
}

class DatabaseAcces{
    constructor(){
        // database -> Referencia a la BD que tienes en firebase
        this.db=firebase.database();
    }
    registrar(obj,ref){
        this.db.ref(ref).push(obj);
    }
    registrarUsuario(obj){
        let estado=this.db.ref("usuarios").push(obj)
        /*estado.then((data)=>{
           // console.log("Se ejecutado el then de  la grabacion")
           // console.log(data)
        })
        estado.catch((error)=>{
            console.log(error)
        })*/
        return estado;
    }
    registrarMensaje(obj){
        let mensaje=this.db.ref("chats").push(obj);
        return mensaje;
    }
    leerRegistro(ref){
        /*let usuarios=this.db.ref("usuarios")
        //usuario.on("value",(data)=>)
        //referencia.on("tipo de escucha","function que se ejecuta cada vez que cambia")
        usuarios.on("value",function(data){
          
            console.log(data.val());
        })*/
        return this.db.ref(ref);



    }
    printRefrencia(){
        console.log(this.db)
    }
}
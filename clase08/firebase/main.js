firebase.initializeApp(firebaseConfig);
let conexion=new DatabaseAcces();

if(localStorage.getItem("logeado")=="true"){
    cargarMensajeChat();
    cargarUsuarios();
}else{
    document.getElementById("modal-registro").classList.add("show-modal");
}



// Grabar mi objeto


/*setTimeout(function(){
    let caja_mensjaes=document.getElementById("mensajes-chat");
    caja_mensjaes.scrollTop=caja_mensjaes.scrollHeight
},3000)*/




/*
let data={
    estado:"1",
    correo:"asd",
    telefono:"wssdas"
}
for(let item in data){
    console.log(item)
    console.log(data[item])
}*/


/*
function validarAlias(nuevo_alias){
    let existe_alias=false;
    let data=conexion.db.ref("usuarios").get();
    data.then((data)=>{
       
        let contenido=data.val();
        for(let item in contenido){
            
              let alias_registrado=contenido[item].alias
              //console.log(alias_registrado)
              //console.log(alias_registrado)
              if(nuevo_alias==alias_registrado){
                  existe_alias=true;
                  console.log("ESE ALIAS YA SE ENCUENTRA REGISTRADO")
                  break;
              }
              else{
                existe_alias=false;
                console.log("ALIAS DISPONIBLE")
              }

        }
        return existe_alias;
        
    })


    return existe_alias;
}*/
async function validarAlias(nuevo_alias){
    let data=conexion.db.ref("usuarios").get();
    let estado= await data.then((data)=>{
        let contenido=data.val();
        for(let item in contenido){
            
              let alias_registrado=contenido[item].alias
              //console.log(alias_registrado)
              //console.log(alias_registrado)
              if(nuevo_alias==alias_registrado){
                  existe_alias=true;
                 // console.log("ESE ALIAS YA SE ENCUENTRA REGISTRADO")
                  break;
              }
              else{
                existe_alias=false;
               // console.log("ALIAS DISPONIBLE")
              }

        }
        return existe_alias;
    })
    return estado;
}


function cargarUsuarios(){
    let nodoRegistro=conexion.leerRegistro("usuarios");
    nodoRegistro.on("value",function(data){
        let contenido=data.val();
        ListarUsuarios(contenido)
    })

}
function ListarUsuarios(data){
    let temp=""
    let usuario=new Usuario();
    usuario=JSON.parse(localStorage.getItem("usuario"));

    
    for(let item in data){
        let obj=data[item]
            if(usuario.alias==obj.alias){
                temp=temp+`<li  class="list-group-item mi-usuario">${obj.nombre} (${obj.alias})</li>`
           }else
            {   
                temp=temp+`<li  class="list-group-item">${obj.nombre} (${obj.alias})</li>`
            }
         
    }
    document.getElementById("listado-usuario").innerHTML=temp;
}


function regitrarAlias(){
    let nombre=document.getElementById("inp-nombre").value;
    let alias=document.getElementById("inp-alias").value;
    
    //Prepare mi objeto
    let obj_usuario=new Usuario();
    obj_usuario.nombre=nombre;
    obj_usuario.alias=alias;
    let consulta=validarAlias(obj_usuario.alias)
    consulta.then((data)=>{
        if(data){
            //el Alias ya existe
            document.getElementById("mensaje-validacion").innerHTML=`<div class="alert alert-danger" role="alert">
                El Alias ya se encuentr registrado
            </div>`
            console.log("El Alias ya se encuentra registrado")
        }
        else{
            // Grabar mi objeto
            conexion.registrarUsuario(obj_usuario)
            .then((data)=>{
                localStorage.setItem("logeado",true);
                localStorage.setItem("usuario",JSON.stringify(obj_usuario));
                document.getElementById("modal-registro").classList.remove("show-modal")
                cargarMensajeChat();
                cargarUsuarios();
                document.getElementById("mensaje-validacion").innerHTML=``;
            
            })
            .catch((error)=>{})
        }
    })

    

}

function enviarMensaje(){
    let usuario=new Usuario();
    usuario=JSON.parse(localStorage.getItem("usuario"));
    let mensaje=document.getElementById("inp-mensaje").value;

    let obj_mensaje=new Mensaje(mensaje,usuario.alias);
 
    conexion.registrarMensaje(obj_mensaje)
    .then((data)=>{        
        document.getElementById("inp-mensaje").value="";
        console.log(data)
    })
    .catch((error)=>{})

}


function cargarMensajeChat(){
    let mensajesChat=conexion.leerRegistro("chats");
    mensajesChat.on("value",function(data){
        let contenido=data.val();
        let temp="";
        console.log(contenido);
        for(let item in contenido){
            let obj_mensaje=new Mensaje()
            obj_mensaje=contenido[item];
            temp=temp+`<div class="mensaje-item">
                            <h2 class="h6">${obj_mensaje.alias} (${obj_mensaje.fecha} - ${obj_mensaje.hora})</h2>
                            <p>${obj_mensaje.mensaje}</p>
                        </div>`;
        }
        let caja_mensjaes=document.getElementById("mensajes-chat");
        caja_mensjaes.innerHTML=temp;
        
     
        caja_mensjaes.scrollTop=caja_mensjaes.scrollHeight
        //caja_mensjaes.scrollTop=caja_mensjaes.scrollHeight;
   
        
    })
}

function cerrar_sesion(){
    //localStorage.setItem("logeado",false);
    localStorage.clear()
    window.location="index.html"
}
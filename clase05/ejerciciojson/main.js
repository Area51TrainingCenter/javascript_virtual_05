
cargarDataInicial();

let listado_actual;
let foto_sitio=document.getElementById("foto-sitio")
let nombre_sitio=document.getElementById("nombre-sitio")
let bloque_sitio=document.getElementById("sitio")
let bloque_listado=document.getElementById("bloque-listado");
function cargarDataInicial(){
    let xhr=new XMLHttpRequest();
    let url="https://sminnova.com/restapitrujillo/sitiosturisticos";
    xhr.open("GET",url)
    xhr.send()
    xhr.onreadystatechange=function(){
    
        if (xhr.readyState == 4) {
            if(xhr.status==200){
                let respuesta = JSON.parse(xhr.responseText);
              
                listado_actual=respuesta;
                pintarListado(respuesta)
            }
        }
    }


    

}

function pintarListado(listado){
    let temp=""
    for(let item of listado){
        temp=temp+`
        <div class="item" onclick="obtenerPorID(${item.id})">
            <img class="foto-miniatura" src="${item.foto_principal}" alt="">
            <div>
                <h2>${item.nombre}</h2>
            </div>
        </div>
        `
    }
    document.getElementById("listado").innerHTML=temp;

}

function filtar(id_categoria){
    let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/"+id_categoria;    
    console.log(url_categoria);
    
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url_categoria)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                let respuesta=JSON.parse(xhr.responseText);

                listado_actual=respuesta;
                pintarListado(respuesta);
            }
        }
    }

}


let inp_buscar=document.getElementById("inp-buscar-texto");


inp_buscar.addEventListener("keyup",function(){
    let listado_resultado_filtro=[]
    valor_a_buscar=inp_buscar.value.toLowerCase();
    for(let item of listado_actual){
        
        if(item.nombre.toLowerCase().includes(valor_a_buscar)){
            
            listado_resultado_filtro.push(item);
        }

        
        
    }
    console.log(listado_resultado_filtro)
    pintarListado(listado_resultado_filtro)
})

function obtenerPorID(id_sitio){
    console.log(id_sitio);
    let sitio_por_id="https://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id_sitio;
    let xhr=new XMLHttpRequest();
    xhr.open("GET",sitio_por_id)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                let respuesta=JSON.parse(xhr.responseText)
                console.log(respuesta[0])
                bloque_listado.classList.add("hide")
                sitio.classList.remove("hide");
                foto_sitio.setAttribute("src",respuesta[0].foto_principal);
                nombre_sitio.innerText=respuesta[0].nombre_en
            }
        }
    }

}

function regresar_listado(){
   bloque_listado.classList.remove("hide")
    bloque_sitio.classList.add("hide");
}
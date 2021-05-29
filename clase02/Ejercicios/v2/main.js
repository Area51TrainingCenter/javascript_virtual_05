let inp_monto_soles=document.getElementById("monto_soles");
let inp_monto_dolares=document.getElementById("monto_dolares");
let btn_cambiar_a_dolares=document.getElementById("cambiar-a-dolares");
let btn_cambiar_a_soles=document.getElementById("cambiar-a-soles");
let btn_limpiar=document.getElementById("btn-limpiar");
let texto_dolares=document.getElementById("texto_dolares");
let texto_soles=document.getElementById("texto_soles");
let btn_consultar=document.getElementById("consultar")
// addEventListener()

// DOC: https://developer.mozilla.org/es/docs/Web/Events

btn_cambiar_a_dolares.addEventListener("click",cambiarDolares);
btn_cambiar_a_dolares.addEventListener("mouseenter",function(){
    console.log("mouseenter en el boton cambiar a dolares")
})


btn_cambiar_a_soles.addEventListener("click",cambiarSoles);

btn_limpiar.addEventListener("click",limpiar)


function cambiarDolares(){
    let soles=inp_monto_soles.value;
    let dolares=soles/3.5;
    texto_dolares.innerText=parseFloat(dolares).toFixed(2)
}
function cambiarSoles(){
    let dolares=inp_monto_dolares.value;
    let soles=dolares*3.5;
    texto_soles.innerText=parseFloat(soles).toFixed(2);
}

function limpiar(){
    inp_monto_dolares.value=0;
    inp_monto_soles.value=0;
    texto_dolares.innerText="0.00"; 
    texto_soles.innerText="0.00";
}

function consultar(){
    btn_consultar.removeEventListener("click",consultar);
    console.log("click");
    setTimeout(function(){
        console.log("respuesta")
        btn_consultar.addEventListener("click",consultar)
    },5000)
}

btn_consultar.addEventListener("click",consultar)
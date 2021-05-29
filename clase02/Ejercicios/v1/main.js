let inp_monto_soles=document.getElementById("monto_soles");
let inp_monto_dolares=document.getElementById("monto_dolares");
let btn_cambiar_a_dolares=document.getElementById("cambiar-a-dolares");
let btn_cambiar_a_soles=document.getElementById("cambiar-a-soles");
let btn_limpiar=document.getElementById("btn-limpiar");
let texto_dolares=document.getElementById("texto_dolares");
let texto_soles=document.getElementById("texto_soles");



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
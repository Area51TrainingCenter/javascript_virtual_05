console.log("IF")

/*let edad=15;
let condicion=edad>18
*/
let edad = document.getElementById("edad");
let btn_val = document.getElementById("validar");
let span = document.getElementById("resp");
btn_val.addEventListener("click",validaredad);
function validaredad(){
    let edad_numero=parseInt(edad.value)
    console.log(edad)
    if(edad_numero>=18){
        span.innerHTML="ES APTO";
    }else{
        span.innerHTML="NO ES APTO";
    }
}

edad=5;
nombre="JC";
if(edad>18 || nombre=="JC"){
    //console.log("Bienvenido Usuario")
    console.log("APTO")
    // se ejecuta cuando la condiciones es verdadera
}else{
    console.log("NO APTO")
    //console.log("No puedes acceder al sitio web")
// se ejecuta cuando la condiciones es Falsa
}
/*
let usuario="MARTIN";
let pass="456"

if(usuario=="JC" && pass=="1234"){
    // Bienvenido 
}
else{
    // Datos incorrectos
}


if(usuraio=="JC"){ 
    // el usuario es JC
    if(pass=="1234"){
     // el usuario y la contrasña son correctos
    }else{
     //  la contrasña NO es correcta
    }
}
else{
    //el usuario no es correcto

}*/


let a 
let b 
let c
//el mayor de 3 numeros

if(a>b){
    // a es mayor que B
    if(a>c){
        // a es mayor que C 
        // a el mayor de los 3 numeros
    }else{
        // es que C es el mayor de los 3 numeros
    }


}else{
    //b es mayor que a
    if (b>c){
        // b es el mayor de los 3 Numeros
    }
    else{
        // c es el mayor de los 3 numeros
    }
}


edad=30
/*
niño (0-12)
adoslescente (12-19)
adulto (19-45)
adulto Mayor (45 - a más)
*/

if(edad<=12){
 // NIÑO
}
else{
    // 13 para arriba
    if(edad<=19){
        // Adolescente
    }else{
        //20 para arriba
        if(edad<=45){
            //Adulto
        }
        else{
            // Adulto Mayor
        }
    }


}

if(codicion){
    // True
}
else{

}




if(edad<12){
 //
}
else if(edad<25){

}
else if(edad<35){

} 
else if(edad<45){
    
}
else{
//
}
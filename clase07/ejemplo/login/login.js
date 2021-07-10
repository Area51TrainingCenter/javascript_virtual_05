/*user=="admin"
pass="123";

continuar a la pagina bienvenido
*/
console.log(true);
console.log(sessionStorage.getItem("logueado"));

if(sessionStorage.getItem("logueado")==="true"){
    window.location="bienvenido.html"
}
function login(){
    console.log("login")
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    if(user=="admin" && pass=="123"){
       // console.log("debe continuar")
       sessionStorage.setItem("logueado",true);
        window.location="bienvenido.html"
    }
    else{
        console.log("acceso no permitdo")
    }
}
console.log("conociendo el while")
/*
let edad=10;
let estado=edad<18

ind=0;
while(estado){
    console.log("es mayor de edad")
    if(ind==3){
        estado=false;
    }
    
    ind++

}

for(let i=0;i<10;i++){

}

prompt("ingresa tu usuario")
prompt("ingresa tu paswordd")

admin
1234
*/

let user = prompt("ingrese el usuario:");
let pass = prompt("Ingrese la contraseña:");
let ind = 0;

while (ind<3) {
    if (user == "admin" && pass == "1234") {
        console.log("Ingreso correcto");
    } else {
        user = prompt("ingrese el usuario:");
        pass = prompt("Ingrese la contraseña:");
    }
    ind++;
}

var numero=5;
console.log(numero);
ambito1();
ambito2();






function ambito1(){
    var numero1=10;
    //numeroInterno=0;
    //var numero=50;
    //var numero2=200;
    //console.log(numero1);
    //console.log(numero2);
    console.log(numero)
    if(true){
        var numeroInterno=-1;
       // console.log(numeroInterno)
    }else{
        var numeroInterno=20
        //console.log(numeroInterno)
    }
    console.log(":::::::::::");
    console.log(numeroInterno);
}

function ambito2(){
    var numero1=100;
    var numero=200;
   // var numero2=20;
    //console.log(numero2)
    //console.log(numero1)
    console.log(numero)
}
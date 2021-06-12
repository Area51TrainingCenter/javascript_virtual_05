console.log("Conociendo Swtich");
// M T N
let valor="1";


switch(valor){
    case "M":
    case "m":
    case 1:
    case "1":        
        //
        descuento=10;
        break;
    
    case "T":
    case "t":
    case 2:
        //
        descuento=20;
        break;
    case "N":
    case "n":
    case 1:
        descuento=30;
        break;
    
    default:
        descuento="Valor ingresado no valido";
        break
}

console.log(descuento);

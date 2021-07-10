/*
Clase Producto:
nombre: Sring 
precio: Double
stock: Int 

realizar_venta(){} 
Devuelve un booleano TRUE en caso la venta se haya realizado 
Devuelve un booleano FALSE en caso la venta NO se haya realizado
*/
class Producto{
    constructor(nombre="",precio=0.0,stock=0,sku="",estado=false,umbral_existencia=5){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
        this.sku=sku;
        this.estado=estado;
        this.umbral_existencia=umbral_existencia;
    }
    obtener_igv(){
        return (this.precio*0.18).toFixed(2);
    }
    obtener_stock(){
        return this.stock;
    }
    actualizar_stock(numero){
        this.stock=numero;
        // 
        return this.stock

    }
    realizar_venta(cantidad_a_vender){
        let estado_venta;
        if(this.stock>=cantidad_a_vender){
            this.stock=this.stock-cantidad_a_vender;

            /* if(this.stock==0){
                return false
            }
            else{
                return true
            } */
            this.estado= (this.stock==0 ? false : true);


            estado_venta=true;
        }
        else{
            estado_venta=false;
        }
        return estado_venta;

    }
    obtener_existencia(){
        let estado_existencia;

        if(this.stock>this.umbral_existencia){
            estado_existencia=true;
        }
        else{
           estado_existencia=false;
        }

        return estado_existencia;
    }


}

class Util{
    constructor(){
        this.version="V1",
        this.author="JCRT"
    }
    static limpiarEspacioEnBlanco(valor){
        return valor.trim();
    }
    static limpiarFormulario(formulario){
      
        let inputs=document.querySelectorAll(formulario)
        
        for(let item of inputs){
            console.log(item.value="");
        }

    }
    static obtenerFechaString(){
        let date=new Date();
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
    }
}
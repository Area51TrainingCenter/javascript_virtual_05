console.log("FOR");




for(let i=1;i<=12;i++){
    for(let a=1;a<=12;a++){
        let resp = i*a;
        console.log(i+" * "+a+" = "+resp);
    }
    console.log("--------------");
}


let datos=["Luis",
            "Martín",   
            "Carlos", 
            "Diego", 
            "Milagros",
            "Milagros"]
            datos.length; // cantidad total de elementos == Posc del ultimo elemneto
console.log(datos);
datos[0]
datos[1]
datos[2]
datos[3]
datos[4]

for(let i=0;i<datos.length;i++){
    console.log(i)
    console.log(datos[i])
}

let list_items=[];

let inp_agregar=document.getElementById("inp_agregar");
let inp_item=document.getElementById("inp_item");
let listado=document.getElementById("listado");
/*inp_agregar.addEventListener("click",agregar)
function agregar(){

}*/

inp_agregar.addEventListener("click",function(){
    let valor=inp_item.value;
    list_items.push(valor);
  //  console.log(list_items);
    inp_item.value="";
})

function ver_items(){
    //console.log(list_items)  
    let temp="";
    for(let i=0;i<list_items.length;i++){
       
        
        temp=temp+"<li onclick='elemento("+i+")'>"+list_items[i]+"</li>";
        
    }  
    
    listado.innerHTML=temp;

   

}
function elemento(ind){
    console.log(ind)
    
    if(ind==0){
        alert("hizo click en el primer elemento")
    }else if(ind==1){
        alert("1er elemento")
    }
    else{
        console.log("hizo click en el elemento")
    }

}
/*let item=document.getElementById("item")
item.addEventListener("click",function(){
    console.log("le dio click")
})*/


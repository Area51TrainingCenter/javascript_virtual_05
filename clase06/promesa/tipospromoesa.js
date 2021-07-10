
let consultarDNI=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let resp={
            promesa:"consultarDNI",
            value:"Dni VALIDO"
        }
        resolve(resp);
    },1500)
})

let consultarEstadoFinanciero=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let resp={
            promesa:"consultarEstadoFinanciero",
            value:"ESTADO FINANCIERO VALIDO"
        }
        resolve(resp);
    },2000)
})
let consultarEstadoCivil=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("SOLTERO");
    },5000)
})

/*
Promise.all([consultarDNI,consultarEstadoFinanciero,consultarEstadoCivil])
.then((data)=>{
    console.log(data);
    console.log("Terminaron de ejectuarse todoas las promesa")
}).catch((data)=>{
    console.log(data)
    console.log("SE ENCONTRO UN ERROR EN LA EJECUTACION")
})*/


Promise.race([consultarDNI,consultarEstadoFinanciero,consultarEstadoCivil])
.then((data)=>{
    console.log(data);
    console.log("Tenemos una promesa que acabo más rapido")
}).catch((data)=>{
    console.log(data)
    console.log("SE ENCONTRO UN ERROR EN LA EJECUTACION")
})


/*

let consultarDNI=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve();
    },3000)
}).then(()=>{
    let consultarEstadoFinanciero=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve();
        },2000)
    }).then(()=>{
        let consultarEstadoCivil=new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve();
            },5000)
        }).then(()=>{
            console.log("Se ejeceuta then Promesa 3")
            console.log("Termine de consultar los 3 valores ,ahora puedo continuar")
        }).catch(()=>{
            console.log("se eejecuta cathc de promesa 3")
        })
    }).catch(()=>{
        console.log("se eejecuta cathc de promesa 2")
    })
    
    
  
}).catch(()=>{
    console.log("se eejecuta cathc de promesa 1")
})


*/
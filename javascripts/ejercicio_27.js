function ejecutar_27(){
    debugger
    //ENTRADA
    const clientes = [[2,1000] , [3,1500] , [1,2000] , [4,1000]] //arreglo con los datos del cliente
    //PROCESO
    for (let i=0 ; i < clientes.length ; i++) { //Ciclo con for 
        let tipoTarjeta=clientes[i][0] //se extrae el valor del tipo de la tarjeta
        let credito=clientes [i][1] //se extrae el valor del credito
        if (tipoTarjeta===1){ //condicion para asignar el limite de credito
          let  limite = 25
        } else if (tipoTarjeta===2){
           let limite = 35
        } else if (tipoTarjeta===3){
           let limite = 40
        } else {
           let limite = 50
        }
        let total = (limite/100)*clientes[i][2] //proceso para el valor del incremento
        let nuevo_credito = total + clientes[i][2] //formula para generar el nuevo credito
        //SALIDA : Se muestra los datos del cliente 
        console.log(`Cliente ${i+1} :`)
        console.log(`El tipo de tarjeta es : ${tipoTarjeta}`)
        console.log(`Credito Actual : ${credito} `)
        console.log(`El limite de la tarjeta es : ${limite}%`)
        console.log(`El nuevo credito es : ${nuevo_credito}`)
    }
}


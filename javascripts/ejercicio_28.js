//COSTO DE PAQUETE CON ARREGLO
function ejecutar_28(){
    debugger;
    const paquetes=[[4 ,"Europa"] ,[6 , " asia" ]]      //TENEMOS UN ARREGLO Y PARA LLAMAR EL ARRREGLO ES
    //                  0               1
    //               0      1       0       1
    let paquete1=paquetes[0][0];                    //LOS DOS ARREGLOS LOS PONEMOS EN UNA VARIABLE 
    let paquete2=paquetes[1][0];
    const kilo=30                                       //ABRIMOS UNA CONDICIONAL PORQUE NO ES NECESARIO ABRIR UN CICLO
    if(paquete1>=1 && paquete1<6){
        total=paquetes[0][0]*kilo
        console.log(`Su paquete va dirijido a ${paquetes[0][1]} con un peso de ${paquetes[0][0]}kg y un costo de ${total}$ `)
    }else {
        console.log("El peso del paquete es incorrecto")                //HACEMOS CALCULO MATEMATICO PARA LOS DOS CASOS Y PRESENTAMOS 
    }
    if (paquete2>=1 && paquete2<6){
        total=paquetes[1][0]*kilo
        console.log(`Su paquete va dirijido a ${paquetes[1][1]}con un peso de ${paquetes[1][0]}kg y un costo de ${total}$ `)
    } else {
        console.log("El peso del paquete es incorrecto")
    } 
}







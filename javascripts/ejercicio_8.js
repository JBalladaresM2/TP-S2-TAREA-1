//COSTO DE PAQUETE
function ejecutar_8(){
    debugger;
    let peso;                           //INGRESAMOS LAS VARIABLES Y ABRIMOS UN PROMPT DE DONDE SE ENVIARAN LOS PAQUETES
    let destino;
    const valor = 30;
    destino=prompt("Ingrese el destino del paquete (Nacional o internacional)")     //EL VALOR YA ESTA PUESTO Y SOLAMENTE ABRIA QUE INGRESAR EL PESO 
    peso=parseInt(prompt("Ingrese el peso del paquete en kg"))
    if (peso<=5){
        total=valor*peso                                                                              //CALCULAMOS Y PRESENTAMOS
        console.log(`Su paquete se dirige a ${destino} con un peso de ${peso}kg ,  el precio po kg es de ${valor}$ y el costo es de ${total} dolares `)
    } else if (peso>5){
        console.log(`Su paquete excede el peso permitido`)
    }
}

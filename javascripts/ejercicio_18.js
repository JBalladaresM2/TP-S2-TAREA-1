//COSTO DE PAQUETE CON WHILE
function ejecutar_18(){
    debugger;
    let peso;                           //INGRESAMOS LAS VARIABLES Y ABRIMOS UN PROMPT DE DONDE SE ENVIARAN LOS PAQUETES
    let destino;
    const valor=30;
    destino=prompt("Ingrese el destino del paquete (Nacional o internacional)")     //EL VALOR YA ESTA PUESTO Y SOLAMENTE ABRIA QUE INGRESAR EL PESO 
    let n=parseInt(prompt("Ingrese las veces que va a realizar un pedido"))
    let c=1                                                                         //CREAMOS UN WHILE Y HACEMOS EL BUCLE 
    while(c<n){
        peso=parseInt(prompt("Ingrese el peso del paquete en kg"))
        if (peso<5){
            total=valor*peso                                                                              //CALCULAMOS Y PRESENTAMOS
            console.log(`Su paquete se dirige a ${destino} con un peso de ${peso}kg ,  el precio por kg es de ${valor}$ y el costo es de ${total} dolares `)
        } else if (peso>5){
            console.log(`Su paquete excede el peso permitido`)
        }
        c++;
    }
}
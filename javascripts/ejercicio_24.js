function ejecutar_24(){
    //ENTRADA
    let tarifa, costo_total, costo_persona , minimo , personas //se generan las variables 
    const viajes = [["A", 300, 15], ["B", 60, 30], ["C", 150, 19]] //Arreglo que contiene los viajes
    //PROCESO
    for (let i = 0; i < viajes.length; i++) { //ciclo con for para el arreglo
        console.log (`Viaje # : (${i}+1)`) //se muestra el numero del viaje
        let tipo_viaje = viajes[i][0] //Se extrae el dato sobre el tipo de autobus
        if (tipo_viaje === "A") { //Condicion
            tarifa = 2 //se asigna la tarifa dependiendo de la condicion
        } else if (tipo_viaje === "B") {
            tarifa = 2.5
        } else if (tipo_viaje === "C") {
            tarifa = 3
        }
        let personas = viajes [i][2]
        if (personas < 20){ //Proceso para ver si el limite de personas se cumple
            minimo = 20
        } else {
            minimo = personas
        }
     costo_total = viajes[i][1] * tarifa * minimo //formula para general el costo total
    costo_persona = costo_total / personas //Formula para mostrar el costo por persona
    }
    //SALIDA : se muestra los datos del viaje
    console.log(`Total de Viajes : ${i + 1} , Viaje tipo ${viajes[i][0]}: Costo total $${costo_total} - Costo por persona $${costo_persona.toFixed(2)}`)
}



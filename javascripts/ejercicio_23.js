// Precios de trajes en arreglo //

function ejecutar_23() {
        // Se inicializa un arreglo vacío para guardar los precios.
    let precio_trajes = []
    // Se declaran las variables que se usarán más adelante.
    let precio_traje, traje, descuento, precio_descuento

    // --- Entrada ---
    // Pide la cantidad de trajes a procesar.
    const cantidad_trajes = parseInt(prompt("Ingresa cantidad de trajes:"))

    // El primer bucle `for` se usa para pedir los precios uno por uno.
    for (let i = 1; i <= cantidad_trajes; i++) {
        // Pide el precio del traje actual.
        precio_traje = parseFloat(prompt(`Ingresa el precio del traje #${i}:`))
        // Agrega el precio ingresado al final del arreglo.
        precio_trajes.push(precio_traje)
    }

    // Muestra el arreglo completo en la consola.
    console.log(`arreglo de trajes: ${precio_trajes}`)

    // --- Proceso y Salida ---
    // El segundo bucle `for` recorre el arreglo de precios.
    // Nota: empieza en 0 porque los arreglos se indexan desde 0.
    for (let i = 0; i < precio_trajes.length; i++) {
        // Se extrae el precio del traje en la posición `i` del arreglo.
        traje = precio_trajes[i]

        // Se extrae el precio del traje en la posición `i` del arreglo.
        if (precio_traje > 2500) {
            descuento = 15 // 15% de descuento
        } else {
            descuento = 8 // 8% de descuento
        }
        
        // Calcula el precio final con descuento.
        precio_descuento = traje * (1 - descuento / 100)
        
        // Muestra el resultado para cada traje. Se usa `i+1` para la visualización
        // para que el usuario lo vea como "Traje #1", "Traje #2", etc.
        console.log(`* TRAJE #${i+1}: $${precio_descuento.toFixed(2)}`)
    }
}

    
//COSTO DE CITAS CON ARREGLO
function ejecutar_25() {
    const citas = [1, 5, 9];                //EN ESTE CASO ES UN ARREGLO LO PONEMOS COMO CONSTANTE PORQUE NO CAMBIA EL VALOR
    let costo = 0;
    let i = 0;
    while (i < citas.length) {
        let cita = citas[i];                                      //PONEMOS UN WHILE Y LLAMAMOS AL ARREGLO CON[I]
        if (cita >= 1 && cita <= 3) {                                     //ABRIMOS UNA CONDICIONAL QUE YA LA TENIAMOS HECHA Y BUENO
            costo = 200                                       // PONEMOS EL VALOR Y EL DEBIDO PROBLEMA 
            acumulado = (cita * 200)
        } else if (cita >= 4 && cita <= 5) {
            costo = 150
            acumulado = (3 * 200) + ((cita - 3) * 150)
        } else if (cita >= 6 && cita <= 8) {
            costo = 100
            acumulado = (3 * 200) + (2 * 150) + ((cita - 5) * 100)
        } else if (cita >= 9) {
            costo = 50
            acumulado = (3 * 200) + (2 * 150) + (3 * 100) + ((cita - 8) * 50)
        }                                                           //PRESENTAMOS EN UN CONSOLE EL RESULTADO 
        console.log(`Su cita N°${cita} tiene el costo de ${costo} dolares y su acumulado es de ${acumulado} dolares`)
        i++;
    }
}



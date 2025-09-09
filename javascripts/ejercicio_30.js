function ejecutar_30(){
    debugger
    //ENTRADA
    console.log("DIAS DE LA SEMANA")
    const entrada = [1,2,3,4,5,6,7,8]//Arreglo con todos los numeros asignados
    //PROCESO
    for (i=0 ; i < entrada.length ; i++){ //condicion con ciclo for 
    let num = entrada [i]
        console.log(`Numero ${entrada [i]} :`) //extrae un valor del arreglo
        if (num==1){ //Condicion para determinar un resultado
            console.log("Es Lunes")
        } else if (num==2){
            console.log("Es Martes")
        } else if (num==3){
            console.log("Es Miercoles")
        } else if (num==4){
            console.log("Es Jueves")   
        } else if (num==5){
            console.log("Es Viernes")  
        } else if (num==6){                         
            console.log("Es Sabado")   
        } else if (num==7){
            console.log("Es Domingo")                      
        }
        else {
            console.log("Dia Invalido")
        }
    }
    //SALIDA : Mostrar el dia de la semana o algun otro resultado
}
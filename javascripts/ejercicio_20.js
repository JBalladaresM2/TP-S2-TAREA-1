function ejecutar_20(){
    debugger
    console.log("DIAS DE LA SEMANA")
    let veces=parseInt(prompt("Ingrese la cantidad de numeros")) //veces(leer)=0 "se preguntan por la cantidad de numers"
    c=1 //se genera un contador
    while (c<=veces){ //condicion para el ciclo
        let num=parseInt(prompt("Ingrese un Numero")) //se pregunta por el numero
        console.log(`Numero ${c} : ${num}`) //se muestra el numero 
        if (num==1){ 
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
            console.log ("dia invalido")
        }
        c++//se incrementa el contador y vuelve al ciclo
    }
} //SALIDA : Mostrar que dia de la semana es
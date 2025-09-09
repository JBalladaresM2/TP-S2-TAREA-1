//COSTO DE CITA 
function ejecutar_5(){
    let cita;                   //PRIMERAMENTE LAS VARIABLES LAS PONEMOS 
    let costo;
    let acumulado;
    cita=parseInt(prompt("Ingrese el numero de cita"))        //GUARDAMOS LA CITA QUE QUERAMOS 
    if(cita>=1 && cita<=3){
        costo=200                                       //ABRIMOS CONDICIONAL
        acumulado=(cita*200)
    } else if(cita>=4 && cita<=5){                  //TODO ESTO ES MATEMATICO ASI QUE HACEMOS LA FORMULA CORRESPONDIENTE
        costo=150
        acumulado=(3*200)+((cita-3)*150)
    } else if (cita>=6 && cita<=8){                       //Y MULTIPLICAMOS Y SUMAMOS 
        costo=100
        acumulado=(3*200)+(2*150)+((cita-5)*100)
    } else if (cita>9) {                                      //RESTAMOS  POR LAS CITAS ANTERIORES ES DECIR SI ANTES YA TENIA 3 Y PONEMOS 4 SERIA CITA-3
        costo=50
        acumulado=(3*200)+(2*150)+(3*100)+((cita-8)*50)
    }
    alert(`Su cita N°${cita} tiene el costo de ${costo} dolares y su acumulado es de ${acumulado} dolares`)     //HACEMOS EL CALCULO Y PRESENTAMOS
}

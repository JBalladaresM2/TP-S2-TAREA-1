//CITAS CON WHILE
function ejecutar_15(){
    let cita;                             //PONEMOS LAS VARIABLES QUE VAYAMOS A USAR
    let costo;
    let acumulado;
    let n;
    n=parseInt(prompt("Ingrese cuanas citas va a querer"))     //LLAMAMOS LAS N VECES LAS VECES QUE QUEREMOS REPETIR EL CICLO
    let c=1
    while(c<=n){
        cita=parseInt(prompt("Ingrese el numero de cita"))   //INGRESAMOS EL NUMERO DE LA CITA Y ABRIMOS EL WHILE 
        if(cita>=1 && cita<=3){
            costo=200                                       
            acumulado=(cita*200)                        //CON UNA CONDICIONAL ABRIMOS Y PONEMOS LO MATEMATICO DEPENDIENDO DEL ACUMULADO 
        } else if(cita>=4 && cita<=5){                  
            costo=150
            acumulado=(3*200)+((cita-3)*150)
        } else if (cita>=6 && cita<=8){                       
            costo=100
            acumulado=(3*200)+(2*150)+((cita-5)*100)
        } else if (cita>9) {                                              // POR ULTIMO ABRIMOS UN CONSOLE QUE NOS DIGA EL RESULTADO
            costo=50
            acumulado=(3*200)+(2*150)+(3*100)+((cita-8)*50)
        }
        console.log(`Su cita N°${cita} tiene el costo de ${costo} dolares y su acumulado es de ${acumulado} dolares`)     //HACEMOS EL CALCULO Y PRESENTAMOS

        c++;
    }
}
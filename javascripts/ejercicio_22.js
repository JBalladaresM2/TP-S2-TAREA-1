//COSTO DE LAPICES CON ARREGLO
function ejecutar_22(){
  debugger
    const n=[1200,800] //TIENE UN ARREGLO GUARDADO
    let c=0            // PONEMOS EN 0 PORQUE EL ARREGLO EMPIEZA CON 0
    while(c<n.length){
        let cantidad=n[c]    //ABRIMOS UN WHILE Y EXTRAEMOS EL ARREGLO EN CANTIDAD
        let costo;
        if (cantidad>1000){    //ABRIMOS UNA CONDICIONAL PARA PONER LAS CONDICIONES DE LOS LAPICES
            costo=0.85
        } else if(cantidad<1000) {
            costo=0.90
        }
        let total=costo*cantidad            //POR ULTIMO GUARDAMOS EL VALOR EN LA VARIABLE TOTAL 
        console.log(`Su compra de ${cantidad} de lapices tiene un costo total de ${total}$`)
    c++;
    }

}
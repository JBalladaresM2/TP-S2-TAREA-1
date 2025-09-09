//LAPICES CON WHILE
function ejecutar_12(){
let n = parseInt(prompt("Ingrese la cantidad de veces que va a comprar "));  //GUARDAMOS EN  UNA VARIABLE LAS N VECES QUE VAMOS A COMPRAR
let i=1
while (i<=n) {                                  //CREAMOS UN WHILE EN EL CUAL CREAMOS EL BUCLE PARA QUE SE DETENGA EL BUCLE DEPENDIENDO LO ESTABLECIDO 
    let costo;
    let cantidad= parseInt(prompt("Ingrese la cantidad de lapices que va a comprar"))

    if (cantidad >= 1000) {             //ABRIMOS LA CONDICIONAL Y PONEMOS LOS VALORES SEGUN NOS INDICAM
        costo = 0.85;
    } else {
        costo = 0.90;
    }

    let total = cantidad * costo;                       //PONEMOS EL CALCULO MATEMATICO Y PRESENTAMOS 
    console.log(`Cantidad = ${cantidad}, Total a pagar = ${total} $`);

    i++;
}
}
console.log("Desafío 4")

let nombre = prompt("Ingrese su nombre")

while (nombre == "") {
    nombre = prompt("Por favor, ingrese su nombre correctamente")
}


alert("Hola" + " " + nombre + ", " + "bienvenido/a a nuestra calculadora de calorías diarias");

let genero = prompt(`A continuación, seleccione su género:

M | H`);

let peso = parseInt(prompt("Ingrese su peso en kg:"));

let altura = parseInt(prompt("Por favor, ingrese su altura en cm:"));

let edad = parseInt(prompt("Por favor, ingrese su edad:"));



if (genero == "mujer" || "Mujer" || "M" || "m") {

    let calculo = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * edad);

    multi(calculo, 1.375)

    

} else if (genero == "hombre" || "Hombre" || "H" || "h") {

    let calculo = 66 + (13.7 * peso) + (5 * altura) - (6.75 * edad);

    multi(calculo, 1.375)


} else {

    alert("Su respuesta no es válida. Por favor, inténtelo nuevamente");
}


function multi(a,b){
    resultado = a * b;
    
    resultado=Math.round(resultado);

    alert("El numero aproximado de calorías diarias recomendadas que usted necesita para mantener su peso es " + resultado);
}

let plan= prompt("Desea obtener un plan nutricional personalizado?")

while (plan == "si" ||"SI"||"Si"){
    let precios= parseInt (prompt(`Por favor, seleccione un plan:
    1.Plan mantenimiento
    2.Plan dieta
    3.Plan entrenamiento
    4.Plan dieta + entrenamiento
    5.Plan embarazadas
    `))

    switch (precios) {
       case 1:
            alert("Plan mantenimiento $2000 por mes");
            break;
        case 2:
            alert("Plan dieta $2500 por mes");
            break;
        case 3:
            alert("Plan entrenamiento $2500 por mes");
            break;
        case 4:
            alert("Plan dieta + entrenamiento $3800 por mes");
            break;
        case 5:
            alert("Plan embarazadas $2800 por mes");
            break;
   }

   let mail= prompt("Dejanos tu e-mail para recibír mas información sobre nuestros planes:");
   break;
}


alert("Muchas Gracias por ultilizar nuestra calculadora de calorías diarias" )











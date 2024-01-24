//Área de definición de variables.
let numeroSecreto=6;

//El método alert muestra un popup en el navegador con el mensaje que nosotros le ingresemos.
alert("Bienvenido al juego de... ¡Adivina el número secreto!");

/*Es mejor ser explícito para declarar las variables que se utilizarán, a modo que se pueda identificar para qué se utiliza esa variable.
  El método prompt nos ayuda a obtener un dato ingresado por el usuario desde el teclado.
*/
let numeroDeUsuario = prompt("Me proporcionas un número entre 1 y 10 por favor:");

//Es recomendable después de terminar el código y ver que sea funcional eliminar cualquier console.log, ya que son las buenas prácticas de programación. Si no se borra console.log() puede ocasionar problemas cuando el proyecto se lance a producción.
console.log(numeroDeUsuario);

/*Cuando hay un "=" es para asignar valores, el doble igual "==" es para comparar valores como en el caso de la siguiente condición IF.
  Este código compara el valor del número ingresado con el número secreto.
*/

if(numeroDeUsuario==numeroSecreto){
    alert("Acertaste, el número que ingresaste es igual al número secreto");
}else{
    alert("No has acertado");
}
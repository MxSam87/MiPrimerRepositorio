//Área de definición de variables.
/*Es mejor ser explícito para declarar las variables que se utilizarán, a modo que se pueda identificar para qué se utiliza esa variable.
  Además es importante inicializar las variables.
*/
let numeroSecreto=4;
let numeroDeUsuario=0;
let intentos=1;
let palabraVeces="vez";

while(numeroDeUsuario!=numeroSecreto){
    //El método prompt nos ayuda a obtener un dato ingresado por el usuario desde el teclado.  
    let numeroDeUsuario = prompt("Me proporcionas un número entre 1 y 10 por favor:");

    //Es recomendable después de terminar el código y ver que sea funcional eliminar cualquier console.log, ya que son las buenas prácticas de programación. Si no se borra console.log() puede ocasionar problemas cuando el proyecto se lance a producción.
    console.log(numeroDeUsuario);
    
    /*Cuando hay un "=" es para asignar valores, el doble igual "==" es para comparar valores como en el caso de la siguiente condición IF.
      Este código compara el valor del número ingresado con el número secreto.
    */
    
    if(numeroDeUsuario==numeroSecreto){
        /*En esta línea de código se comienza a usar el recurso de Template String o Interpolación que lleva la siguiente estructura.
          ${variablequecontienedato}
          Además para su implementación debemos utilizar las comillas invertidas para abrir y cerrar (`Cualquier ${numero} de segundos`)
        */
        alert(`¡Acertaste!, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}`);
    }else{
      //Evaluando si el número es mayor o menor en un if anidado que dará pistas al usuario para poder acertar al número secreto.
      if(numeroDeUsuario>numeroSecreto){
        alert("El número secreto es menor");
      }else{
        alert("El número secreto es mayor");
      }
      //El contador se incrementa cuando no se acerta.
      intentos=intentos+1;
      palabraVeces="veces";
        //alert("No has acertado");
    }
}
//Área de definición de variables.
/*Es mejor ser explícito para declarar las variables que se utilizarán, a modo que se pueda identificar para qué se utiliza esa variable.
  Además es importante inicializar las variables.
*/
let numeroSecreto=4;
let numeroDeUsuario=0;
let intentos=1;
let palabraVeces="vez";
let maximosIntentos=3;

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
          Otra función muy útil es que cuando utilizamos los Template String podemos incluir código Javascript como por ejemplo
          se incluye ${intentos==1 ? "vez" : "veces"} esta parte del código hace una evaluación como si se tratase de un if pero más compacto
          evalua de la siguiente manera: si intentos es igual a 1 entonces imprimirá ves, pero si intentos es mayor que 1 entonces imprimirá veces.
        */
        alert(`¡Acertaste!, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }else{
      //Evaluando si el número es mayor o menor en un if anidado que dará pistas al usuario para poder acertar al número secreto.
      if(numeroDeUsuario>numeroSecreto){
        alert("El número secreto es menor");
      }else{
        alert("El número secreto es mayor");
      }
      //El contador se incrementa cuando no se acerta. Otras formas de incrementar contadores: intentos=intentos+1 o intentos+=1.
      intentos++;
      palabraVeces="veces";
      if (intentos>maximosIntentos){
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
      }
        //alert("No has acertado");
    }
}
function song(){
    // Inicia un bucle for que comienza en 99 y termina en 0, decrementando i en cada iteración.
    for (let i = 99; i >= 0; i--) {
        // Verifica si queda sólo una botella en la pared.
        if (i == 1) {
            // Si es así, imprime este mensaje especial para 1 botella.
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }
        // Verifica si ya no quedan botellas en la pared.
        else if (i == 0) {
            // Si no hay botellas, imprime este mensaje que indica ir a comprar más.
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
        // Verifica si quedan exactamente dos botellas.
        else if (i == 2) {
            // Imprime este mensaje para 2 botellas, notando que después quedará solo 1 botella.
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottle of milk on the wall.`);
        }
        // Para cualquier otro número de botellas (más de 2 y más de 1).
        else {
            // Imprime el mensaje estándar para múltiples botellas, utilizando plural "bottles".
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottles of milk on the wall.`);
        }
    }
}

// Llama a la función para ejecutar el bucle y imprimir todos los mensajes.
song();

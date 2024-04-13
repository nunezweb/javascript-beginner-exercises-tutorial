function sing(){
    let str = "";  // Inicia con un string vacío para almacenar la letra de la canción.
    for(let i = 0; i < 11; i++){  // Bucle que se repite 11 veces, desde i = 0 hasta i = 10.
        if(i === 4)  // Cuando el índice i es igual a 4,
            str += 'there will be an answer, ';  // añade "there will be an answer, " al string.
        else if (i === 10)  // Cuando el índice i es igual a 10,
            str += 'whisper words of wisdom, let it be';  // añade "whisper words of wisdom, let it be" al string.
        else  // Para cualquier otro índice,
            str += 'let it be, ';  // añade "let it be, " al string.
    }
    return str;  // Devuelve el string completo generado.
}

//Your code above ^^^
console.log(sing());

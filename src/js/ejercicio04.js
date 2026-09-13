let cadenaIntroducida = prompt();
let i;
let cadenaValida = true;

if (cadenaIntroducida.length % 2 == 1){
    for(i=0; i<cadenaIntroducida.length ; i++ ){ //i vale cero, i es menor a la longitud de los caracteres?, i suma 1 a su valor
        if (i%2 === 0){ //Si la posición del carácter es par:
            if (Number(cadenaIntroducida[i]) >= 0 && Number(cadenaIntroducida[i]) <= 5){ //Si el caracter está entre 0 y 5
                console.log("Está dentro del límite");
            } else{
                cadenaValida = false;
                console.log("El caracter no es válido")
            }
        } else {
            if (cadenaIntroducida[i]=== "?"){ //Si el carácter es un signo de pregunta:
            console.log(Number(cadenaIntroducida[i-1]) + Number(cadenaIntroducida[i+1]));
            } else{
            cadenaValida = false;
            console.log("El caracter no es válido");
            }
        };
    }
    if (cadenaValida){ //Si la cadena es válida
        console.log("La cadena es valida");
    } else{
        console.log("La cadena no es valida");
    };
} else {
    cadenaValida = false;
    console.log("La cadena no es valida");
}


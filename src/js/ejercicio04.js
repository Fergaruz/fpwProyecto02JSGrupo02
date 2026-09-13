let cadenaIntroducida = prompt();

function calculo(cadenaIntroducida){
    let i;
    let cadenaValida = true;

    if (cadenaIntroducida.length % 2 === 1){ //Si la cantidad de carácteres son impares
        
    let nuevaCadena = "";

    for(i=0; i<cadenaIntroducida.length ; i++ ){ //i vale cero, i es menor a la longitud de los caracteres?, i suma 1 a su valor
            if (i%2 === 0){ //Si la posición del carácter es par:
                if (Number(cadenaIntroducida[i]) >= 0 && Number(cadenaIntroducida[i]) <= 5){ //Si el caracter está entre 0 y 5
                    nuevaCadena = nuevaCadena + cadenaIntroducida[i]; //A nuevaCadena se le agrega el carácter actual
                } else{
                    cadenaValida = false;
                }
            } else {
                if (cadenaIntroducida[i]=== "?"){ //Si el carácter es un signo de pregunta:
                    let suma =Number(cadenaIntroducida[i-1]) + Number(cadenaIntroducida[i+1]);//Convierte los carácteres ingresados en tipo number para poder sumarlos
                    nuevaCadena = nuevaCadena + suma;
                } else{
                cadenaValida = false;
                }
            }
        }

        if (cadenaValida){ //Si la cadena es válida
            return nuevaCadena;
        } else{
            return "la cadena no es válida";
        }

    } else {
        return "la cadena no es válida";
    }
};

let resultado = calculo(cadenaIntroducida);

console.log(resultado);
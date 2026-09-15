//Creación y exportación de la funcion

export const comparacion = (a,b) => {
    if (a > b) {
        alert(`El orden de las letras en el abecedario es "${b}${a}"`)
    }else if(a < b) {
        alert(`El orden de las letras en el abecedario es "${a}${b}"`)
    }else {
        alert(`La letras "${a}" y "${b}" son iguales`)
    };
}
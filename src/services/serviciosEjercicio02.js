//Creación y exportación de la función
 
export const sonValoresValidos = (base, altura) => {
    return !isNaN(base) && !isNaN(altura) && base > 0 && altura > 0;
};

export const calcularAreaTriangulo = (base, altura) => {
    const area = (base * altura) / 2;
    alert(`El área del triángulo es: ${area}`);
};
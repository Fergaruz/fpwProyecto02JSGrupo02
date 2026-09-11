export const calcularPorcentaje = (preguntas, correctas) => {
    return (preguntas / correctas) * 100;
}

export const mostrarRendimiento = (porcentaje, resultado) => {
    if (porcentaje >= 90){
        resultado.textContent = "Excelente";
    }   else if (porcentaje >= 70){
        resultado.textContent = "Muy bueno";
    }   else if (porcentaje >= 50){
        resultado.textContent = "Aprobado";
    } else {
        resultado.textContent = "Desaprobado";
    }
}
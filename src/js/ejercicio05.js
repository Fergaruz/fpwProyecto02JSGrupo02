//Importacines

//Constantes
const formulario = document.querySelector("#formulario");
const totalPreguntas = document.querySelector("#totalPreguntas");
const respuestasCorrectas = document.querySelector("#respuestasCorrectas");
const resultado = document.querySelector("#resultado");

//Funciones
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const preguntas = Number (totalPreguntas.value);
    const correctas = Number (respuestasCorrectas.value);
    const porcentaje = calcularPorcentaje (preguntas, correctas);
    mostrarRendimiento(porcentaje);
})

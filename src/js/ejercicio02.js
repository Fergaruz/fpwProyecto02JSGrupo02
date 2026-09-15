//Importación de la función
 
import { calcularAreaTriangulo, sonValoresValidos } from "../services/serviciosTriangulo.js";
 
//Inicialización de variables
 
let base = prompt("Ingresá la base del triángulo");
let altura = prompt("Ingresá la altura del triángulo");
 
//Llamado de la función
 
if (sonValoresValidos(base, altura)) {
    calcularAreaTriangulo(base, altura);
} else {
    alert("Debés ingresar valores numéricos positivos para la base y la altura.");
}
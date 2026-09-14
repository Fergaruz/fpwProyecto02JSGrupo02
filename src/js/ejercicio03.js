//comence el ejercicio 3 !
//Escribir un programa que solicite al usuario el ingreso del nombre de una ciudad y el nombre de un país. El programa debe concatenar ambas cadenas separándolas por una coma y un espacio en blanco (ej. "San Salvador de Jujuy, Argentina") y luego mostrar el resultado. Además, se debe realizar lo siguiente: mostrar la cantidad de caracteres de ambas cadenas por separado, compararlas e indicar cuál de las dos es más larga (o si son iguales).//
const ciudad = prompt("Ingrese el nombre de una ciudad:");
const pais = prompt("Ingrese el nombre de un país:");
const lugarCompleto = ciudad + ", " + pais;
console.log ("lugarCompleto")

console.log ("cantidad de caracteres de la ciudad:"+ciudad.length);
console.log ("cantidad de caracteres del país." + pais.length);

document.write("<h2>" + lugarCompleto + "</h2>");

document.write("<p>Caracteres de la ciudad: " + ciudad.length + "</p>");
document.write("<p>Caracteres del país: " + pais.length + "</p>");

if (ciudad.length > pais.length) {
    document.write("<p>La ciudad tiene más caracteres que el país.</p>");
} else if (pais.length > ciudad.length) {
    document.write("<p>El país tiene más caracteres que la ciudad.</p>");
} else {
    document.write("<p>La ciudad y el país tienen la misma cantidad de caracteres.</p>");
}
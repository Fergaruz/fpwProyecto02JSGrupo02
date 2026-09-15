// Importación de funciones
import {
    concatenarLugar,
    contarCaracteres,
    compararLongitud,
    obtenerBandera
} from "../services/serviciosEjercicio03.js";


// Ingreso de datos
const ciudad = prompt("Ingrese el nombre de una ciudad:");

const pais = prompt("Ingrese el nombre de un país:");


// Uso de las funciones
const lugarCompleto = concatenarLugar(ciudad, pais);

const cantidadCiudad = contarCaracteres(ciudad);

const cantidadPais = contarCaracteres(pais);

const comparacion = compararLongitud(ciudad, pais);

const bandera = obtenerBandera(pais);


// Mostrar resultado en la página
document.getElementById("resultado").innerHTML = `

    <div class="tarjeta">

        <div class="bandera">
            ${bandera}
        </div>

        <h2>${lugarCompleto}</h2>

        <p>
            🏙️ Caracteres de la ciudad:
            <strong>${cantidadCiudad}</strong>
        </p>

        <p>
            🌎 Caracteres del país:
            <strong>${cantidadPais}</strong>
        </p>

        <p class="comparacion">
            ${comparacion}
        </p>

    </div>

`;
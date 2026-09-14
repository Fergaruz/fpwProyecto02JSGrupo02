const ciudad = prompt("Ingrese el nombre de una ciudad:");
const pais = prompt("Ingrese el nombre de un país:");

const lugarCompleto = ciudad + ", " + pais;

// Banderas
const banderas = {
    argentina: "🇦🇷",
    chile: "🇨🇱",
    bolivia: "🇧🇴",
    peru: "🇵🇪",
    brasil: "🇧🇷",
    uruguay: "🇺🇾",
    paraguay: "🇵🇾",
    colombia: "🇨🇴",
    mexico: "🇲🇽",
    españa: "🇪🇸",
    francia: "🇫🇷",
    italia: "🇮🇹",
    japon: "🇯🇵",
    corea: "🇰🇷",
    estadosunidos: "🇺🇸"
};
const paisBuscado = pais
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const bandera = banderas[paisBuscado] || "🌎";
// Buscar la bandera



// Comparar longitudes
const comparacion =
    ciudad.length > pais.length
        ? "La ciudad tiene más caracteres que el país."
        : pais.length > ciudad.length
        ? "El país tiene más caracteres que la ciudad."
        : "La ciudad y el país tienen la misma cantidad de caracteres.";


// Mostrar resultado
document.getElementById("resultado").innerHTML = `

    <div class="tarjeta">

        <div class="bandera">
            ${bandera}
        </div>

        <h2>${lugarCompleto}</h2>

        <p>
            🏙️ Caracteres de la ciudad:
            <strong>${ciudad.length}</strong>
        </p>

        <p>
            🌎 Caracteres del país:
            <strong>${pais.length}</strong>
        </p>

        <p class="comparacion">
            ${comparacion}
        </p>

    </div>

`;
// Une la ciudad y el país
export const concatenarLugar = (ciudad, pais) => {
    return ciudad + ", " + pais;
};


// Cuenta los caracteres sin contar espacios
export const contarCaracteres = (texto) => {
    return texto.replaceAll(" ", "").length;
};


// Compara la cantidad de caracteres
export const compararLongitud = (ciudad, pais) => {

    const cantidadCiudad = contarCaracteres(ciudad);
    const cantidadPais = contarCaracteres(pais);

    if (cantidadCiudad > cantidadPais) {
        return "La ciudad tiene más caracteres que el país.";
    }
    else if (cantidadPais > cantidadCiudad) {
        return "El país tiene más caracteres que la ciudad.";
    }
    else {
        return "La ciudad y el país tienen la misma cantidad de caracteres.";
    }

};


// Devuelve la bandera del país
export const obtenerBandera = (pais) => {

    const banderas = {
        "argentina": "🇦🇷",
        "chile": "🇨🇱",
        "bolivia": "🇧🇴",
        "peru": "🇵🇪",
        "brasil": "🇧🇷",
        "uruguay": "🇺🇾",
        "paraguay": "🇵🇾",
        "colombia": "🇨🇴",
        "mexico": "🇲🇽",
        "españa": "🇪🇸",
        "francia": "🇫🇷",
        "italia": "🇮🇹",
        "japon": "🇯🇵",
        "corea del sur": "🇰🇷",
        "estados unidos": "🇺🇸"
    };

    const paisBuscado = pais.toLowerCase().trim();

    return banderas[paisBuscado] || "🌎";
};
let razas = [
    { raza: "humano", img: "../assets/images/humano.webp", atributos: { fuerza: 11, destreza: 11, constitucion: 11, inteligencia: 11, sabiduria: 11, carisma: 11 } },
    { raza: "tiefling", img: "../assets/images/tiefling.webp", atributos: { fuerza: 10, destreza: 12, constitucion: 10, inteligencia: 10, sabiduria: 10, carisma: 12 } },
    { raza: "draconido", img: "../assets/images/draconido.webp", atributos: { fuerza: 12, destreza: 10, constitucion: 10, inteligencia: 10, sabiduria: 10, carisma: 11 } },
    { raza: "elfo", img: "../assets/images/elfo.webp", atributos: { fuerza: 10, destreza: 12, constitucion: 10, inteligencia: 11, sabiduria: 11, carisma: 11 } },
    { raza: "semiorco", img: "../assets/images/semiorco.webp", atributos: { fuerza: 12, destreza: 10, constitucion: 11, inteligencia: 10, sabiduria: 10, carisma: 10 } }
];

let razaSeleccionada;
let atributos;

function seleccionarRaza(raza, atrib) {
    razaSeleccionada = raza;
    let atributosParse = JSON.parse(atrib);
    atributos = atributosParse;
    generarClases();
}

function elegirPersonaje(race) {
    for (let i = 0; i < razas.length; i++) {
        if (razas[i].raza === race) {
            return razas[i];
        }
    }
}

// export { razas, seleccionarRaza, razaSeleccionada, atributos, elegirPersonaje };
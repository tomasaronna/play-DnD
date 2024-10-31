const clases = [
    { nombre: "Guerrero", descripcion: "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate...", img: "../assets/images/guerrero.webp", vida: 20, arma: "Espada larga y escudo" },
    { nombre: "Mago", descripcion: "Los magos son los practicantes supremos de la magia...", img: "../assets/images/mago.webp", vida: 12, arma: "Bastón" },
    { nombre: "Brujo", descripcion: "Los brujos son buscadores del conocimiento...", img: "../assets/images/brujo.webp", vida: 15, arma: "Espada corta" },
    { nombre: "Explorador", descripcion: "Lejos del bullicio de las ciudades y pueblos...", img: "../assets/images/explorador.webp", vida: 17, arma: "Arco" }
];

let claseSeleccionada
let armaClase
function seleccionarClase(clase, arma) {
    claseSeleccionada = clase;
    armaClase = arma

    generarInputNombre()
}

function elegirClase(clase) {
    for (let i = 0; i < clases.length; i++) {
        if (clases[i].nombre === clase) {
            return clases[i];
        }
    }
}

// export { clases, seleccionarClase, claseSeleccionada, elegirClase, armaClase };

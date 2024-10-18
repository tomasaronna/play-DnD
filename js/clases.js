const clases = [
    { nombre: "Guerrero", descripcion: "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate...", img: "../assets/images/guerrero.webp", vida: 10, arma: "Espada larga y escudo" },
    { nombre: "Mago", descripcion: "Los magos son los practicantes supremos de la magia...", img: "../assets/images/mago.webp", vida: 6, armas: "Bastón" },
    { nombre: "Brujo", descripcion: "Los brujos son buscadores del conocimiento...", img: "../assets/images/brujo.webp", vida: 8, armas: "Espada corta" },
    { nombre: "Explorador", descripcion: "Lejos del bullicio de las ciudades y pueblos...", img: "../assets/images/explorador.webp", vida: 10, armas: "Arco" }
];

let claseSeleccionada;

function seleccionarClase(clase) {
    claseSeleccionada = clase;
    generarInputNombre();
}

function elegirClase(clase) {
    for (let i = 0; i < clases.length; i++) {
        if (clases[i].nombre === clase) {
            return clases[i];
        }
    }
}

export { clases, seleccionarClase, claseSeleccionada, elegirClase };

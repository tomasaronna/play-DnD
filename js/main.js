const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

const abrirModal = () => {modal.style.display = "block"}
const cerrarModal = () => {modal.style.display = "none"}

let razas = [
    {
        raza: "humano",
        atributos: {
            fuerza: 11,
            destreza: 11,
            constitucion: 11,
            inteligencia: 11,
            sabiduria: 11,
            Carisma: 11
        }
    },
    {
        raza: "tiefling",
        atributos: {
            fuerza: 10,
            destreza: 12,
            constitucion: 10,
            inteligencia: 10,
            sabiduria: 10,
            Carisma: 12,
        }
    },
    {
        raza: "draconido",
        atributos: {
            fuerza: 12,
            destreza: 10,
            constitucion: 10,
            inteligencia: 10,
            sabiduria: 10,
            Carisma: 11,
        }
    },
    {
        raza: "elfo",
        atributos: {
            fuerza: 10,
            destreza: 12,
            constitucion: 10,
            inteligencia: 11,
            sabiduria: 11,
            Carisma: 11,
        }
    },
    {
        raza: "semiorco",
        atributos: {
            fuerza: 12,
            destreza: 10,
            constitucion: 11,
            inteligencia: 10,
            sabiduria: 10,
            Carisma: 10,
        }
    }
]

const clases = ['guerrero', 'mago', 'brujo', 'explorador']

function elegirPersonaje(race) {
    for (let i = 0; i < razas.length; i++) {
        if (razas[i].raza === race) {
            return razas[i]
        }
    }
}

const elegirClase = function() {
    
}

function crearPersonaje(race) {
    const razaSeleccionada = elegirPersonaje(race)
    class Personaje {
        constructor(raza, clase, atributos) {
            this.raza = raza
            this.clase = clase
            this.atributos = atributos
        }
    }
    let personaje1 = new Personaje(razaSeleccionada.raza, 'a', razaSeleccionada.atributos)
    console.log(personaje1)
}
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

let raceBTN = document.getElementsByClassName('raceBTN')
let resp = document.getElementById('response')


function elegirPersonaje() {
    for (let i = 0; i < razas.length; i++) {
        if (razas[i].raza === raceBTN[i].value) {
            return razas[i].raza
        }
    }
}

function crearPersonaje() {

    const razaSeleccionada = elegirPersonaje()

    class Personaje {
        constructor(raza) {
            this.raza = raza
        }
    }

    let personaje1 = new Personaje(razaSeleccionada)
    console.log(personaje1)
}
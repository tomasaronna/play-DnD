let razas = [
    {
        raza: "humano",
        img: "../assets/images/humano.webp",
        atributos: {
            fuerza: 11,
            destreza: 11,
            constitucion: 11,
            inteligencia: 11,
            sabiduria: 11,
            carisma: 11
        }
    },
    {
        raza: "tiefling",
        img: "../assets/images/tiefling.webp",
        atributos: {
            fuerza: 10,
            destreza: 12,
            constitucion: 10,
            inteligencia: 10,
            sabiduria: 10,
            carisma: 12,
        }
    },
    {
        raza: "draconido",
        img: "../assets/images/draconido.webp",
        atributos: {
            fuerza: 12,
            destreza: 10,
            constitucion: 10,
            inteligencia: 10,
            sabiduria: 10,
            carisma: 11,
        }
    },
    {
        raza: "elfo",
        img: "../assets/images/elfo.webp",
        atributos: {
            fuerza: 10,
            destreza: 12,
            constitucion: 10,
            inteligencia: 11,
            sabiduria: 11,
            carisma: 11,
        }
    },
    {
        raza: "semiorco",
        img: "../assets/images/semiorco.webp",
        atributos: {
            fuerza: 12,
            destreza: 10,
            constitucion: 11,
            inteligencia: 10,
            sabiduria: 10,
            carisma: 10,
        }
    }
]

const clases = ['guerrero', 'mago', 'brujo', 'explorador']

const tirarDados = () => 1 + Math.floor(Math.random() * 20)

const modal = document.querySelector('.modal')
const start = document.querySelector('#start')
let modalContent

razas.forEach(raza => {
    modalContent += `
        <div class="card">
            <img src="${raza.img}" alt="Raza ${raza.raza}">
            <h2>${raza.raza}</h2>
            <h3>Atributos:</h3>
            <ul>
              <li>Fuerza: ${raza.atributos.fuerza}</li>
              <li>Destreza: ${raza.atributos.destreza}</li>
              <li>Constitución: ${raza.atributos.constitucion}</li>
              <li>inteligencia: ${raza.atributos.inteligencia}</li>
              <li>Sabiduría: ${raza.atributos.sabiduria}</li>
              <li>Carisma: ${raza.atributos.carisma}</li>
            </ul>
            <button type="button" class="raceButton" data-raza="${raza.raza}" onClick=elegirPersonaje("${raza.raza}")>Elegir raza</button>
        </div>
    `
    
    modal.innerHTML = `
        <div class="modalContent">
            <span class="close">&times</span>
            ${modalContent}
        </div>
    `
});



start.addEventListener('click', () => {
    modal.style.display = "block"
})


const close = document.querySelector('.close')

close.addEventListener('click', () => {
    modal.style.display = "none"
})

function elegirPersonaje(race) {
    for (let i = 0; i < razas.length; i++) {
        if (razas[i].raza === race) {
            return razas[i]
        }
    }
}



// const elegirClase = function () {

// }

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
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

const modal = document.querySelector('.modal')
const start = document.querySelector('#start')

start.addEventListener('click', () => {
    modal.style.display = "block"

    if (localStorage.getItem("personaje")) {

        let pjCreado = confirm('ya hay un personaje creado, quieres empezar el juego con este personaje?')

        if (pjCreado == true) {
            console.log("Hay un personaje creado")
        } else {
            localStorage.clear()
        }
    }
})



let modalContent = ""
const limpiarModal = () => modalContent = ''
// let modalFijo = `
//     <div id="modalFijo" class="modalContent">
//         <span class="close">&times</span>
//     </div>`

razas.forEach(raza => {
    const atributosString = JSON.stringify(raza.atributos)
    modalContent += `
        <div class="card">
            <img src="${raza.img}" alt="Raza ${raza.raza}" class="racePicture">
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
            <button type="button" class="raceButton" onClick='seleccionarRaza("${raza.raza}", \`${atributosString}\`)'>Elegir raza</button>
        </div>
    `

    modal.innerHTML = `
        <div class="modalContent">
            <span class="close">&times</span>
            ${modalContent}
        </div>
    `
});

const close = document.querySelector('.close')
close.addEventListener('click', () => {
    let resp = confirm('Deseas salir?')
    if (resp) {
        modal.style.display = "none"
    }
})

function elegirPersonaje(race) {
    for (let i = 0; i < razas.length; i++) {
        if (razas[i].raza === race) {
            return razas[i]
        }
    }
}

const clases = [
    {
        nombre: "Guerrero",
        descripcion: "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate. Además, están muy relacionados con la muerte, tanto repartiéndola como mirándola fijamente, desafiantes.",
        img: "../assets/images/guerrero.webp",
        vida: 10,
        arma: "Espada larga",
    },
    {
        nombre: "Mago",
        descripcion: "Los magos son los practicantes supremos de la magia, definidos y unidos como una clase por los hechizos que conjuran. A partir de la sutil onda de la magia que impregna el cosmos, los magos lanzan explosivos hechizos de fuego, estacas de hielo y bolas ácidas.",
        img: "../assets/images/mago.webp",
        vida: 6,
        arma: "Bastón"
    },
    {
        nombre: "Brujo",
        descripcion: "Los brujos son buscadores del conocimiento que se encuentra escondido en el multiverso. A través de pactos hechos con seres poderosos de poder sobrenatural, los brujos desatan efectos mágicos tanto sutiles como espectaculares y recolectan secretos arcanos para potenciar su propio poder.",
        img: "../assets/images/brujo.webp",
        vida: 8,
        arma: "Espada corta"
    },
    {
        nombre: "Explorador",
        descripcion: "Lejos del bullicio de las ciudades y pueblos, más allá de las defensas que mantienen a las granjas más lejanas protegidas de los terrores de la naturaleza, en medio de tupidos bosques sin caminos y a través de enormes y vacías llanuras, los exploradores mantienen su interminable guardia.",
        img: "../assets/images/explorador.webp",
        vida: 10,
        arma: "Arco"
    }
]

const raceBTN = document.getElementsByClassName('raceButton')

let razaSeleccionada
let atributos

function seleccionarRaza(raza, atrib) {
    razaSeleccionada = raza;

    let atributosParse = JSON.parse(atrib);
    atributos = atributosParse;

    generarClases();
}

let claseSeleccionada
let armaClase
function seleccionarClase(clase, arma) {
    claseSeleccionada = clase;
    armaClase = arma
    
    generarInputNombre()
}

let generarInputNombre = () => {
    limpiarModal()
    modalContent += `
        <input name="nombrePersonaje" id='input'>Elige el nombre de tu personaje</input>
        <button type="text" onClick="nombrePersonaje()">Elegir nombre</button>
    `
    
    modal.innerHTML = `
        <div id="modalFijo" class="modalContent">
            <span class="close">&times</span>
            ${modalContent}
        </div>
    `
}

let namePJ
function nombrePersonaje(){
    let input = document.querySelector('#input').value
    namePJ = input
    crearPersonaje()
}

function generarClases() {
    for (let i = 0; i < clases.length; i++) {
        modalContent = ''
        clases.forEach(clase => {
            modalContent += `
                    <div class="card">
                    <img src="${clase.img}" alt="Clase ${clase.nombre}">
                    <h2>${clase.nombre}</h2>
                    <h3>Descripción:</h3>
                    <p>${clase.descripcion}</p>
                    <p>Arma: ${clase.arma}</p>
                    <button type="button" class="classButton" onClick="seleccionarClase('${clase.nombre}', '${clase.arma}')">Elegir clase</button>
                </div>
                `
        })
        modal.innerHTML = `
                <div class="modalContent">
                    <span class="close">&times</span>
                    <h2>Ahora elige una clase</h2>
                    ${modalContent}
                </div>
            `
        const newClose = document.querySelector('.close')
        newClose.addEventListener('click', () => {
            modal.style.display = 'none'
        })
    }
}

function elegirClase(clase) {
    for (let i = 0; i < clases.length; i++) {
        if (clases[i].nombre === clase) {
            return clases[i]
        }
    }
}

function crearPersonaje() {
    class Personaje {
        constructor(name, raza, atributos, clase, arma) {
            this.name = name
            this.raza = raza
            this.atributos = atributos
            this.clase = clase
            this.arma = arma
        }
    }
    let personaje1 = new Personaje(namePJ, razaSeleccionada, atributos, claseSeleccionada, armaClase)
    console.log(personaje1)

    const personaje = JSON.stringify(personaje1)
    localStorage.setItem('personaje', personaje)
}
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
let modalFijo = `
    <div id="modalFijo" class="modalContent">
        <span class="close">&times</span>
    </div>`

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
function nombrePersonaje() {
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

function comenzarJuego() {

    limpiarModal()
    modalContent += `
        <button type="text" class="comenzarJuego" onclick="mostrarHistoria('inicio')">Comenzar</button>
    `
    modal.innerHTML = `
        <div class="modalContent">
            <span class="close">&times</span>
            <h2>Ahora elige una clase</h2>
            ${modalContent}
        </div>
    `
}
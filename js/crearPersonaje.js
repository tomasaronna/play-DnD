import { razaSeleccionada, atributos } from './razas.js';
import { claseSeleccionada } from './clases.js';
import { namePJ } from './main.js'; // Assuming namePJ is defined in main.js

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

export { crearPersonaje };

let textosCombate


function textosCombate(){
    switch(clase){
        case "Guerrero": 
        textosCombate: {
            ataques: {
                "Corres hacia el enemigo y lo golpeas con tu espada larga, provocando ${daño}",
                "Saltas hacia el enemigo y lo cortas con tu arma, provocando ${daño}. El enemigo pierde mucha sangre.",
                "Atraviesas al enemigo, al sacar tu arma, escuchas como gime de dolor, provocando ${daño}."
            }
        }
    }
}
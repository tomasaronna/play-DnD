import {razaSeleccionada, claseSeleccionada} from './main'

export function crearPersonaje() {
    console.log(razaSeleccionada)
    console.log(claseSeleccionada)
    console.log(namePJ)
    class Personaje {
        constructor(raza, clase, atributos, name) {
            this.raza = raza
            this.clase = clase
            this.atributos = atributos
            this.name = name
        }
    }
    let personaje1 = new Personaje(razaSeleccionada, claseSeleccionada, atributos, namePJ)
    console.log(personaje1)

    const personaje = JSON.stringify(personaje1)
    localStorage.setItem('personaje', personaje)
}
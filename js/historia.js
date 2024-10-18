import { crearPersonaje } from './crearPersonaje'

const historia = {
    inicio: {
        texto: "Te despiertas en medio del bosque sin recordar nada. Miras al cielo, pero apenas puedes ver un poco de luz de la luna penetrar entre las copas de los árboles que te rodean. Levantas tu arma, que se encontraba en el suelo, y te percatas de que muy cerca de donde estabas hay huellas. Te dispones a seguirlas, con mucha dificultad dado la escasa luz, hasta que logras salir del bosque y llegas a un camino"
        ,
        opciones: {
            A: "Tomar el camino hacia tu izquierda",
            B: "Tomar el camino hacia tu derecha"
        },
        siguiente: {
            A: "caminoIzquierda",
            B: "caminoDerecha"
        }
    },
    caminoIzquierda: {
        texto: "Decides emprender el camino hacia la izquierda. Caminas kilómetros hasta encontrar una cabaña en el medio de la nada. El techo de madera está quebrado en varias partes, las ventanas tapiadas con madera de roble, las paredes, que parecería que en algún momento fueron blancas, se tornaron amarillas del paso de los años y puedes notar varias manchas de humedad. No parece que nadie pueda vivir en ese lugar. Observas la puerta y ves que está entreabierta, no puedes ver ni oír nada en el interior..",
        opciones: {
            A: "Entras en la cabaña",
            B: "Tocas la puerta",
            C: "No crees que haya nada útil dentro, por lo que sigues caminando."
        },
        siguiente: {
            A: "entrarCabaña",
            B: "tocarPuerta",
            C: "seguirCaminando"
        }
    },
    caminoDerecha: {
        texto: "Tomas el camino hacia la derecha. Notas que algo se acerca a la distancia, parece ser un carruaje tirado por dos un caballo. Cuando está cerca, puedes ver un hombre de mediana edad, al que le faltan algunos dientes y luce un bigote desprolijo. Te pregunta qué haces a esas alturas de la noche, sin luz recorriendo un camino en solitario.",
        opciones: {
            A: "Le preguntas quién es",
            B: "Le preguntas qué hay más adelante"
        },
        siguiente:{
            A: "quienEs",
            B: "queHay"
        }
    },
    entrarCabaña:{
        texto: "Ingresas en la cabaña, ves una hoguera encendida, con dos trozos de carne encima cocinándose. ",
    }
}

const mostrarHistoria = (clave) => {
    let nodoHistoria = historia[clave]
    modalContent = `<p> ${nodoHistoria.texto}</p>`
    for (let opcion in nodoHistoria.opciones){
        modalContent += <button type="text" class="optionBTN" onclick="manejarOpcion('${nodoHistora.siguiente[opcion]}')">${nodoHistoria.opciones[opcion]}</button>
    }
    modal.innerHTML = modalContent
}

const manejarOpcion = (nuevaClave) => {
    mostrarHistoria(nuevaClave)
}

mostrarHistoria('inicio')
// const historia = {
//     inicio: {
//         texto: "Te despiertas en medio del bosque sin recordar nada. Miras al cielo, pero apenas puedes ver un poco de luz de la luna penetrar entre las copas de los árboles que te rodean. Levantas tu arma, que se encontraba en el suelo, y te percatas de que muy cerca de donde estabas hay huellas. Te dispones a seguirlas, con mucha dificultad dado la escasa luz, hasta que logras salir del bosque y llegas a un camino",
//         opciones: {
//             A: "Tomar el camino hacia tu izquierda",
//             B: "Tomar el camino hacia tu derecha"
//         },
//         siguiente: {
//             A: "caminoIzquierda",
//             B: "caminoDerecha"
//         }
//     },
//     caminoIzquierda: {
//         texto: "Decides emprender el camino hacia la izquierda. Caminas kilómetros hasta encontrar una cabaña en el medio de la nada. El techo de madera está quebrado en varias partes, las ventanas tapiadas con madera de roble, las paredes, que parecería que en algún momento fueron blancas, se tornaron amarillas del paso de los años y puedes notar varias manchas de humedad. No parece que nadie pueda vivir en ese lugar. Observas la puerta y ves que está entreabierta, no puedes ver ni oír nada en el interior.",
//         opciones: {
//             A: "Entras en la cabaña",
//             B: "Tocas la puerta",
//             C: "No crees que haya nada útil dentro, por lo que sigues caminando."
//         },
//         siguiente: {
//             A: "entrarCabaña",
//             B: "tocarPuerta",
//             C: "seguirCaminando"
//         }
//     },
//     caminoDerecha: {
//         texto: "Tomas el camino hacia la derecha. Notas que algo se acerca a la distancia, parece ser un carruaje tirado por dos un caballo. Cuando está cerca, puedes ver un hombre de mediana edad, al que le faltan algunos dientes y luce un bigote desprolijo. Te pregunta qué haces a esas alturas de la noche, sin luz recorriendo un camino en solitario.",
//         opciones: {
//             A: "Le preguntas quién es",
//             B: "Le preguntas qué hay más adelante"
//         },
//         siguiente: {
//             A: "quienEs",
//             B: "queHay"
//         }
//     },
//     entrarCabaña: {
//         texto: "Ingresas en la cabaña, ves una hoguera encendida, con dos trozos de carne encima cocinándose.",
//     }
// };


const historia = {
    inicio: {
        texto: "Despiertas en una mazmorra oscura. Las paredes de piedra húmeda emiten un frío intenso. En una esquina, una antorcha parpadea débilmente, proyectando sombras inquietantes. Escuchas el goteo constante del agua en la distancia.",
        opciones: {
            A: "Exploras la mazmorra",
            B: "Sigues el sonido del agua"
        },
        siguiente: {
            A: "explorarMazmorra",
            B: "seguirAgua"
        }
    },
    explorarMazmorra: {
        texto: "Decides explorar la mazmorra. Después de unos pasos, encuentras una puerta pesada de madera. La abres con esfuerzo y descubres una sala repleta de libros y pergaminos antiguos.",
        opciones: {
            A: "Lees los pergaminos",
            B: "Sigues explorando"
        },
        siguiente: {
            A: "leerPergaminos",
            B: "seguirExplorando"
        }
    },
    seguirAgua: {
        texto: "Sigues el sonido del agua y llegas a una cámara subterránea. En el centro hay un pozo de agua cristalina. De repente, un ser acuático emerge del pozo, amenazante.",
        opciones: {
            A: "Te preparas para luchar",
            B: "Intentas comunicarte con el ser"
        },
        siguiente: {
            A: "lucharSerAcuatico",
            B: "comunicarSerAcuatico"
        }
    },
    leerPergaminos: {
        texto: "Empiezas a leer los pergaminos y descubres antiguos hechizos y mapas de la mazmorra. Aprendes un hechizo de protección que podría ser útil más adelante.",
        opciones: {
            A: "Usas el hechizo de protección",
            B: "Guardas el hechizo para más tarde"
        },
        siguiente: {
            A: "usarHechizo",
            B: "guardarHechizo"
        }
    },
    seguirExplorando: {
        texto: "Continuas explorando y encuentras una sala con un cofre misterioso en el centro. A tu lado, una puerta conduce a otro pasillo.",
        opciones: {
            A: "Abres el cofre",
            B: "Sigues por el pasillo"
        },
        siguiente: {
            A: "abrirCofre",
            B: "seguirPasillo"
        }
    },
    lucharSerAcuatico: {
        texto: "Te preparas para luchar contra el ser acuático. Lanza un ataque con sus tentáculos y tú respondes con tu arma.",
        combate: true,
        opciones: {
            A: "Atacar con la espada",
            B: "Usar un hechizo"
        },
        siguiente: {
            A: "ataqueExitoso",
            B: "ataqueFallido"
        }
    },
    comunicarSerAcuatico: {
        texto: "Intentas comunicarte con el ser. Hablas en voz baja y pausada. El ser parece calmarse, pero sigue observándote cautelosamente.",
        opciones: {
            A: "Ofreces una tregua",
            B: "Te preparas para luchar"
        },
        siguiente: {
            A: "tregua",
            B: "lucharSerAcuatico"
        }
    },
    usarHechizo: {
        texto: "Usas el hechizo de protección y sientes una barrera invisible que te rodea. Estás listo para continuar explorando.",
        opciones: {
            A: "Sigues explorando",
            B: "Vuelves a la sala anterior"
        },
        siguiente: {
            A: "seguirExplorando",
            B: "explorarMazmorra"
        }
    },
}

const mostrarHistoria = (clave) => {
    const nodoHistoria = historia[clave];
    let modalContent = `<p>${nodoHistoria.texto}</p>`;

    if (nodoHistoria.opciones) {
        for (let opcion in nodoHistoria.opciones) {
            modalContent += `<button type="button" class="optionBTN" data-opcion="${nodoHistoria.siguiente[opcion]}">${nodoHistoria.opciones[opcion]}</button>`;
        }
    }
    modal.innerHTML = modalContent;

    // Agrega el evento click a los botones generados
    document.querySelectorAll('.optionBTN').forEach(button => {
        button.addEventListener('click', (event) => {
            const nuevaClave = event.target.getAttribute('data-opcion');
            manejarOpcion(nuevaClave);
        });
    });
};

const manejarOpcion = (nuevaClave) => {
    mostrarHistoria(nuevaClave);
}

mostrarHistoria('inicio');

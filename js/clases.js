const clases = [
    {
        nombre: "Guerrero",
        descripcion: "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate. Además, están muy relacionados con la muerte, tanto repartiéndola como mirándola fijamente, desafiantes.",
        img: "../assets/images/guerrero.webp",
        vida: 10,
        armas: {
            arma1: "Espada larga",
            arma3: "Hacha"
        }
    },
    {
        nombre: "Mago",
        descripcion: "Los magos son los practicantes supremos de la magia, definidos y unidos como una clase por los hechizos que conjuran. A partir de la sutil onda de la magia que impregna el cosmos, los magos lanzan explosivos hechizos de fuego, estacas de hielo y bolas ácidas.",
        img: "../assets/images/mago.webp",
        vida: 6,
        armas: {
            arma1: "Bastón",
            arma2: "Daga"
        }
    },
    {
        nombre: "Brujo",
        descripcion: "Los brujos son buscadores del conocimiento que se encuentra escondido en el multiverso. A través de pactos hechos con seres poderosos de poder sobrenatural, los brujos desatan efectos mágicos tanto sutiles como espectaculares y recolectan secretos arcanos para potenciar su propio poder.",
        img: "../assets/images/brujo.webp",
        vida: 8,
        armas: {
            arma1: "Ballesta ligera",
            arma2: "Espada corta"
        },
    },
    {
        nombre: "Explorador",
        descripcion: "Lejos del bullicio de las ciudades y pueblos, más allá de las defensas que mantienen a las granjas más lejanas protegidas de los terrores de la naturaleza, en medio de tupidos bosques sin caminos y a través de enormes y vacías llanuras, los exploradores mantienen su interminable guardia.",
        img: "../assets/images/explorador.webp",
        vida: 10,
        armas: {
            arma1: "Arco",
            arma2: "Espada corta"
        },
    }
]

function elegirClase(clase) {
    for (let i = 0; i < clases.length; i++) {
        if (clases[i].nombre === clase) {
            return clases[i]
        }
    }
}

export {clases, elegirClase}
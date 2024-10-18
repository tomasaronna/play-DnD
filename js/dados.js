export const tiradaJugador = () => Math.floor(Math.random() * 20) + 1
export const tiradaDM = () => Math.floor(Math.random() * 20) + 1

let resultado_dado_jugador
let resultado_dado_DM
let daño
let dañoMax = 5
let dañoMin = 1


function evaluarTirada() {
    const resultado_jugador = tiradaJugador();
    const resultado_DM = tiradaDM();

    if (resultado_jugador === 1) {
        resultado_dado_jugador = "Pifia";
    } else if (resultado_jugador === 20) {
        resultado_dado_jugador = "Crítico";
        daño = dañoMax
    } else {
        resultado_dado_jugador = resultado_jugador;
        if(resultado_jugador <= 5){
            daño = dañoMin
        } else if(resultado_jugador > 5 && resultado_jugador <= 10){
            daño = 2
        } else if(resultado_jugador > 10 && resultado_jugador <=15){
            daño = 3
        } else if(resultado_jugador > 15 && resultado_jugador <= 19){
            daño = 4
        }
    }

    if (resultado_DM === 1) {
        resultado_dado_DM = "Pifia";
    } else if (resultado_DM === 20) {
        resultado_dado_DM = "Crítico";
        daño = dañoMax
    } else {
        resultado_dado_DM = resultado_DM;
    }
    if(resultado_jugador <= 5){
        daño = dañoMin
    } else if(resultado_DM > 5 && resultado_DM <= 10){
        daño = 2
    } else if(resultado_DM > 10 && resultado_DM <=15){
        daño = 3
    } else if(resultado_DM > 15 && resultado_DM <= 19){
        daño = 4
    }
}
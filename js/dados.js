const tiradaJugador = () => Math.floor(Math.random() * 20) + 1;
const tiradaDM = () => Math.floor(Math.random() * 20) + 1;

let resultado_dado_jugador;
let resultado_dado_DM;
let dañoJugador;
let dañoDM;
const dañoMax = 5;
const dañoMin = 1;

function calcularDaño(tirada) {
    if (tirada === 1) {
        return 0;
    } else if (tirada === 20) {
        return dañoMax;
    } else if (tirada <= 5) {
        return dañoMin;
    } else if (tirada > 5 && tirada <= 10) {
        return 2;
    } else if (tirada > 10 && tirada <= 15) {
        return 3;
    } else if (tirada > 15 && tirada <= 19) {
        return 4;
    }
}

function evaluarTirada() {
    const resultado_jugador = tiradaJugador();
    const resultado_DM = tiradaDM();

    if (resultado_jugador === 1) {
        resultado_dado_jugador = "Pifia";
        dañoJugador = 0;
    } else if (resultado_jugador === 20) {
        resultado_dado_jugador = "Crítico";
        dañoJugador = dañoMax;
    } else {
        resultado_dado_jugador = resultado_jugador;
        dañoJugador = calcularDaño(resultado_jugador);
    }


    if (resultado_DM === 1) {
        resultado_dado_DM = "Pifia";
        dañoDM = 0;
    } else if (resultado_DM === 20) {
        resultado_dado_DM = "Crítico";
        dañoDM = dañoMax;
    } else {
        resultado_dado_DM = resultado_DM;
        dañoDM = calcularDaño(resultado_DM);
    }
}

function combate() {
    console.log("Comienza el combate:");
    evaluarTirada();
}

const mostrar_tirada_jugador = () => modal.innerText = `Tirada del jugador: ${resultado_dado_jugador}, Daño infligido: ${dañoJugador}`
const mostrar_tirada_DM = () => modal.innerText = `Tirada del DM: ${resultado_dado_DM}, Daño infligido: ${dañoDM}`;
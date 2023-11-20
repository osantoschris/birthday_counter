import Countdown from "./coutndown.js";

const tempoParaOWWB = new Countdown("01 december 2023 07:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOWWB.total[index];
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);

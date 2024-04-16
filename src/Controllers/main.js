import { Convertidor } from './convertidor.js';

function convertirAPrefijo() {
    const infijoExpresion = document.getElementById("infijoExpresion").value;
    const convertidor = new Convertidor();
    const prefijoExpresion = convertidor.infijoAPrefijo(infijoExpresion);
    document.getElementById("prefijoResultado").textContent = prefijoExpresion;
}

document.getElementById("convertirBoton").addEventListener("click", convertirAPrefijo);

import { Pila } from '../models/Pila.js';

export class Convertidor {
    constructor() {
        this.precedencia = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '^': 3
        };
    }

    esOperador(char) {
        return this.precedencia.hasOwnProperty(char);
    }

    infijoAPrefijo(infijo) {
        let prefijo = '';
        const pila = new Pila();

        for (let i = infijo.length - 1; i >= 0; i--) {
            const char = infijo[i];

            if (this.esOperador(char)) {
                while (!pila.isEmpty() && this.precedencia[pila.peek()] > this.precedencia[char]) {
                    prefijo = pila.pop() + prefijo;
                }
                pila.push(char);
            } else if (char === ')') {
                pila.push(char);
            } else if (char === '(') {
                while (!pila.isEmpty() && pila.peek() !== ')') {
                    prefijo = pila.pop() + prefijo;
                }
                pila.pop(); 
            } else {
                prefijo = char + prefijo;
            }
        }

        while (!pila.isEmpty()) {
            prefijo = pila.pop() + prefijo;
        }

        return prefijo;
    }
}

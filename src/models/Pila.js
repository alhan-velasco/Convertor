import { Nodo } from './Nodo.js';

export class Pila {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const nuevoNodo = new Nodo(element);
        nuevoNodo.next = this.top;
        this.top = nuevoNodo;
        this.size++;
    }

    pop() {
        if (!this.isEmpty()) {
            const nodoEliminado = this.top;
            this.top = this.top.next;
            this.size--;
            return nodoEliminado.data;
        } else {
            return "Subdesbordamiento"; 
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        } else {
            return null; 
        }
    }

    isEmpty() {
        return this.size === 0;
    }
}

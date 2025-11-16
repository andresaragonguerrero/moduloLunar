export class Spaceman {
    constructor(identificador, nombreCompleto, edad) {
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }
    DameIdentificador() {
        return this.identificador;
    }
    DameNombreCompleto() {
        return this.nombreCompleto;
    }
    DameEdad() {
        return this.edad;
    }
}

interface IPilotable {
    DameIdentificador() : string;
    DameNombreCompleto() : string;
    DameEdad() : number;
}

export class Spaceman implements IPilotable {
    identificador: string;
    nombreCompleto: string;
    edad: number;
    constructor(identificador: string, nombreCompleto: string, edad: number) {
        this.identificador = identificador;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }

    DameIdentificador(): string {
        return this.identificador;
    }

    DameNombreCompleto(): string {
        return this.nombreCompleto;
    }
    
    DameEdad(): number {
        return this.edad;
    }
}
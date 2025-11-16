import { Spaceman } from "./spaceman.js";
import { Mineral } from "./mineral.js";
import { IRockValidator } from "./validators.js";

export interface IEntrada {
    dameRoca(): Mineral;
}

export interface ISalida {
    muestra(mineral: Mineral, valida: boolean): void;
}

export class Mission {
    piloto: Spaceman;
    mision: IRockValidator;
    entrada: IEntrada;
    salida: ISalida;

    constructor(piloto: Spaceman, mision: IRockValidator, entrada: IEntrada, salida: ISalida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }

    Analiza(miRoca?: Mineral): boolean {
        const roca = miRoca ?? this.entrada.dameRoca();
        const valida = this.mision.validate(roca);
        this.salida.muestra(roca, valida);
        return valida;
    }
}
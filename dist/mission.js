export class Mission {
    constructor(piloto, mision, entrada, salida) {
        this.piloto = piloto;
        this.mision = mision;
        this.entrada = entrada;
        this.salida = salida;
    }
    Analiza(miRoca) {
        const roca = miRoca !== null && miRoca !== void 0 ? miRoca : this.entrada.dameRoca();
        const valida = this.mision.validate(roca);
        this.salida.muestra(roca, valida);
        return valida;
    }
}

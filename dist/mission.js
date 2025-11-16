export class Mission {
    constructor(spaceman, validator, outputFormatter) {
        this.spaceman = spaceman;
        this.validator = validator;
        this.outputFormatter = outputFormatter;
    }
    Analiza(mineral) {
        const isValid = this.validator.validate(mineral);
        if (isValid) {
            console.log(`spaceman: ${this.spaceman.DameNombreCompleto()} (${this.spaceman.DameIdentificador()})`);
            console.log(this.outputFormatter.format(mineral));
        }
        else {
            console.log(`Mineral ${mineral.name} no cumple la misión.`);
        }
    }
}

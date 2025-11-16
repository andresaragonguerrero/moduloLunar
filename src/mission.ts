import { Spaceman } from "./spaceman.js";
import { Mineral } from "./mineral.js";
import { IRockValidator } from "./validators.js";
import { IOutputFormatter } from "./outputFormatter.js";

export class Mission {
    spaceman: Spaceman;
    validator: IRockValidator;
    outputFormatter: IOutputFormatter;

    constructor(
        spaceman: Spaceman,
        validator: IRockValidator,
        outputFormatter: IOutputFormatter
    ) {
        this.spaceman = spaceman;
        this.validator = validator;
        this.outputFormatter = outputFormatter;
    }

    Analiza(mineral: Mineral) {
        const isValid = this.validator.validate(mineral);
        if (isValid) {
            console.log(`spaceman: ${this.spaceman.DameNombreCompleto()} (${this.spaceman.DameIdentificador()})`);
            console.log(this.outputFormatter.format(mineral));
        } else {
            console.log(`Mineral ${mineral.name} no cumple la misión.`);
        }
    }
}

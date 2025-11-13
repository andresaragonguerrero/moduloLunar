interface ICollectible {
    validate(): boolean;
}

interface IEnterableSystem {}

interface IExitableSystem {}

interface IValidatable {}

export class Mineral implements ICollectible {
    identifier: string;
    name: string;
    origin: string;
    hardness: number;
    grainSize: number;
    classification: string;
    crystalSize: number;
    formationTemperature: number;
    structure: string;
    grainForm: string;
    texture: string;
    constructor(
        identifier: string,
        name: string,
        origin: string,
        hardness: number,
        grainSize: number,
        classification: string,
        crystalSize: number,
        formationTemperature: number,
        structure: string,
        grainForm: string,
        texture: string) {

        // validaciones
        if (!identifierValidation(identifier)) throw new Error("Identifier format is invalid");
        if (!originValidation(origin)) throw new Error("Origin must be 'Igneous', 'Sedimentary', or 'Metamorphic'");
        if (!hardnessValidation(hardness)) throw new Error("Hardness must be between 1 and 10");
        if (!grainSizeValidation(grainSize)) throw new Error("Grain size is invalid");
        if (!classificationValidation(classification)) throw new Error("Classification is invalid");
        if (!crystalSizeValidation(crystalSize)) throw new Error("Crystal size must be between 1 and 10");
        if (!formationTemperatureValidation(formationTemperature)) throw new Error("Formation temperature must be between -100 and 100 degrees Kelvin");
        if (!textureValidation(texture)) throw new Error("Texture must be 'glassy', 'aphanitic', or 'phaneritic'");


        this.identifier = identifier;
        this.name = name;
        this.origin = origin;
        this.hardness = hardness;
        this.grainSize = grainSize;
        this.classification = classification;
        this.crystalSize = crystalSize;
        this.formationTemperature = formationTemperature;
        this.structure = structure;
        this.grainForm = grainForm;
        this.texture = texture;
    }

    validate(): boolean {
        return identifierValidation(this.identifier) &&
            originValidation(this.origin) &&
            hardnessValidation(this.hardness) &&
            grainSizeValidation(this.grainSize) &&
            classificationValidation(this.classification) &&
            crystalSizeValidation(this.crystalSize) &&
            formationTemperatureValidation(this.formationTemperature) &&
            textureValidation(this.texture);
    }
}

function identifierValidation(identifier: string): boolean {
    const Regex: RegExp = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
    return Regex.test(identifier);
}

function originValidation(origin: string): boolean {
    return origin === "Igneous" || origin === "Sedimentary" || origin === "Metamorphic";
}

function hardnessValidation(hardness: number): boolean {
    return hardness >= 1 && hardness <= 10;
}

function grainSizeValidation(grainSize: number): boolean {
    return grainSize >= 0 && grainSize < 30; // ajusta según tu criterio de grano
}

function classificationValidation(classification: string): boolean {
    const valid = ["construction", "ornamental", "toolmaking", "crushed"];
    return valid.includes(classification);
}

function crystalSizeValidation(crystalSize: number): boolean {
    return crystalSize >= 1 && crystalSize <= 10;
}

function formationTemperatureValidation(formationTemperature: number): boolean {
    return formationTemperature >= -100 && formationTemperature <= 100;
}

function textureValidation(texture: string): boolean {
    return texture === "glassy" || texture === "aphanitic" || texture === "phaneritic";
}

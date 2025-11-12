class Mineral {
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
        if (grainSizeValidation(grainSize) === "Valor de grano no válido") throw new Error("Grain size is invalid");
        if (classificationValidation(classification) === "Valor de clasificación no válido") throw new Error("Classification is invalid");
        if (!crystalSizeValidation(crystalSize)) throw new Error("Crystal size must be between 1 and 10");
        if (!formationTemperatureValidation(formationTemperature)) throw new Error("Formation temperature must be between -1000 and 1000 degrees Kelvin");
        if (!textureValidation(texture)) throw new Error("Texture must be 'Glassy', 'Aphanitic', or 'Phaneritic'");

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
}

function identifierValidation(identifier: string): boolean {
    const Regex: RegExp = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
    if (Regex.test(identifier)) {
        return true;
    } else {
        return false;
    }
}

function originValidation(origin: string): boolean {
    if (origin === "Igneous" || origin === "Sedimentary" || origin === "Metamorphic") {
        return true;
    } else {
        return false;
    }
}

function hardnessValidation(hardness: number): boolean {
    if (hardness >= 1 && hardness <= 10) {
        return true;
    } else {
        return false;
    }
}

function grainSizeValidation(grainSize: number): string {
    if (grainSize < 2) {
        return "Grano fino";
    } else if (grainSize >= 2 && grainSize < 5) {
        return "Grano medio";
    } else if (grainSize >= 5 && grainSize < 30) {
        return "Grano grueso";
    } else if (grainSize >= 30) {
        return "Grano muy grueso";
    } else {
        return "Valor de grano no válido";
    }
}

function classificationValidation(classification: string): string {
    const valid = ["Rocas de construcción", "Rocas ornamentales", "Rocas de uso en utensilios", "Piedras machacadas"];
    if (valid.includes(classification)) return classification;
    throw new Error("Invalid classification");
}

function crystalSizeValidation(crystalSize: number): boolean {
    if (crystalSize >= 1 && crystalSize <= 10) {
        return true;
    } else {
        return false;
    }
}

function formationTemperatureValidation(formationTemperature: number): boolean {
    if (formationTemperature >= -1000 && formationTemperature <= 1000) {
        return true;
    } else {
        return false;
    }
}

function textureValidation(texture: string): boolean {
    if (texture === "Glassy" || texture === "Aphanitic" || texture === "Phaneritic") {
        return true;
    } else {
        return false;
    }
}
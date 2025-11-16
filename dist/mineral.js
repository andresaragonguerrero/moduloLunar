export class Mineral {
    constructor(identifier, name, origin, hardness, grainSize, classification, crystalSize, formationTemperature, structure, grainForm, texture) {
        // validaciones
        if (!identifierValidation(identifier))
            throw new Error("Identifier format is invalid");
        if (!originValidation(origin))
            throw new Error("Origin must be 'Igneous', 'Sedimentary', or 'Metamorphic'");
        if (!hardnessValidation(hardness))
            throw new Error("Hardness must be between 1 and 10");
        if (!grainSizeValidation(grainSize))
            throw new Error("Grain size is invalid");
        if (!classificationValidation(classification))
            throw new Error("Classification is invalid");
        if (!crystalSizeValidation(crystalSize))
            throw new Error("Crystal size must be between 1 and 10");
        if (!formationTemperatureValidation(formationTemperature))
            throw new Error("Formation temperature must be between -100 and 100 degrees Kelvin");
        if (!textureValidation(texture))
            throw new Error("Texture must be 'glassy', 'aphanitic', or 'phaneritic'");
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
    validate() {
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
function identifierValidation(identifier) {
    const Regex = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
    return Regex.test(identifier);
}
function originValidation(origin) {
    return origin === "igneous" || origin === "sedimentary" || origin === "metamorphic";
}
function hardnessValidation(hardness) {
    return hardness > 0 && hardness <= 10;
}
function grainSizeValidation(grainSize) {
    return grainSize >= 1 && grainSize <= 30;
}
function classificationValidation(classification) {
    const valid = ["construction", "ornamental", "toolmaking", "crushed"];
    return valid.includes(classification);
}
function crystalSizeValidation(crystalSize) {
    return crystalSize >= 1 && crystalSize <= 10;
}
function formationTemperatureValidation(formationTemperature) {
    return formationTemperature >= -100 && formationTemperature <= 100;
}
function textureValidation(texture) {
    return texture === "glassy" || texture === "aphanitic" || texture === "phaneritic";
}

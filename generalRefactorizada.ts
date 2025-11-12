// class Mineral {
//     identifier: string;
//     name: string;
//     origin: string;
//     hardness: number;
//     grainSize: string;
//     classification: string;
//     crystalSize: number;
//     formationTemperature: number;
//     structure: string;
//     grainForm: string;
//     texture: string;

//     constructor(
//         identifier: string,
//         name: string,
//         origin: string,
//         hardness: number,
//         grainSize: number,
//         classification: string,
//         crystalSize: number,
//         formationTemperature: number,
//         structure: string,
//         grainForm: string,
//         texture: string
//     ) {
//         // Validaciones
//         if (!identifierValidation(identifier))
//             throw new Error("Identifier format is invalid (LLDDDDLL)");
//         if (!originValidation(origin))
//             throw new Error("Origin must be 'Igneous', 'Sedimentary', or 'Metamorphic'");
//         if (!hardnessValidation(hardness))
//             throw new Error("Hardness must be between 1 and 10");
//         if (!crystalSizeValidation(crystalSize))
//             throw new Error("Crystal size must be between 1 and 10");
//         if (!formationTemperatureValidation(formationTemperature))
//             throw new Error("Formation temperature must be between -1000 and 1000 K");
//         if (!textureValidation(texture))
//             throw new Error("Texture must be 'Glassy', 'Aphanitic', or 'Phaneritic'");

//         // Validaciones que devuelven valores normalizados
//         this.identifier = identifier;
//         this.name = name;
//         this.origin = origin;
//         this.hardness = hardness;
//         this.grainSize = grainSizeValidation(grainSize);
//         this.classification = classificationValidation(classification);
//         this.crystalSize = crystalSize;
//         this.formationTemperature = formationTemperature;
//         this.structure = structure;
//         this.grainForm = grainForm;
//         this.texture = texture;
//     }
// }

// // ------------------- Funciones de validación -------------------

// function identifierValidation(identifier: string): boolean {
//     return /^[A-Z]{2}\d{4}[A-Z]{2}$/.test(identifier);
// }

// function originValidation(origin: string): boolean {
//     return ["Igneous", "Sedimentary", "Metamorphic"].includes(origin);
// }

// function hardnessValidation(hardness: number): boolean {
//     return hardness >= 1 && hardness <= 10;
// }

// function grainSizeValidation(grainSize: number): string {
//     if (grainSize < 2) return "Fine";
//     if (grainSize >= 2 && grainSize < 5) return "Medium";
//     if (grainSize >= 5 && grainSize < 30) return "Coarse";
//     if (grainSize >= 30) return "Very coarse";
//     throw new Error("Invalid grain size");
// }

// function classificationValidation(classification: string): string {
//     const valid = [
//         "Rocas de construcción",
//         "Rocas ornamentales",
//         "Rocas de uso en utensilios",
//         "Piedras machacadas"
//     ];
//     if (valid.includes(classification)) return classification;
//     throw new Error("Invalid classification");
// }

// function crystalSizeValidation(crystalSize: number): boolean {
//     return crystalSize >= 1 && crystalSize <= 10;
// }

// function formationTemperatureValidation(formationTemperature: number): boolean {
//     return formationTemperature >= -1000 && formationTemperature <= 1000;
// }

// function textureValidation(texture: string): boolean {
//     return ["Glassy", "Aphanitic", "Phaneritic"].includes(texture);
// }

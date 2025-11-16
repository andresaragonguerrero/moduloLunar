import { Mineral } from "./mineral.js";

export interface IOutputFormatter {
    format(mineral: Mineral): string
}

export class AmericanFormatter implements IOutputFormatter {
    format(mineral: Mineral): string {
        const temperatureF = mineral.formationTemperature * 9 / 5 + 32;
        return `
        Identifier: ${mineral.identifier}
        Name: ${mineral.name}
        Origin: ${mineral.origin}
        Hardness: ${mineral.hardness}
        Grain Size: ${mineral.grainSize}
        Crystal Size: ${mineral.crystalSize}
        Classification: ${mineral.classification}
        Formation Temperature: ${temperatureF} °F
        Texture: ${mineral.texture}
        `;
    }
}

export class EuropeanFormatter implements IOutputFormatter {
    format(mineral: Mineral): string {
        return `
        Identificador: ${mineral.identifier}
        Nombre: ${mineral.name}
        Origen: ${mineral.origin}
        Dureza: ${mineral.hardness}
        Tamaño de grano: ${mineral.grainSize}
        Tamaño de cristal: ${mineral.crystalSize}
        Clasificación: ${mineral.classification}
        Temperatura de formación: ${mineral.formationTemperature} °C
        Textura: ${mineral.texture}
        `;
    }
}

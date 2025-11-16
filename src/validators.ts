import { Mineral } from "./mineral.js";
import { classifyGrainSize } from "./grainClassifier.js";

export interface IRockValidator {
    validate(mineral: Mineral): boolean;
}

export class IgneousValidator implements IRockValidator {
    validate(m: Mineral): boolean {
        return (
            m.origin === "igneous" &&
            classifyGrainSize(m.grainSize) === "muy-grueso"
        );
    }
}

export class MetamorphicValidator implements IRockValidator {
    validate(m: Mineral): boolean {
        return (
            m.origin === "metamorphic" &&
            (classifyGrainSize(m.grainSize) === "medio" ||
                classifyGrainSize(m.grainSize) === "fino") &&
            m.texture === "glassy"
        );
    }
}

export class SedimentaryValidator implements IRockValidator {
    validate(m: Mineral): boolean {
        return (
            m.origin === "sedimentary" &&
            m.texture === "phaneritic"
        );
    }
}
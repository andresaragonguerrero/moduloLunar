import { classifyGrainSize } from "./grainClassifier.js";
export class IgneousValidator {
    validate(m) {
        return (m.origin === "igneous" &&
            classifyGrainSize(m.grainSize) === "muy-grueso");
    }
}
export class MetamorphicValidator {
    validate(m) {
        return (m.origin === "metamorphic" &&
            (classifyGrainSize(m.grainSize) === "medio" ||
                classifyGrainSize(m.grainSize) === "fino") &&
            m.texture === "glassy");
    }
}
export class SedimentaryValidator {
    validate(m) {
        return (m.origin === "sedimentary" &&
            m.texture === "phaneritic");
    }
}

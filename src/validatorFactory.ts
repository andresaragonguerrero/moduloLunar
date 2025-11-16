import { IRockValidator, IgneousValidator, MetamorphicValidator, SedimentaryValidator } from "./validators.js";

export class ValidatorFactory {
    static getValidator(origin: string): IRockValidator | null {
        switch (origin.toLowerCase()) {
            case "igneous":
                return new IgneousValidator();
            case "metamorphic":
                return new MetamorphicValidator();
            case "sedimentary":
                return new SedimentaryValidator();
            default:
                return null;
        }
    }
}
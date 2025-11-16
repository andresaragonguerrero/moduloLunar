export function classifyGrainSize(value: number): "muy-grueso" | "grueso" | "medio" | "fino" {
    if (value >= 25) return "muy-grueso";
    if (value >= 15) return "grueso";
    if (value >= 5) return "medio";
    return "fino";
}
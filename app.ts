import { Mineral } from './mineral.js';

const form = document.getElementById('form-mineral');

// event listeners
form?.addEventListener('submit', function (event) {
    event.preventDefault();

    // get every DOM element
    const inputIdentifier = document.getElementById('identifier') as HTMLInputElement;
    const inputName = document.getElementById('mineralName') as HTMLInputElement;
    const inputHardness = document.getElementById('hardness') as HTMLInputElement;
    const inputGrainSize = document.getElementById('grainSize') as HTMLInputElement;
    const inputCrystalSize = document.getElementById('crystalSize') as HTMLInputElement;
    const inputFormationTemperature = document.getElementById('formationTemperature') as HTMLInputElement;

    const inputOrigin = document.querySelector<HTMLInputElement>('input[name="mineralOrigin"]:checked');
    const inputClassification = document.querySelector<HTMLInputElement>('input[name="classification"]:checked');
    const inputTexture = document.querySelector<HTMLInputElement>('input[name="texture"]:checked');

    // get values
    const identifier = inputIdentifier.value;
    const mineralName = inputName.value;
    const mineralOrigin = capitalize(inputOrigin?.value || '');
    const hardness = Number.parseInt(inputHardness.value);
    const grainSize = Number.parseFloat(inputGrainSize.value);
    const crystalSize = Number.parseFloat(inputCrystalSize.value);
    const classification = inputClassification?.value || '';
    const formationTemperature = Number.parseFloat(inputFormationTemperature.value);
    const texture = inputTexture?.value || '';
    const structure = '';
    const grainForm = '';

    function capitalize(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    // inputIdentifier.addEventListener('input', function () { });
    // inputName.addEventListener('input', function () { });
    // inputClassification?.addEventListener('input', function () { });
    // inputFormationTemperature.addEventListener('input', function () { });
    // inputOrigin?.addEventListener('input', function () { });
    // inputHardness.addEventListener('input', function () { });
    // inputGrainSize.addEventListener('input', function () { });
    // inputCrystalSize.addEventListener('input', function () { });
    // inputTexture?.addEventListener('input', function () { });

    console.log('Form submitted');
});

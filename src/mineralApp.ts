import { Mineral } from './mineral.js';
import { ValidatorFactory } from "./validatorFactory.js";
import { AmericanFormatter, EuropeanFormatter } from "./outputFormatter.js";

const form = document.getElementById('form-mineral');

// Event listener
form?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los elementos del DOM
  const inputIdentifier = document.getElementById('identifier') as HTMLInputElement;
  const inputName = document.getElementById('mineralName') as HTMLInputElement;
  const inputHardness = document.getElementById('hardness') as HTMLInputElement;
  const inputGrainSize = document.getElementById('grainSize') as HTMLInputElement;
  const inputCrystalSize = document.getElementById('crystalSize') as HTMLInputElement;
  const inputFormationTemperature = document.getElementById('formationTemperature') as HTMLInputElement;

  const inputOrigin = document.querySelector<HTMLInputElement>('input[name="mineralOrigin"]:checked');
  const inputClassification = document.querySelector<HTMLInputElement>('input[name="classification"]:checked');
  const inputTexture = document.querySelector<HTMLInputElement>('input[name="texture"]:checked');

  // Obtener valores
  const identifier = inputIdentifier.value;
  const mineralName = inputName.value;
  const mineralOrigin = inputOrigin?.value.toLowerCase() || '';
  const hardness = Number.parseInt(inputHardness.value);
  const grainSize = Number.parseFloat(inputGrainSize.value);
  const crystalSize = Number.parseFloat(inputCrystalSize.value);
  const classification = inputClassification?.value || '';
  const formationTemperature = Number.parseFloat(inputFormationTemperature.value);
  const texture = inputTexture?.value || '';
  const structure = '';
  const grainForm = '';

  // Crear objeto Mineral
  const mineral = new Mineral(
    identifier,
    mineralName,
    mineralOrigin,
    hardness,
    grainSize,
    classification,
    crystalSize,
    formationTemperature,
    structure,
    grainForm,
    texture
  );

  // Validación
  const validator = ValidatorFactory.getValidator(mineralOrigin);
  const isValid = validator ? validator.validate(mineral) : false;

  // Formateo de salida
  const selectOutput = document.getElementById('outputFormat') as HTMLSelectElement;
  const selectedFormat = selectOutput.value;

  let formatter;
  if (selectedFormat === 'american') formatter = new AmericanFormatter();
  else formatter = new EuropeanFormatter();

  const output = formatter.format(mineral);
  const smiley = `<svg class="smiley-image" fill="currentColor" width="120px" height="120px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g data-name="Layer 3" id="Layer_3">
    <path d="M42,28a6,6,0,1,1,6-6A6,6,0,0,1,42,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,42,18ZM22,28a6,6,0,1,1,6-6A6,6,0,0,1,22,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,22,18ZM48.14,36.22l.53-.47a1,1,0,0,0-1.34-1.5l-.53.49C44.21,37.08,39.88,41,32,41s-12.21-3.92-14.8-6.26l-.53-.49a1,1,0,1,0-1.34,1.5l.53.47C18.66,38.75,23.35,43,32,43S45.34,38.75,48.14,36.22ZM32,61A29,29,0,1,1,61,32,29,29,0,0,1,32,61ZM32,5A27,27,0,1,0,59,32,27,27,0,0,0,32,5Z"/>
    </g>
    </svg>`;

  const disappointed = `<svg class="disappointed-image" fill="currentColor" width="120px" height="120px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g data-name="Layer 40" id="Layer_40">
    <path d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3Zm0,56A27,27,0,1,1,59,32,27,27,0,0,1,32,59ZM22,28a6,6,0,0,0,5.91-5H28a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2h3.09A6,6,0,0,0,22,28Zm3.86-5a4,4,0,0,1-7.72,0ZM43.6,41.4a1,1,0,0,1-.2,1.4,1,1,0,0,1-.6.2,1,1,0,0,1-.8-.4C39.58,39.37,31.16,32,21.45,36.89a1,1,0,0,1-.9-1.78C30.33,30.22,39.69,36.19,43.6,41.4ZM51,21H35a1,1,0,0,0,0,2h4.09a6,6,0,0,0,11.82,0H51a1,1,0,0,0,0-2Zm-6,5a4,4,0,0,1-3.86-3h7.72A4,4,0,0,1,45,26Z"/>
    </g>
    </svg>`;

  // const responseSection = document.querySelector('.response-section') as HTMLElement;
  form.innerHTML = isValid
    ? `<div class="output-container">${smiley}<p class="output-info">${output}</p></div>`
    : `<div class="output-container">${disappointed}<p class="output-info">${output}</p></div>`;
});
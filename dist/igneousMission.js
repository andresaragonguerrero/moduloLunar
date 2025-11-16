import { Spaceman } from "./spaceman.js";
import { Mission } from "./mission.js";
import { IgneousValidator } from "./validators.js";
import { AmericanFormatter } from "./outputFormatter.js";
import { Mineral } from "./mineral.js";
const agmunsen = new Spaceman("AG0011XZ", "Roald Agmunsen", 42);
const igneousValidator = new IgneousValidator();
const americanFormatter = new AmericanFormatter();
const MisionIgnea = new Mission(agmunsen, igneousValidator, americanFormatter);
// cumple
const rocaValida = new Mineral("R0011AB", "Granito", "igneous", 6, 30, "construction", 2, 80, "", "", "phaneritic");
// no cumple
const rocaInvalida = new Mineral("R0022CD", "Caliza", "sedimentary", 4, 3, "crushed", 1, 20, "", "", "phaneritic");
MisionIgnea.Analiza(rocaValida);
MisionIgnea.Analiza(rocaInvalida);

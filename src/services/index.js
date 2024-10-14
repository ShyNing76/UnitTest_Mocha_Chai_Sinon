import PythagoreanModel from "../models/pytagorean.js";

export class PythagoreanService {
    static calculateHypotenuse(sideA, sideB) {
        return PythagoreanModel.calculateHypotenuse(sideA, sideB);
    }
    static calculateHypotenuseAsync(sideA, sideB) {
        return PythagoreanModel.calculateHypotenuseAsync(sideA, sideB);
    }
}

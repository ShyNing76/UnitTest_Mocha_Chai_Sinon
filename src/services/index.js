import PythagoreanModel from "../models/pytagorean.js";

export class PythagoreanService {
    static calculateHypotenuse(sideA, sideB) {
        return PythagoreanModel.calculateHypotenuse(sideA, sideB);
    }
}

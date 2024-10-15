import PythagoreanModel from "../models/pythagorean.model.js";

class PythagoreanService {
    static calculateHypotenuse(sideA, sideB) {
        return PythagoreanModel.calculateHypotenuse(sideA, sideB);
    }
}

export default PythagoreanService;

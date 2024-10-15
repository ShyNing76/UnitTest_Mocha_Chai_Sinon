import TriangleModel from "../models/triangle.model.js";

class TriangleService {
    static calculateHypotenuse(base, height) {
        return TriangleModel.calculateHypotenuse(base, height);
    }
}

export default TriangleService;

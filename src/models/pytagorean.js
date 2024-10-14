class PythagoreanModel {
    static calculateHypotenuse(a, b) {
        if (a <= 0 || b <= 0) throw new Error("Sides must be positive numbers");
        if (typeof a !== "number" || typeof b !== "number")
            throw new Error("Sides must be numbers");
        return Math.sqrt(a * a + b * b);
    }
}

export default PythagoreanModel;

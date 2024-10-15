class TriangleModel {
    static calculateHypotenuse(base, height) {
        if (base <= 0 || height <= 0)
            throw new Error("Base and height must be positive numbers");
        if (typeof base !== "number" || typeof height !== "number")
            throw new Error("Base and height must be numbers");

        return Math.sqrt(base * base + height * height);
    }
}

export default TriangleModel;

class PythagoreanModel {
    static calculateHypotenuse(a, b) {
        if (a <= 0 || b <= 0) throw new Error("Sides must be positive numbers");
        if (typeof a !== "number" || typeof b !== "number")
            throw new Error("Sides must be numbers");
        return Math.sqrt(a * a + b * b);
    }
       static calculateHypotenuseAsync(a, b) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(this.calculateHypotenuse(a, b));
                } catch (error) {
                    reject(error);
                }
            }, 3000);
        });
    }
}

export default PythagoreanModel;

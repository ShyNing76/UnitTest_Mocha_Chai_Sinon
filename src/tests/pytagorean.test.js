import { expect } from "chai";
import { PythagoreanService } from "../services/index.js";

describe("PythagoreanService", () => {
    describe("calculateHypotenuse", () => {
        it("should return the hypotenuse of a right-angled triangle", () => {
            const result = PythagoreanService.calculateHypotenuse(3, 4);
            expect(result).to.equal(5);
        });
        it("should throw an error if the sides are not positive numbers", () => {
            expect(() => PythagoreanService.calculateHypotenuse(0, 4)).to.throw(
                "Sides must be positive numbers"
            );
        });
        it("should throw an error if the sides are not numbers", () => {
            expect(() =>
                PythagoreanService.calculateHypotenuse(3, "4")
            ).to.throw("Sides must be numbers");
        });
    });
});

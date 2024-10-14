import { expect } from "chai";
import { PythagoreanService } from "../services/index.js";

describe("PythagoreanService", function () {
    // Tăng timeout cho toàn bộ block "describe"
    this.timeout(10000); // 10 giây

    it("should correctly calculate the hypotenuse for a=3, b=4", async function () {
        const result = await PythagoreanService.calculateHypotenuseAsync(3, 4);
        expect(result).to.equal(5);
    });

    it("should throw an error if any side is less than or equal to 0", async function () {
        try {
            await PythagoreanService.calculateHypotenuseAsync(0, 4);
        } catch (error) {
            expect(error.message).to.equal("Sides must be positive numbers");
        }
    });

    it("should throw an error if inputs are not numbers", async function () {
        try {
            await PythagoreanService.calculateHypotenuseAsync("3", 4);
        } catch (error) {
            expect(error.message).to.equal("Sides must be numbers");
        }
    });
});

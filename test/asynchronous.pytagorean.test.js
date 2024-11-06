import assert from "assert";
import { PythagoreanService } from "../src/services/asynchronous.pythagorean.service.js";

describe("PythagoreanService", function () {
    // Tăng timeout cho toàn bộ block "describe"
    this.timeout(10000); // 10 giây

    it("should correctly calculate the hypotenuse for a=3, b=4", async function () {
        const result = await PythagoreanService.calculateHypotenuseAsync(3, 4);
        assert.strictEqual(result, 5);
    });

    it("should throw an error if any side is less than or equal to 0", async function () {
        try {
            await PythagoreanService.calculateHypotenuseAsync(0, 4);
        } catch (error) {
            assert.strictEqual(error.message, "Sides must be positive numbers");
        }
    });

    it("should throw an error if inputs are not numbers", async function () {
        try {
            await PythagoreanService.calculateHypotenuseAsync("3", 4);
        } catch (error) {
            assert.strictEqual(error.message, "Sides must be numbers");
        }
    });

    it("should throw an error if inputs are not numbers", async function () {
        try {
            await PythagoreanService.calculateHypotenuseAsync(3, "4");
        } catch (error) {
            assert.strictEqual(error.message, "Sides must be numbers");
        }
    });


});

import assert from "assert";
import sinon from "sinon";
import TriangleModel from "../src/models/triangle.model.js";
import TriangleService from "../src/services/triangle.service.js";

describe("TriangleService", () => {
    describe("calculateHypotenuse", () => {
        it("should call TriangleModel.calculateHypotenuse and return the correct result", () => {
            const base = 3;
            const height = 4;
            const hypotenuse = 5; // Giả sử kết quả trả về

            // Mock TriangleModel.calculateHypotenuse
            const calculateHypotenuseStub = sinon
                .stub(TriangleModel, "calculateHypotenuse")
                .returns(hypotenuse);

            const result = TriangleService.calculateHypotenuse(base, height);

            // Kiểm tra hàm calculateHypotenuse của model được gọi
            assert(calculateHypotenuseStub.calledOnceWith(base, height));

            // Kiểm tra kết quả trả về
            assert(result === hypotenuse);

            // Khôi phục hàm gốc
            calculateHypotenuseStub.restore();
        });

        it("should throw an error if base or height is less than or equal to 0", () => {
            const base = 0;
            const height = 4;

            assert.throws(
                () => TriangleService.calculateHypotenuse(base, height),
                {
                    name: "Error",
                    message: "Base and height must be positive numbers",
                }
            );
        });

        it("should throw an error if base or height is not a number", () => {
            const base = "3";
            const height = 4;

            assert.throws(
                () => TriangleService.calculateHypotenuse(base, height),
                {
                    name: "Error",
                    message: "Base and height must be numbers",
                }
            );
        });

        it("should calculate the hypotenuse correctly", () => {
            const base = 3;
            const height = 4;
            const expectedHypotenuse = Math.sqrt(base * base + height * height);

            const result = TriangleService.calculateHypotenuse(base, height);

            assert.strictEqual(result, expectedHypotenuse);
        });
    });
});

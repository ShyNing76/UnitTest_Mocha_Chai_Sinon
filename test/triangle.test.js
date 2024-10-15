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
    });
});

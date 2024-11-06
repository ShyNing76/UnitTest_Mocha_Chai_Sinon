// Unit test using sinon
import sinon from "sinon";
import assert from "assert";
// import PythagoreanModel from "../models/pytagorean";
import { PythagoreanService } from "../src/services/asynchronous.pythagorean.service.js";

describe("PythagoreanModel - Spy Example with Valid/Invalid Inputs", () => {
    it("should call calculateHypotenuse with correct valid arguments", () => {
        const spy = sinon.spy(PythagoreanService, "calculateHypotenuse");

        const result = PythagoreanService.calculateHypotenuse(3, 4);

        // Kiểm tra hàm được gọi đúng cách với tham số hợp lệ
        assert.strictEqual(spy.calledOnceWithExactly(3, 4), true);
        assert.strictEqual(result, 5);

        spy.restore();
    });

    it("should throw error for invalid arguments (negative values)", () => {
        const spy = sinon.spy(PythagoreanService, "calculateHypotenuse");

        assert.throws(
            () => PythagoreanService.calculateHypotenuse(-3, 4),
            {
                name: 'Error',
                message: 'Sides must be positive numbers'
            }
        );

        // Kiểm tra rằng hàm được gọi nhưng ném ra lỗi cho giá trị âm
        assert.strictEqual(spy.threw(), true);

        spy.restore();
    });

    it("should throw error for invalid arguments (non-number values)", () => {
        const spy = sinon.spy(PythagoreanService, "calculateHypotenuse");

        assert.throws(
            () => PythagoreanService.calculateHypotenuse("three", 4),
            {
                name: "Error",
                message: "Sides must be numbers",
            }
        );

        // Kiểm tra rằng hàm được gọi nhưng ném ra lỗi cho giá trị không phải là số
        assert.strictEqual(spy.threw(), true);

        spy.restore();
    });
});

describe("PythagoreanModel - Stub Example with Valid/Invalid Inputs", () => {
    it("should return stubbed value for valid arguments", () => {
        const stub = sinon
            .stub(PythagoreanService, "calculateHypotenuse")
            .returns(10);

        const result = PythagoreanService.calculateHypotenuse(6, 8);

        // Đảm bảo giá trị trả về từ stub (10)
        assert.strictEqual(result, 10);
        assert.strictEqual(stub.calledOnceWithExactly(6, 8), true);

        stub.restore();
    });

    it("should still throw error for invalid arguments even with stub", () => {
        // Sử dụng callsFake để mô phỏng hành vi của phương thức
        const stub = sinon
            .stub(PythagoreanService, "calculateHypotenuse")
            .callsFake((a, b) => {
                if (a <= 0 || b <= 0)
                    throw new Error("Sides must be positive numbers");
                if (typeof a !== "number" || typeof b !== "number")
                    throw new Error("Sides must be numbers");
                return 10; // Giá trị giả định cho tham số hợp lệ
            });

        // Kiểm tra trường hợp đầu vào không hợp lệ ném ra lỗi
        assert.throws(
            () => PythagoreanService.calculateHypotenuse(-6, 8),
            {
                name: "Error",
                message: "Sides must be positive numbers",
            }
        );

        // Đảm bảo rằng stub đã không trả về giá trị mà thay vào đó ném ra lỗi
        stub.restore();
    });
});

describe("PythagoreanModel - Mock Example with Valid/Invalid Inputs", () => {
    it("should call calculateHypotenuse correctly with valid arguments", () => {
        const mock = sinon.mock(PythagoreanService);

        // Đặt kỳ vọng cho phương thức
        mock.expects("calculateHypotenuse")
            .once()
            .withExactArgs(3, 4)
            .returns(5);

        // Gọi phương thức và kiểm tra kết quả
        const result = PythagoreanService.calculateHypotenuse(3, 4);

        assert.strictEqual(result, 5); // Kiểm tra giá trị trả về

        mock.verify(); // Xác nhận rằng tất cả các kỳ vọng đã được thỏa mãn
        mock.restore(); // Khôi phục lại phương thức sau khi test
    });

    it("should throw error for invalid arguments (negative values)", () => {
        const mock = sinon.mock(PythagoreanService);

        // Không đặt kỳ vọng vì giá trị không hợp lệ sẽ gây lỗi
        assert.throws(
            () => PythagoreanService.calculateHypotenuse(-3, 4),
            {
                name: "Error",
                message: "Sides must be positive numbers",
            }
        );

        mock.restore();
    });

    it("should throw error for invalid arguments (non-number values)", () => {
        const mock = sinon.mock(PythagoreanService);

        // Không đặt kỳ vọng vì giá trị không hợp lệ sẽ gây lỗi
        assert.throws(
            () => PythagoreanService.calculateHypotenuse("three", 4),
            {
                name: "Error",
                message: "Sides must be numbers",
            }
        );

        mock.restore();
    });
});

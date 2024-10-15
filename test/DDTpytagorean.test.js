import assert from "assert";
import PythagoreanService from "../src/services/pythagorean.service.js";

// Các test case cho DDT
const testCases = [
    { a: 3, b: 4, expected: 5, shouldThrow: false }, // Trường hợp đúng
    { a: 5, b: 12, expected: 13, shouldThrow: false }, // Trường hợp đúng
    {
        a: 0,
        b: 4,
        expected: "Sides must be positive numbers",
        shouldThrow: true,
    }, // Lỗi cạnh không dương
    { a: 3, b: "4", expected: "Sides must be numbers", shouldThrow: true }, // Lỗi cạnh không phải số
    {
        a: -3,
        b: 4,
        expected: "Sides must be positive numbers",
        shouldThrow: true,
    }, // Lỗi cạnh âm
];

describe("PythagoreanService", () => {
    describe("calculateHypotenuse (DDT)", () => {
        // Sử dụng forEach để chạy tất cả các test case
        testCases.forEach(({ a, b, expected, shouldThrow }) => {
            const displayA = typeof a === "string" ? `"${a}"` : a; // Kiểm tra nếu a là chuỗi, in kèm dấu ngoặc kép
            const displayB = typeof b === "string" ? `"${b}"` : b; // Kiểm tra nếu b là chuỗi, in kèm dấu ngoặc kép

            if (shouldThrow) {
                // Trường hợp mong đợi ném lỗi
                it(`should throw an error for invalid inputs a=${displayA}, b=${displayB}, expected error: "${expected}"`, () => {
                    assert.throws(
                        () => PythagoreanService.calculateHypotenuse(a, b),
                        (err) => {
                            assert.strictEqual(err.message, expected);
                            return true;
                        }
                    );
                });
            } else {
                // Trường hợp tính toán đúng
                it(`should return the hypotenuse for a=${displayA}, b=${displayB}, expected result: ${expected}`, () => {
                    const result = PythagoreanService.calculateHypotenuse(a, b);
                    assert(result === expected);
                });
            }
        });
    });
});

import assert from "assert";
import PythagoreanModel from "../src/models/pythagorean.model.js";
import PythagoreanService from "../src/services/pythagorean.service.js";

// DDT test cases
const testCases = [
    { a: 3, b: 4, expected: 5, shouldThrow: false },
    { a: 5, b: 12, expected: 13, shouldThrow: false },
    {
        a: 0,
        b: 4,
        expected: "Sides must be positive numbers",
        shouldThrow: true,
    },
    { a: 3, b: "4", expected: "Sides must be numbers", shouldThrow: true },
    {
        a: -3,
        b: 4,
        expected: "Sides must be positive numbers",
        shouldThrow: true,
    },
];

describe("PythagoreanModel", () => {
    describe("calculateHypotenuse()", () => {
        testCases.forEach(({ a, b, expected, shouldThrow }) => {
            const displayA = typeof a === "string" ? `"${a}"` : a;
            const displayB = typeof b === "string" ? `"${b}"` : b;
            if (shouldThrow) {
                it(`should throw an error for invalid inputs a=${displayA}, b=${displayB}, expected error: "${expected}"`, () => {
                    assert.throws(
                        () => PythagoreanModel.calculateHypotenuse(a, b),
                        (err) => {
                            assert.strictEqual(err.message, expected);
                            return true;
                        }
                    );
                });
            } else {
                it(`should calculate the hypotenuse correctly for a=${a}, b=${b}`, () => {
                    const result = PythagoreanModel.calculateHypotenuse(a, b);
                    assert.strictEqual(
                        result,
                        expected,
                        `Failed for a=${a}, b=${b}`
                    );
                });
            }
        });

        it("should throw an error for non-positive numbers", () => {
            assert.throws(
                () => PythagoreanModel.calculateHypotenuse(0, 4),
                Error
            );
            assert.throws(
                () => PythagoreanModel.calculateHypotenuse(3, -1),
                Error
            );
        });

        it("should throw an error for non-number inputs", () => {
            assert.throws(
                () => PythagoreanModel.calculateHypotenuse("3", 4),
                Error
            );
            assert.throws(
                () => PythagoreanModel.calculateHypotenuse(3, "4"),
                Error
            );
        });

        it("should return a number", () => {
            const result = PythagoreanModel.calculateHypotenuse(3, 4);
            assert.strictEqual(typeof result, "number");
        });

        it("should handle decimal inputs", () => {
            const result = PythagoreanModel.calculateHypotenuse(1.5, 2);
            assert.strictEqual(result, 2.5);
        });

        it("should handle large numbers", () => {
            const result = PythagoreanModel.calculateHypotenuse(
                1000000,
                1000000
            );
            assert.strictEqual(result, Math.sqrt(2000000000000));
        });

        it("should handle very small numbers", () => {
            const result = PythagoreanModel.calculateHypotenuse(0.0001, 0.0001);
            assert.strictEqual(result, Math.sqrt(0.00000002));
        });

        it("should handle equal sides", () => {
            const result = PythagoreanModel.calculateHypotenuse(5, 5);
            assert.strictEqual(result, Math.sqrt(50));
        });
    });
});

describe("PythagoreanService", () => {
    describe("calculateHypotenuse()", () => {
        it("should calculate the hypotenuse correctly for 100 different inputs", () => {
            for (let i = 1; i <= 100; i++) {
                const a = i;
                const b = i + 1;
                const expectedHypotenuse = Math.sqrt(a * a + b * b);
                const result = PythagoreanService.calculateHypotenuse(a, b);
                assert.strictEqual(result, expectedHypotenuse);
            }
        });

        it("should throw an error for non-positive numbers", () => {
            assert.throws(
                () => PythagoreanService.calculateHypotenuse(0, 4),
                Error
            );
            assert.throws(
                () => PythagoreanService.calculateHypotenuse(3, -1),
                Error
            );
        });

        it("should throw an error for non-number inputs", () => {
            assert.throws(
                () => PythagoreanService.calculateHypotenuse("3", 4),
                Error
            );
            assert.throws(
                () => PythagoreanService.calculateHypotenuse(3, "4"),
                Error
            );
        });

        it("should return a number", () => {
            const result = PythagoreanService.calculateHypotenuse(3, 4);
            assert.strictEqual(typeof result, "number");
        });

        it("should handle decimal inputs", () => {
            const result = PythagoreanService.calculateHypotenuse(1.5, 2);
            assert.strictEqual(result, 2.5);
        });

        it("should not exceed 42.85 for inputs up to 30", () => {
            for (let i = 1; i <= 30; i++) {
                for (let j = 1; j <= 30; j++) {
                    const result = PythagoreanService.calculateHypotenuse(i, j);
                    assert.ok(
                        result <= 42.85,
                        `Result ${result} exceeds 42.85 for inputs ${i} and ${j}`
                    );
                }
            }
        });
    });
});

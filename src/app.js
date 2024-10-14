// call service pythagorean
import { PythagoreanService } from "./services/index.js";

const calculateHypotenuse = (sideA, sideB) => {
    try {
        const hypotenuse = PythagoreanService.calculateHypotenuse(sideA, sideB);
        console.log(hypotenuse);
    } catch (error) {
        console.log(error);
    }
};

/// Test cases #1
/// Description: Test with valid arguments (3, 4)
/// Steps:
/// 1. Call calculateHypotenuse with arguments 3 and 4
/// 2. Check if the result is 5
/// Expected output: 5
/// Actual output: 5
/// Status: Passed
calculateHypotenuse(3, 4);

/// Test cases #2
/// Description: Test with invalid arguments (0, 4)
/// Steps:
/// 1. Call calculateHypotenuse with arguments 0 and 4
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
/// Status: Passed
calculateHypotenuse(0, 4);

/// Test cases #3
/// Description: Test with invalid arguments (3, -4)
/// Steps:
/// 1. Call calculateHypotenuse with arguments 3 and -4
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse(3, -4);

/// Test cases #4
/// Description: Test with invalid arguments (3, "4")
/// Steps:
/// 1. Call calculateHypotenuse with arguments 3 and "4"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse(3, "4");

/// Test cases #5
/// Description: Test with invalid arguments ("3", "a")
/// Steps:
/// 1. Call calculateHypotenuse with arguments "3" and "a"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse("3", "a");

/// Test cases #6
/// Description: Test with invalid arguments ("3", 4)
/// Steps:
/// 1. Call calculateHypotenuse with arguments "3" and 4
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse("3", 4);

/// Test cases #7
/// Description: Test with invalid arguments (3, "4")
/// Steps:
/// 1. Call calculateHypotenuse with arguments 3 and "4"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse(3, "4");

/// Test cases #8
/// Description: Test with invalid arguments ("3", "4")
/// Steps:
/// 1. Call calculateHypotenuse with arguments "3" and "4"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse("3", "4");

/// Test cases #9
/// Description: Test with invalid arguments (3, "4")
/// Steps:
/// 1. Call calculateHypotenuse with arguments 3 and "4"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse(3, "4");

/// Test cases #10
/// Description: Test with invalid arguments ("3", "4")
/// Steps:
/// 1. Call calculateHypotenuse with arguments "3" and "4"
/// 2. Check if the result is an error
/// Expected output: Error
/// Actual output: Error
calculateHypotenuse("3", "4");

# 🧮 Pythagorean Theorem Calculator

[![CI - Run Tests and Upload Coverage](https://github.com/lehoangtrong/UnitTest_Mocha_Chai_Sinon/actions/workflows/ci.yml/badge.svg)](https://github.com/lehoangtrong/UnitTest_Mocha_Chai_Sinon/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/lehoangtrong/UnitTest_Mocha_Chai_Sinon/graph/badge.svg?token=4MEU91WEF3)](https://codecov.io/gh/lehoangtrong/UnitTest_Mocha_Chai_Sinon)

## 🎯 Project Overview
This project provides a comprehensive utility for calculating the hypotenuse of a right-angled triangle using the Pythagorean theorem, with a focus on robust unit testing and code quality.

## ✨ Features
- 📐 Calculate the hypotenuse given the lengths of the other two sides
- 🛡️ Input validation to ensure positive numbers are used
- ❗ Error handling for invalid inputs
- 🧪 Comprehensive unit testing 
- 📊 Detailed code coverage reporting

## 🛠️ Testing Toolkit Breakdown

### 🔍 Mocha: Test Framework
![Mocha Logo](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser. Key benefits:
- Supports both synchronous and asynchronous testing
- Flexible with multiple assertion libraries
- Provides simple and extensible reporting
- Supports various hooks (before, after, beforeEach, afterEach)

Example Mocha Test Structure:
```javascript
describe("PythagoreanModel", () => {
    describe("calculateHypotenuse()", () => {

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
    });
});
```

### 🕵️ Sinon: Test Doubles & Mocking
![Sinon Logo](https://img.shields.io/badge/Sinon-orange?style=for-the-badge)

Sinon provides standalone test spies, stubs, and mocks:
- **Spies**: Track function calls and arguments
- **Stubs**: Replace functions with controllable fake
- **Mocks**: Preset expectations for method calls

Example Sinon Usage:
```javascript
const sinon = require('sinon');

describe("PythagoreanModel - Spy Example with Valid/Invalid Inputs", () => {
    it("should call calculateHypotenuse with correct valid arguments", () => {
        const spy = sinon.spy(PythagoreanService, "calculateHypotenuse");

        const result = PythagoreanService.calculateHypotenuse(3, 4);

        // Kiểm tra hàm được gọi đúng cách với tham số hợp lệ
        assert.strictEqual(spy.calledOnceWithExactly(3, 4), true);
        assert.strictEqual(result, 5);

        spy.restore();
    });
});
```

### ✅ Chai: Assertion Library
![Chai Logo](https://img.shields.io/badge/Chai-A30701?style=for-the-badge)

Chai provides expressive assertion styles:
- **Assert** style: Traditional assert methods
- **Expect** style: Chainable language
- **Should** style: Extension to each object

Example Chai Assertions:
```javascript
const expect = require('chai').expect;

describe('Pythagorean Calculation', () => {
  it('should match expected hypotenuse', () => {
    const result = calculateHypotenuse(3, 4);
    
    // Different Chai assertion styles
    expect(result).to.equal(5);
    result.should.equal(5);
    assert.strictEqual(result, 5);
  });
});
```

## 📊 Code Coverage Insights
![Istanbul Logo](https://img.shields.io/badge/Istanbul-E23237?style=for-the-badge)
![Codecov Logo](https://img.shields.io/badge/Codecov-F01F7A?style=for-the-badge)

### What is Code Coverage?
Code coverage measures the percentage of code executed during testing:
- **Line Coverage**: Percentage of code lines executed
- **Branch Coverage**: Percentage of code branches tested
- **Function Coverage**: Percentage of functions called

### Tools Used
- **Istanbul (nyc)**: Comprehensive code coverage tool
- **Codecov**: Visual reporting and tracking

Example Coverage Report:
```
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   92.5  |   88.3   |   95.6  |   93.2  | 
 pythagorean.js       |   95.2  |   90.1   |   97.3  |   96.1  | 12, 45, 67
 validators.js        |   88.7  |   85.6   |   92.4  |   89.3  | 23, 56
----------------------|---------|----------|---------|---------|-------------------
```

## 🤖 AI-Powered Test Case Validation

### 🧠 Machine Learning Approach to Test Validation

#### 1. 📊 Problem Statement
Traditional test validation relies on manually written test cases and predefined validation logic. Our AI-powered approach introduces intelligent, adaptive test case verification using advanced natural language processing (NLP) techniques.

#### 2. 🔬 Technical Architecture

##### 2.1 Model Selection: DistilBERT
- **Base Model**: DistilBERT (Distilled BERT)
- **Characteristics**:
  - Lightweight transformer model
  - 95% of BERT's performance
  - Reduced computational complexity
  - Excellent for text classification tasks

##### 2.2 Training Pipeline
```python
import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
from transformers import Trainer, TrainingArguments
import pandas as pd

class TestCaseDataset(torch.utils.data.Dataset):
    def __init__(self, encodings, labels):
        self.encodings = encodings
        self.labels = labels

    def __getitem__(self, idx):
        item = {key: torch.tensor(val[idx]) for key, val in self.encodings.items()}
        item['labels'] = torch.tensor(self.labels[idx])
        return item

    def __len__(self):
        return len(self.labels)

def prepare_test_case_dataset():
    # Custom dataset creation for mathematical test cases
    test_cases = [
        {
            'description': 'The hypotenuse of a right triangle with sides 3 and 4 is 5.',
            'is_correct': 1
        },
        {
            'description': 'The hypotenuse of a right triangle with sides 5 and 12 is 15.',
            'is_correct': 0
        }
    ]
    df = pd.DataFrame(test_cases)
    return df

def train_test_validation_model():
    # Load pre-trained DistilBERT tokenizer and model
    tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
    model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased')

    # Prepare dataset
    df = prepare_test_case_dataset()
    
    # Tokenize input
    encodings = tokenizer(
        df['description'].tolist(), 
        truncation=True, 
        padding=True
    )
    
    # Create dataset
    dataset = TestCaseDataset(encodings, df['is_correct'].tolist())

    # Training arguments
    training_args = TrainingArguments(
        output_dir='./results',
        num_train_epochs=3,
        per_device_train_batch_size=16,
        learning_rate=2e-5,
        logging_dir='./logs',
    )

    # Initialize Trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset
    )

    # Train model
    trainer.train()
```

#### 3. 🎯 Validation Strategies

##### 3.1 Mathematical Verification
```python
def verify_pythagorean_test_case(description):
    try:
        # Extract numerical values
        words = description.split()
        a = float(words[7])
        b = float(words[10])
        c = float(words[-1].rstrip('.'))

        # Pythagorean theorem validation
        calculated_hypotenuse = (a**2 + b**2) ** 0.5
        
        # Compare with claimed hypotenuse
        return abs(calculated_hypotenuse - c) < 0.01
    except Exception as e:
        print(f"Verification Error: {e}")
        return False

def advanced_test_case_validation(description):
    # Combine AI classification with mathematical verification
    ai_classification = classify_test_case(description)
    mathematical_verification = verify_pythagorean_test_case(description)
    
    return {
        'ai_classification': ai_classification,
        'mathematical_verification': mathematical_verification,
        'final_verdict': ai_classification and mathematical_verification
    }
```

#### 4. 🚀 Advanced Features

##### 4.1 Continuous Learning
- Implement feedback mechanism
- Dynamically update training dataset
- Improve model accuracy over time

##### 4.2 Multi-modal Validation
- Combine NLP with mathematical reasoning
- Cross-reference multiple validation techniques

## 🧪 Example Usage
```python
test_cases = [
    "The hypotenuse of a right triangle with sides 3 and 4 is 5.",
    "The hypotenuse of a right triangle with sides 5 and 12 is 13.",
    "The hypotenuse of a right triangle with sides 6 and 8 is 10."
]

for case in test_cases:
    result = advanced_test_case_validation(case)
    print(f"Test Case: {case}")
    print(f"Validation Result: {result}\n")
```

## 📚 Required Libraries

### 🧪 Testing Framework Libraries
- Mocha
- Chai
- Sinon
- Istanbul (nyc)
- Codecov
### 🤖 AI-Powered Test Validation Libraries
- PyTorch
- Transformers (Hugging Face)
- Pandas
- Scikit-learn
- NumPy
- DistilBERT

## 🚀 Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pythagore-util.git
    ```
2. Navigate to project directory:
    ```bash
    cd pythagore-util
    ```
3. Install dependencies:
    ```bash
    # For JavaScript testing
    npm install mocha chai sinon nyc codecov

    # For AI validation (Python environment)
    pip install torch transformers pandas scikit-learn numpy
    ```
## 🧪 Running Tests
```bash
# Run test suite
npm test

# Generate coverage report
npm run test:coverage
```

## 🤝 Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/Feature`)
3. Commit changes (`git commit -m 'Add Feature'`)
4. Push to branch (`git push origin feature/Feature`)
5. Open Pull Request

## 📄 License
Distributed under the MIT License.

## 📧 Contact
- Project Link: [GitHub Repo](https://github.com/ShyNing76/UnitTest_Mocha_Chai_Sinon)
- Email: doduylong070604@gmail.com

---

## 💡 Additional Resources
- [Mocha Documentation](https://mochajs.org/)
- [Sinon.js Guides](https://sinonjs.org/)
- [Chai Assertion Library](https://www.chaijs.com/)
- [Istanbul Code Coverage](https://istanbul.js.org/)

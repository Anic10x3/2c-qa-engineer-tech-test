
# 📘 QA Engineer Tech Test – Testing Guide

This project contains automated **API & UI** built using modern testing tools. It supports **Allure reporting** for generating detailed and interactive test reports.

---

## 📑 Table of Contents

- Overview  
- Prerequisites  
- Installation  
- Test Types  
  - API Tests  
  - UI Tests  
- Running Tests  
  - Run All Tests  
  - Run API Tests Only  
  - Run UI Tests Only  
  - Run Tests with Allure Reporting  
- Generating Allure Reports  
- Folder Structure  
- Available Scripts  

---

## ✅ Overview

This project uses the following tools:

- **Playwright** – End-to-end (E2E) and API testing  
- **Vitest** – Unit testing  
- **Allure** – Detailed test reporting  

Tests are categorized using tags such as:

- `@api`
- `@ui`
- `@smoke`
- `@positive`
- `@negative`

---

## 🧰 Prerequisites

Make sure the following are installed on your system:

- **Node.js** (Version 18 or higher)  
- **npm** (Comes with Node.js)  
- **Git** (For cloning the repository)

Verify installations:

```bash
node -v
npm -v
git --version
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url> if merged
git checkout <Anic10x3:feat/qa-assignment-e2e> : Checkout to my branch
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Test Types

### 1. API Tests
- Used to test backend API endpoints
- Located in the `tests/api` directory
- Tagged with `@api`

### 2. UI Tests
- Used to test frontend user interface
- Located in the `tests/ui` directory
- Tagged with `@ui`

---

## ▶️ Running Tests

### ✅ Run All Tests (Unit + API + UI)

```bash
npm run test
```

---

### ✅ Run API Tests Only

```bash
npm run test:api
```

---

### ✅ Run UI Tests Only

```bash
npm run test:ui
```

---

### ✅ Run Tests with Allure Reporting

```bash
npm run test:allure:serve
```

This will generate test results in the `allure-results` directory.


---

## 📊 Generating Allure Reports

### 🔹 Generate Allure Report

```bash
npm run allure:generate
```

---

### 🔹 Open Allure Report in Browser

```bash
npm run allure:open
```

---

### 🔹 Run Tests and Serve Allure Report (One Command)

```bash
npm run test:allure:serve
```

---

## 📁 Folder Structure

```text
tests/
├── api/               # API tests
│   ├── books.api.spec.ts
├── ui/                # UI tests
│   ├── add-book.ui.spec.ts
│   ├── book-details.ui.spec.ts
├── page-objects/      # Page Object Models
│   ├── AddBookPage.ts
│   ├── BookDetailsPage.ts
├── utils/             # Utility functions
│   ├── validationUtils.ts
├── fixtures/          # Test data fixtures
│   ├── books-test-data.ts

allure-results/        # Allure test results (ignored in Git)
allure-report/         # Allure reports (ignored in Git)
```

---

## ⚙️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run test` | Run all tests (unit, API, and UI) |
| `npm run test:e2e` | Run E2E tests using Playwright |
| `npm run test:allure` | Run tests with Allure reporting |
| `npm run allure:generate` | Generate Allure reports |
| `npm run allure:open` | Open Allure report in browser |
| `npm run test:allure:serve` | Run tests, generate and serve Allure report |

---

## 📌 Notes

- `allure-results/` and `allure-report/` are **ignored in Git**
- Make sure the application under test is **running before executing UI tests**, if required.
- Tests can be filtered using tags for selective execution.

## 🔭 Scope of Improvements
- Integration with Cloud provider
- Integration with CI tool
- Slack reporting in Action 


## Document
- tests/Documents - Two Circles Bugs.pdf
- tests/Documents - Two Circles Testcases.xlsx
- Note: It was a small assignment so didnt include test plan in it

## Author

# 📘 QA Engineer Tech Test – Testing Guide

This project contains automated **API & UI** built using modern testing tools. It supports **Allure reporting** for generating detailed and interactive test reports.

---

## 📑 Table of Contents

- Overview  
- Prerequisites  
- Installation  
- Test Types  
  - API Tests  
  - UI Tests  
- Running Tests  
  - Run All Tests  
  - Run API Tests Only  
  - Run UI Tests Only  
  - Run Tests with Allure Reporting  
- Generating Allure Reports  
- Folder Structure  
- Available Scripts  

---

## ✅ Overview

This project uses the following tools:

- **Playwright** – End-to-end (E2E) and API testing  
- **Vitest** – Unit testing  
- **Allure** – Detailed test reporting  

Tests are categorized using tags such as:

- `@api`
- `@ui`
- `@smoke`
- `@positive`
- `@negative`

---

## 🧰 Prerequisites

Make sure the following are installed on your system:

- **Node.js** (Version 18 or higher)  
- **npm** (Comes with Node.js)  
- **Git** (For cloning the repository)

Verify installations:

```bash
node -v
npm -v
git --version
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url> if merged
git checkout <Anic10x3:feat/qa-assignment-e2e> : Checkout to my branch
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Test Types

### 1. API Tests
- Used to test backend API endpoints
- Located in the `tests/api` directory
- Tagged with `@api`

### 2. UI Tests
- Used to test frontend user interface
- Located in the `tests/ui` directory
- Tagged with `@ui`

---

## ▶️ Running Tests

### ✅ Run All Tests (Unit + API + UI)

```bash
npm run test
```

---

### ✅ Run API Tests Only

```bash
npm run test:api
```

---

### ✅ Run UI Tests Only

```bash
npm run test:ui
```

---

### ✅ Run Tests with Allure Reporting

```bash
npm run test:allure:serve
```

This will generate test results in the `allure-results` directory.


---

## 📊 Generating Allure Reports

### 🔹 Generate Allure Report

```bash
npm run allure:generate
```

---

### 🔹 Open Allure Report in Browser

```bash
npm run allure:open
```

---

### 🔹 Run Tests and Serve Allure Report (One Command)

```bash
npm run test:allure:serve
```

---

## 📁 Folder Structure

```text
tests/
├── api/               # API tests
│   ├── books.api.spec.ts
├── ui/                # UI tests
│   ├── add-book.ui.spec.ts
│   ├── book-details.ui.spec.ts
├── page-objects/      # Page Object Models
│   ├── AddBookPage.ts
│   ├── BookDetailsPage.ts
├── utils/             # Utility functions
│   ├── validationUtils.ts
├── fixtures/          # Test data fixtures
│   ├── books-test-data.ts

allure-results/        # Allure test results (ignored in Git)
allure-report/         # Allure reports (ignored in Git)
```

---

## ⚙️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run test` | Run all tests (unit, API, and UI) |
| `npm run test:e2e` | Run E2E tests using Playwright |
| `npm run test:allure` | Run tests with Allure reporting |
| `npm run allure:generate` | Generate Allure reports |
| `npm run allure:open` | Open Allure report in browser |
| `npm run test:allure:serve` | Run tests, generate and serve Allure report |

---

## 📌 Notes

- `allure-results/` and `allure-report/` are **ignored in Git**
- Make sure the application under test is **running before executing UI tests**, if required.
- Tests can be filtered using tags for selective execution.

## 🔭 Scope of Improvements
- Integration with Cloud provider
- Integration with CI tool - Added the config
- Slack reporting in Action 


## Document
- tests/Documents - Two Circles Bugs.pdf
- tests/Documents - Two Circles Testcases.xlsx
- Note: It was a small assignment so didnt include test plan in it

## Author
- Aniket Khaire
# Auxo-Test-Automation Project

This project contains automated UI  tests using [Cypress](https://www.cypress.io/) for validating login and add cutomer functionalities.

---


### Prerequisites

- [Node.js](https://nodejs.org/) 
- npm (comes with Node.js)
- Git (optional, for version control)

### Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/kalani-amarathunga/Auxo-Test-Automation.git]
cd Auxo-Test-Automation
npm install
```

---

##  Project Structure

```
cypress-automation/
├── cypress/
│   ├── e2e/                 # Test specs
│   ├── fixtures/            # Test data
│   ├── support/
│   │   ├── commands.js      # Custom Cypress commands
│   │   └── e2e.js           # Global setup
│   │   └── pages/           # Page object classes
├── cypress.config.js        # Cypress configuration including base and origin urls
├── package.json             # Project metadata and scripts
└── README.md                # Project documentation
```

---

## Running Tests

### Open Cypress Test Runner (headed mode)

```bash
npx cypress open
```

### Run Tests in CLI (headless mode)

```bash
npx cypress run
```

### Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## ⚙️ Configuration

You can update base URL and other settings in `cypress.config.js`:

---

##  Scripts

Add these to your `package.json` for convenience:

```json
"scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:chrome:headed": "cypress run --browser chrome --headed"
}
```


## 🛠️ Future Enhancements

- Integrate with CI/CD (e.g., GitHub Actions, Jenkins)
- Expand test coverage for edge cases and error handling
- Include performance and accessibility checks

---

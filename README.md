# Team building balancer web app

# Playwright Test Automation

This repository contains automated tests using [Playwright](https://playwright.dev/) for testing the 
**Team Building Balancer** application. The tests cover login functionality and a flow for selecting a sport, assigning teams, and verifying player details.

### Key Files
1. **`fixtures/data.json`**: Stores reusable data such as login credentials and application URLs.
2. **`tests/signIn.spec.ts`**: Contains the login test.
3. **`tests/selectSport.spec.ts`**: Automates the team-building flow.
4. **`utils/auth.js`**: Contains reusable functions like `performLogin`.

## Prerequisites

Ensure the following tools are installed:
- Node.js (v14 or later)
- npm (Node Package Manager)

Install Playwright and its dependencies:
```bash
npm install @playwright/test
npx playwright install
Running Tests
Run All Tests
bash
Copy code
npx playwright test
Run a Specific Test
For example, to run the login test:

bash
Copy code
npx playwright test tests/signIn.spec.ts
Debug a Test
Use debug mode to step through your tests:

bash
Copy code
npx playwright test tests/selectSport.spec.ts --debug
Run with Verbose Logs
bash
Copy code
DEBUG=pw:api npx playwright test

# 0x01. ES6 Promises

## Description
This project focuses on JavaScript Promises and how they are used to handle asynchronous operations in ES6. By the end of this project, you will understand how to create and work with Promises using various methods such as `then`, `catch`, `resolve`, and `reject`. You will also learn about `async/await`, `try/catch`, and handling multiple promises simultaneously.

---

## Learning Objectives

By the end of this project, you should be able to:

- Understand what Promises are, and how to use them.
- Use `.then()`, `.catch()`, and `.resolve()` methods.
- Handle asynchronous operations using `async` and `await`.
- Implement error handling using `throw` and `try/catch`.
- Work with multiple promises using `Promise.all()` and `Promise.race()`.

---

## Requirements

- **Environment:** Ubuntu 18.04 LTS using NodeJS 12.11.x.
- **Editor:** vi, vim, emacs, or Visual Studio Code.
- **Code Style:** ESLint is used for code linting.
- **Testing:** All tests will be run using Jest. Command: `npm run test`.
- **File Structure:** All files should end with a new line. All JavaScript files must have `.js` extensions, and functions must be exported.
- **Mandatory Files:**
  - `README.md` at the root of the project directory.
  - Config files: `.eslintrc.js`, `babel.config.js`, and `package.json` for project setup.

---

## Project Setup

### Install NodeJS 12.11.x

1. Run the following commands:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
2. Check the installation:
    ```bash
    nodejs -v
    npm -v
    ```

### Install Dependencies

In your project directory, install `Jest`, `Babel`, and `ESLint` by running:

```bash
npm install

## Configuration Files

### `package.json`
This file contains the project's dependencies and scripts. You can find the content in the project directory.

### `babel.config.js`
This file is used to configure Babel for transpiling ES6 code. It is included in the project directory.

### `.eslintrc.js`
This file contains configuration for ESLint, which helps maintain clean and consistent JavaScript code.

### `utils.js`
This file provides utility functions `uploadPhoto` and `createUser` used in several tasks.

---

## Response Data Format

### `uploadPhoto` returns:
```json
{
  "status": 200,
  "body": "photo-profile-1"
}

## Response Data Format

### `createUser` returns:
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}

## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File:** `0-promise.js`
- **Prototype:** `getResponseFromAPI()`
- Returns a Promise.

### 1. Don't make a promise...if you know you can't keep it
- **File:** `1-promise.js`
- **Prototype:** `getFullResponseFromAPI(success)`
- Resolves with `{ status: 200, body: 'Success' }` on success and rejects with `Error: The fake API is not working currently` on failure.

### 2. Catch me if you can!
- **File:** `2-then.js`
- **Prototype:** `handleResponseFromAPI(promise)`
- Appends handlers to log messages and return objects.

### 3. Handle multiple successful promises
- **File:** `3-all.js`
- **Prototype:** `handleProfileSignup()`
- Uses `Promise.all()` to handle multiple promises and log their results.

### 4. Simple promise
- **File:** `4-user-promise.js`
- **Prototype:** `signUpUser(firstName, lastName)`
- Returns a resolved Promise with user details.

### 5. Reject the promises
- **File:** `5-photo-reject.js`
- **Prototype:** `uploadPhoto(fileName)`
- Returns a rejected promise with an error message.

### 6. Handle multiple promises
- **File:** `6-final-user.js`
- **Prototype:** `handleProfileSignup(firstName, lastName, fileName)`
- Calls two promises and returns an array of results.

### 7. Load balancer
- **File:** `7-load_balancer.js`
- **Prototype:** `loadBalancer(chinaDownload, USDownload)`
- Returns the value of the first promise that resolves.

### 8. Throw error / try catch
- **File:** `8-try.js`
- **Prototype:** `divideFunction(numerator, denominator)`
- Throws an error if the denominator is zero.

### 9. Throw an error
- **File:** `9-try.js`
- **Prototype:** `guardrail(mathFunction)`
- Returns an array with the function result or error and a guardrail message.

### 10. Await / Async
- **File:** `100-async.js`
- **Prototype:** `asyncUploadUser()`
- Uses `async` and `await` to handle asynchronous tasks.

---

## Author
This project was completed as part of the **ALX Backend JavaScript** curriculum.

- **GitHub repository:** [alx-backend-javascript](https://github.com/eodenyire/alx-backend-javascript)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Demo
![DEMO](https://i.gyazo.com/65a95501ead13e7999ff9df92257de22.gif)

## Prerequisites
To run this project the following components needs to be installed before following the setup instructions:
1. [Nodejs](https://nodejs.dev/)
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. [API/Backend project](https://github.com/mohamedsamny/vending-machine) up and running on `PORT=3000` for localhost/development.

## Getting started
To run this project in development mode follow these instructions:

1. Install project dependencies:
```bash
npm install
```

2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Github Actions (CI)
I have implemented a simple CI pipeline utilizing Github actions which basically runs `eslint`to lint the javascript code and report if any rules are violated.

## Tests
This project does not implement any tests as it was meant to be a POC/MVP during a very limited time.


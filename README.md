# Real World Testing with Cypress - Course App

This application is for the UI Automation on (https://saucedemo.com/).


The following steps provide overview of the project: 

Launch Visual Studio Code on your machine.

A new directory is created for project:
    mkdir cypress-ui-automation
    cd cypress-ui-automation

TheVisual studio is opened in the directory and Node js initialixed using: 
    npm init -y
Cypress in installed as a dev dependency by:
    npm install cypress --save-dev
Cypress Test Runner is opened in Visual Studio Code by:
    npx cypress open
There are 2 folders in the Cypress framework that are used for this project:
    fixtures: It stores data
    integrations: it contains Test files
In the integartion folder a spec file is created named as : 'shopping.spec.cy.js', where the test cases have been written.

The 'shopping.spec.cy.js' file has two steps on test:
    1. to test invalid login, where the website and invalid login is provided and the error is validated.
    2. In this website is visited and valid login is provided, then item is added to cart and afterwards the card is validated.


In the fixture folder, a 'testData.json' file is created to store the items which have to added in the cart.

The test can be run by opening the Cypresss Test runner and Selecting the file to run.
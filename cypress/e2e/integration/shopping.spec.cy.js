describe('Shopping Test', () => {
    const testData = require('../fixtures/testData.json');

    it('should handle login with invalid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('invalidusername');
        cy.get('#password').type('invalidpassword');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Username and password do not match any user in this service');
    });

    it('should login with valid credentials and add items to the cart', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // Data-driven test to add items to the cart
        testData.items.forEach(item => {
            cy.contains('.inventory_item', item).within(() => {
                cy.get('.btn_primary').click();
            });
        });

        // Navigate to the cart
        cy.get('.shopping_cart_link').click();

        // Assert that items are added to the cart
        testData.items.forEach(item => {
            cy.contains('.cart_item', item).should('be.visible');
        });
    });
});

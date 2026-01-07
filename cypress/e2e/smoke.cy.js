describe('Portfolio Smoke Test', () => {
    it('Loads site and checks main sections', () => {
        cy.visit('/');

        // Check Hero Section
        cy.contains('Aaron Belanger').should('be.visible');
        cy.contains('Software Quality Engineer').should('be.visible');

        // Check Navigation
        cy.get('.navbar').should('be.visible');
        cy.get('[data-cy="nav-about"]').click();

        // Check About Section (should be visible after scroll)
        cy.get('#about').should('be.visible');
        cy.contains('Technical Arsenal').should('be.visible');

        // Check Contact Form
        cy.get('[data-cy="nav-contact"]').click();
        cy.get('[data-cy="contact-form"]').should('be.visible');
    });
});
